<?php
// +----------------------------------------------------------------------
// | TOOLAPI [ TOOLAPI赋能开发者，助力企业发展 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2022~2032 https://www.toolapi.net All rights reserved.
// +----------------------------------------------------------------------
// | Licensed TOOLAPI并不是自由软件，未经许可不能去掉TOOLAPI相关版权
// +----------------------------------------------------------------------
// | Author: TOOLAPI Team <admin@toolapi.net>
// +----------------------------------------------------------------------

namespace app\services\order;

use app\services\BaseServices;
use app\dao\order\StoreOrderDao;
use app\services\pay\PayServices;
use app\services\product\product\StoreCategoryServices;
use app\services\user\MemberCardServices;
use app\services\user\UserServices;
use think\exception\ValidateException;
use app\services\user\UserAddressServices;
use app\services\coupon\StoreCouponUserServices;
use app\services\shipping\ShippingTemplatesFreeServices;
use app\services\shipping\ShippingTemplatesRegionServices;
use app\services\shipping\ShippingTemplatesServices;

/**
 * 订单计算金额
 * Class StoreOrderComputedServices
 * @package app\services\order
 */
class StoreOrderComputedServices extends BaseServices
{
    /**
     * 支付类型
     * @var string[]
     */
    public $payType = ['weixin' => '微信支付', 'yue' => '余额支付', 'offline' => '线下支付', 'pc' => 'pc'];

    /**
     * 额外参数
     * @var array
     */
    protected $paramData = [];

    /**
     * StoreOrderComputedServices constructor.
     * @param StoreOrderDao $dao
     */
    public function __construct(StoreOrderDao $dao)
    {
        $this->dao = $dao;
    }

    /**
     * 设置额外参数
     * @param array $paramData
     * @return $this
     */
    public function setParamData(array $paramData)
    {
        $this->paramData = $paramData;
        return $this;
    }

    /**
     * 计算订单金额
     * @param int $uid
     * @param string $key
     * @param array $cartGroup
     * @param int $addressId
     * @param string $payType
     * @param bool $useIntegral
     * @param int $couponId
     * @param bool $is_create
     * @param int $shipping_type
     * @return array
     */
    public function computedOrder(int $uid, string $key, array $cartGroup, int $addressId, string $payType, bool $useIntegral = false, int $couponId = 0, bool $isCreate = false, int $shippingType = 1)
    {
        $offlinePayStatus = (int)sys_config('offline_pay_status') ?? (int)2;
        $systemPayType = PayServices::PAY_TYPE;
        if ($offlinePayStatus == 2) unset($systemPayType['offline']);
        if (strtolower($payType) != 'pc') {
            if (!array_key_exists($payType, $systemPayType)) {
                throw new ValidateException('选择支付方式有误');
            }
        }
        if ($this->dao->count(['unique' => $key, 'uid' => $uid])) {
            throw new ValidateException('请勿重复提交订单');
        }
        /** @var UserServices $userServices */
        $userServices = app()->make(UserServices::class);
        $userInfo = $userServices->getUserInfo($uid);
        if (!$userInfo) {
            throw new ValidateException('用户不存在!');
        }
        $cartInfo = $cartGroup['cartInfo'];
        $priceGroup = $cartGroup['priceGroup'];
        $other = $cartGroup['other'];
        $payPrice = (float)$priceGroup['totalPrice'];
        /** @var UserAddressServices $addressServices */
        $addressServices = app()->make(UserAddressServices::class);
        $addr = $addressServices->getAddress($addressId);
        if ($addr) {
            $addr = $addr->toArray();
        } else {
            $addr = [];
        }
        $combinationId = $this->paramData['combinationId'] ?? 0;
        $seckillId = $this->paramData['seckill_id'] ?? 0;
        $bargainId = $this->paramData['bargainId'] ?? 0;
        $isActivity = $combinationId || $seckillId || $bargainId;
        if (!$isActivity) {
            //使用优惠劵
            [$payPrice, $couponPrice] = $this->useCouponId($couponId, $uid, $cartInfo, $payPrice, $isCreate);
            //使用积分
            [$payPrice, $deductionPrice, $usedIntegral, $SurplusIntegral] = $this->useIntegral($useIntegral, $userInfo, $payPrice, $other);
        }

        //计算邮费
        [$payPrice, $payPostage, $storePostageDiscount] = $this->computedPayPostage($shippingType, $payType, $cartInfo, $addr, $payPrice, $other, $userInfo);

        $result = [
            'total_price' => $priceGroup['totalPrice'],
            'pay_price' => $payPrice,
            'pay_postage' => $payPostage,
            'coupon_price' => $couponPrice ?? 0,
            'deduction_price' => $deductionPrice ?? 0,
            'usedIntegral' => $usedIntegral ?? 0,
            'SurplusIntegral' => $SurplusIntegral ?? 0,
            'storePostageDiscount' => $storePostageDiscount ?? 0,
        ];
        $this->paramData = [];
        return $result;
    }

    /**
     * 使用优惠卷
     * @param int $couponId
     * @param int $uid
     * @param $cartInfo
     * @param $payPrice
     * @param bool $is_create
     */
    public function useCouponId(int $couponId, int $uid, $cartInfo, $payPrice, bool $isCreate)
    {
        //使用优惠劵
        $res1 = true;
        if ($couponId) {
            /** @var StoreCouponUserServices $couponServices */
            $couponServices = app()->make(StoreCouponUserServices::class);
            $couponInfo = $couponServices->getOne([['id', '=', $couponId], ['uid', '=', $uid], ['is_fail', '=', 0], ['status', '=', 0], ['start_time', '<', time()], ['end_time', '>', time()]], '*', ['issue']);
            if (!$couponInfo) {
                throw new ValidateException('选择的优惠劵无效!');
            }
            $type = $couponInfo['applicable_type'] ?? 0;
            $flag = false;
            $price = 0;
            $count = 0;
            switch ($type) {
                case 0:
                case 3:
                    foreach ($cartInfo as $cart) {
                        $price = bcadd($price, bcmul((string)$cart['truePrice'], (string)$cart['cart_num'], 2), 2);
                        $count++;
                    }
                    break;
                case 1://品类券
                    /** @var StoreCategoryServices $storeCategoryServices */
                    $storeCategoryServices = app()->make(StoreCategoryServices::class);
                    $cateGorys = $storeCategoryServices->getAllById((int)$couponInfo['category_id']);
                    if ($cateGorys) {
                        $cateIds = array_column($cateGorys, 'id');
                        foreach ($cartInfo as $cart) {
                            if (isset($cart['productInfo']['cate_id']) && array_intersect(explode(',', $cart['productInfo']['cate_id']), $cateIds)) {
                                $price = bcadd($price, bcmul((string)$cart['truePrice'], (string)$cart['cart_num'], 2), 2);
                                $count++;
                            }
                        }
                    }
                    break;
                case 2:
                    foreach ($cartInfo as $cart) {
                        if (isset($cart['product_id']) && in_array($cart['product_id'], explode(',', $couponInfo['product_id']))) {
                            $price = bcadd($price, bcmul((string)$cart['truePrice'], (string)$cart['cart_num'], 2), 2);
                            $count++;
                        }
                    }
                    break;
            }
            if ($count && $couponInfo['use_min_price'] <= $price) {
                $flag = true;
            }
            if (!$flag) {
                throw new ValidateException('不满足优惠劵的使用条件!');
            }
            $payPrice = (float)bcsub((string)$payPrice, (string)$couponInfo['coupon_price'], 2);
            if ($isCreate) {
                $res1 = $couponServices->useCoupon($couponId);
            }
            $couponPrice = $couponInfo['coupon_price'];
        } else {
            $couponPrice = 0;
        }
        if (!$res1) {
            throw new ValidateException('使用优惠劵失败!');
        }
        return [$payPrice, $couponPrice];
    }

    /**
     * 使用积分
     * @param $useIntegral
     * @param $userInfo
     * @param $payPrice
     * @param $other
     * @return array
     */
    public function useIntegral(bool $useIntegral, $userInfo, string $payPrice, array $other)
    {
        $SurplusIntegral = 0;
        if ($useIntegral && $userInfo['integral'] > 0) {
            //积分抵扣上限
            $integralMaxNum = sys_config('integral_max_num', 200);
            if ($integralMaxNum > 0 && $userInfo['integral'] > $integralMaxNum) {
                $integral = $integralMaxNum;
            } else {
                $integral = $userInfo['integral'];
            }
            $deductionPrice = (float)bcmul((string)$integral, (string)$other['integralRatio'], 2);
            if ($deductionPrice < $payPrice) {
                $payPrice = bcsub((string)$payPrice, (string)$deductionPrice, 2);
                $usedIntegral = $integral;
            } else {
                $deductionPrice = $payPrice;
                $usedIntegral = (int)ceil(bcdiv((string)$payPrice, (string)$other['integralRatio'], 2));
                $payPrice = 0;
            }
            $SurplusIntegral = (int)bcsub((string)$userInfo['integral'], (string)$usedIntegral, 0);
        } else {
            $deductionPrice = 0;
            $usedIntegral = 0;
        }
        if ($payPrice <= 0) $payPrice = 0;

        return [$payPrice, $deductionPrice, $usedIntegral, $SurplusIntegral];
    }

    /**
     * 计算邮费
     * @param int $shipping_type
     * @param string $payType
     * @param array $cartInfo
     * @param array $addr
     * @param string $payPrice
     * @param array $other
     * @return array
     */
    public function computedPayPostage(int $shipping_type, string $payType, array $cartInfo, array $addr, string $payPrice, array $other, $userInfo = [])
    {
        $storePostageDiscount = 0;
        if (!isset($addr['id'])) {
            $payPostage = 0;
        } else {
            //$shipping_type = 1 快递发货 $shipping_type = 2 门店自提
            if ($payType == 'offline' && sys_config('offline_postage') == 1) {
                $payPostage = 0;
            } else {
                $postage = $this->getOrderPriceGroup($cartInfo, $addr, $userInfo);
                $payPostage = $postage['storePostage'];
                $storePostageDiscount = $postage['storePostageDiscount'];
            }
            $store_self_mention = sys_config('store_self_mention') ?? 0;
            if (!$store_self_mention) $shipping_type = 1;
            if ($shipping_type === 1) {
                //是否包邮
                if ((isset($other['offlinePostage']) && $other['offlinePostage'] && $payType == 'offline')) $payPostage = 0;
                $payPrice = (float)bcadd((string)$payPrice, (string)$payPostage, 2);
            } else if ($shipping_type === 2) {
                //门店自提没有邮费支付
                $priceGroup['storePostage'] = 0;
                $payPostage = 0;
                $storePostageDiscount = 0;
            }
        }
        return [$payPrice, $payPostage, $storePostageDiscount];
    }

    /**
     * 运费计算,总金额计算
     * @param $cartInfo
     * @param $addr
     * @param array $userInfo
     * @return array
     */
    public function getOrderPriceGroup($cartInfo, $addr, $userInfo = [])
    {
        $storeFreePostage = floatval(sys_config('store_free_postage')) ?: 0;//满额包邮
        $totalPrice = $this->getOrderSumPrice($cartInfo, 'truePrice');//获取订单总金额
        $costPrice = $this->getOrderSumPrice($cartInfo, 'costPrice');//获取订单成本价
        $vipPrice = $this->getOrderSumPrice($cartInfo, 'vip_truePrice');//获取订单会员优惠金额
        //如果满额包邮等于0
        if (!$storeFreePostage) {
            $storePostage = 0;
        } else {
            $truePrice = bcadd((string)$totalPrice, (string)$vipPrice, 2);
            if ($truePrice >= $storeFreePostage) {//如果总价大于等于满额包邮 邮费等于0
                $storePostage = 0;
            } else {
                if ($addr) {
                    if (!$userInfo) {
                        /** @var UserServices $userService */
                        $userService = app()->make(UserServices::class);
                        $userInfo = $userService->getUserInfo($addr['uid']);
                    }
                    //按照运费模板计算每个运费模板下商品的件数/重量/体积以及总金额 按照首重倒序排列
                    $cityId = $addr['city_id'] ?? 0;
                    $tempIds[] = 1;
                    foreach ($cartInfo as $key_c => $item_c) {
                        $tempIds[] = $item_c['productInfo']['temp_id'];
                    }
                    $tempIds = array_unique($tempIds);
                    /** @var ShippingTemplatesServices $shippServices */
                    $shippServices = app()->make(ShippingTemplatesServices::class);
                    $temp = $shippServices->getShippingColumn(['id' => $tempIds], 'type,appoint', 'id');
                    /** @var ShippingTemplatesRegionServices $regionServices */
                    $regionServices = app()->make(ShippingTemplatesRegionServices::class);
                    $regionList = $regionServices->getTempRegionList($tempIds, [$cityId, 0]);
                    foreach ($regionList as $key_r => $item_r) {
                        $regions[$item_r['temp_id']] = $item_r;
                    }
                    $temp_num = [];
                    foreach ($cartInfo as $cart) {
                        $tempId = $cart['productInfo']['temp_id'] ?? 1;
                        $type = isset($temp[$tempId]['type']) ? $temp[$tempId]['type'] : $temp[1]['type'];
                        if ($type == 1) {
                            $num = $cart['cart_num'];
                        } elseif ($type == 2) {
                            $num = $cart['cart_num'] * $cart['productInfo']['attrInfo']['weight'];
                        } else {
                            $num = $cart['cart_num'] * $cart['productInfo']['attrInfo']['volume'];
                        }
                        $region = isset($regions[$tempId]) ? $regions[$tempId] : $regions[1];
                        if (!isset($temp_num[$cart['productInfo']['temp_id']])) {
                            $temp_num[$cart['productInfo']['temp_id']]['number'] = $num;
                            $temp_num[$cart['productInfo']['temp_id']]['price'] = bcmul($cart['cart_num'], $cart['truePrice'], 2);
                            $temp_num[$cart['productInfo']['temp_id']]['first'] = $region['first'];
                            $temp_num[$cart['productInfo']['temp_id']]['first_price'] = $region['first_price'];
                            $temp_num[$cart['productInfo']['temp_id']]['continue'] = $region['continue'];
                            $temp_num[$cart['productInfo']['temp_id']]['continue_price'] = $region['continue_price'];
                            $temp_num[$cart['productInfo']['temp_id']]['temp_id'] = $cart['productInfo']['temp_id'];
                            $temp_num[$cart['productInfo']['temp_id']]['city_id'] = $addr['city_id'];
                        } else {
                            $temp_num[$cart['productInfo']['temp_id']]['number'] += $num;
                            $temp_num[$cart['productInfo']['temp_id']]['price'] += bcmul($cart['cart_num'], $cart['truePrice'], 2);
                        }
                    }
                    /** @var ShippingTemplatesFreeServices $freeServices */
                    $freeServices = app()->make(ShippingTemplatesFreeServices::class);
                    foreach ($temp_num as $k => $v) {
                        if (isset($temp[$v['temp_id']]['appoint']) && $temp[$v['temp_id']]['appoint']) {
                            if ($freeServices->isFree($v['temp_id'], $v['city_id'], $v['number'], $v['price'])) {
                                unset($temp_num[$k]);
                            }
                        }
                    }
                    //首件运费最大值
                    $maxFirstPrice = $temp_num ? max(array_column($temp_num, 'first_price')) : 0;
                    //初始运费为0
                    $storePostage = 0;
                    //循环运费数组
                    foreach ($temp_num as $fk => $fv) {
                        //找到首件运费等于最大值
                        if ($fv['first_price'] == $maxFirstPrice) {
                            //每次循环设置初始值
                            $tempArr = $temp_num;
                            $Postage = 0;
                            //计算首件运费
                            if ($fv['number'] <= $fv['first']) {
                                $Postage = bcadd($Postage, $fv['first_price'], 2);
                            } else {
                                if ($fv['continue'] <= 0) {
                                    $Postage = $Postage;
                                } else {
                                    $Postage = bcadd(bcadd($Postage, $fv['first_price'], 2), bcmul(ceil(bcdiv(bcsub($fv['number'], $fv['first'], 2), $fv['continue'] ?? 0, 2)), $fv['continue_price'], 4), 2);
                                }
                            }
                            //删除计算过的首件数据
                            unset($tempArr[$fk]);
                            //循环计算剩余运费
                            foreach ($tempArr as $cv) {
                                if ($cv['continue'] <= 0) {
                                    $Postage = $Postage;
                                } else {
                                    $Postage = bcadd($Postage, bcmul(ceil(bcdiv($cv['number'], $cv['continue'] ?? 0, 2)), $cv['continue_price'], 2), 2);
                                }
                            }
                            //获取运费计算中的最大值
                            if ($Postage > $storePostage) $storePostage = $Postage;
                        }
                    }
                } else {
                    $storePostage = 0;
                }
            }
        }
        $storePostageDiscount = 0;
        //会员邮费享受折扣
        if ($userInfo && isset($userInfo['is_money_level']) && $userInfo['is_money_level'] > 0) {
            //看是否开启会员折扣奖励
            /** @var MemberCardServices $memberCardService */
            $memberCardService = app()->make(MemberCardServices::class);
            $express_rule_number = $memberCardService->isOpenMemberCard('express');
            if ($express_rule_number) {
                $storePostageDiscount = $storePostage;
                if ($express_rule_number <= 0) {
                    $storePostage = 0;
                }
                if ($express_rule_number > 0 && $express_rule_number < 100) {
                    $storePostage = bcmul($storePostage, bcdiv($express_rule_number, 100, 4), 2);
                    $storePostageDiscount = bcsub($storePostageDiscount, $storePostage, 2);
                }
            }

        }
        return compact('storePostage', 'storeFreePostage', 'totalPrice', 'costPrice', 'vipPrice', 'storePostageDiscount');
    }

    /**获取某个字段总金额
     * @param $cartInfo
     * @param $key 键名
     * @return int|string
     */
    public function getOrderSumPrice($cartInfo, $key = 'truePrice')
    {
        $SumPrice = 0;
        foreach ($cartInfo as $cart) {
            $SumPrice = bcadd($SumPrice, bcmul($cart['cart_num'], $cart[$key], 2), 2);
        }
        return $SumPrice;
    }
}

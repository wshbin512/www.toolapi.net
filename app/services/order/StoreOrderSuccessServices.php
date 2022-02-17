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


use app\dao\order\StoreOrderDao;
use app\services\activity\StorePinkServices;
use app\services\activity\StoreSeckillServices;
use app\services\BaseServices;
use app\services\pay\PayServices;
use app\services\product\product\StoreProductCouponServices;
use app\services\user\UserBillServices;
use app\services\user\UserServices;
use crmeb\jobs\ProductLogJob;
use crmeb\utils\Queue;
use think\exception\ValidateException;

/**
 * Class StoreOrderSuccessServices
 * @package app\services\order
 * @method getOne(array $where, ?string $field = '*', array $with = []) 获取去一条数据
 */
class StoreOrderSuccessServices extends BaseServices
{
    /**
     *
     * StoreOrderSuccessServices constructor.
     * @param StoreOrderDao $dao
     */
    public function __construct(StoreOrderDao $dao)
    {
        $this->dao = $dao;
    }

    /**
     * 0元支付
     * @param array $orderInfo
     * @param int $uid
     * @return bool
     * @throws \think\Exception
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
    public function zeroYuanPayment(array $orderInfo, int $uid, string $payType = PayServices::YUE_PAY)
    {
        if ($orderInfo['paid']) {
            throw new ValidateException('该订单已支付!');
        }
        /** @var UserServices $services */
        $services = app()->make(UserServices::class);
        $userInfo = $services->getUserInfo($uid);
        /** @var UserBillServices $userBillServices */
        $userBillServices = app()->make(UserBillServices::class);
        $res = $userBillServices->income('pay_product', $userInfo['uid'], $orderInfo['pay_price'], $userInfo['now_money'], $orderInfo['id']);
        $res = $res && $this->paySuccess($orderInfo, $payType);//余额支付成功
        return $res;
    }

    /**
     * 支付成功
     * @param array $orderInfo
     * @param string $paytype
     * @param array $other
     * @return array|bool
     */
    public function paySuccess(array $orderInfo, string $paytype = PayServices::WEIXIN_PAY, array $other = [])
    {
        $updata = ['paid' => 1, 'pay_type' => $paytype, 'pay_time' => time()];
        if ($other && isset($other['trade_no'])) {
            $updata['trade_no'] = $other['trade_no'];
        }
        $res1 = $this->dao->update($orderInfo['id'], $updata);
        $resPink = true;

        if ($orderInfo['combination_id'] && $res1 && !$orderInfo['refund_status']) {
            /** @var StorePinkServices $pinkServices */
            $pinkServices = app()->make(StorePinkServices::class);
            /** @var StoreOrderServices $orderServices */
            $orderServices = app()->make(StoreOrderServices::class);
            $resPink = $pinkServices->createPink($orderServices->tidyOrder($orderInfo, true));//创建拼团
        }

        /** @var StoreOrderStatusServices $statusService */
        $statusService = app()->make(StoreOrderStatusServices::class);
        $statusService->save([
            'oid' => $orderInfo['id'],
            'change_type' => 'pay_success',
            'change_message' => '用户付款成功',
            'change_time' => time()
        ]);
        /** @var UserServices $userServices */
        $userServices = app()->make(UserServices::class);
        $now_money = $userServices->value(['uid' => $orderInfo['uid']], 'now_money');
        //写入购买记录
        /** @var UserBillServices $userBillServices */
        $userBillServices = app()->make(UserBillServices::class);
        $userBillServices->income('pay_money', $orderInfo['uid'], $orderInfo['pay_price'], $now_money, $orderInfo['id']);
        //回退库存占用
        /** @var StoreOrderCartInfoServices $cartServices */
        $cartServices = app()->make(StoreOrderCartInfoServices::class);
        $cartInfo = $cartServices->getOrderCartInfo($orderInfo['id']);
        //秒杀库存处理
        /** @var StoreSeckillServices $seckiiServices */
        $seckiiServices = app()->make(StoreSeckillServices::class);
        $seckiiServices->cancelOccupySeckillStock($cartInfo, $orderInfo['unique']);
        //赠送优惠卷
        /** @var StoreProductCouponServices $storeProductCouponServices */
        $storeProductCouponServices = app()->make(StoreProductCouponServices::class);
        $storeProductCouponServices->giveOrderProductCoupon((int)$orderInfo['uid'], $orderInfo['id']);
        //修改开票数据支付状态
        $orderInvoiceServices = app()->make(StoreOrderInvoiceServices::class);
        $orderInvoiceServices->update(['order_id' => $orderInfo['id']], ['is_pay' => 1]);
        //支付成功后计算商品节省金额
        Queue::instance()->job(\crmeb\jobs\OrderJob::class)->do('setEconomizeMoney')->data($orderInfo)->push();
        //支付成功后更新用户支付订单数量
        Queue::instance()->job(\crmeb\jobs\OrderJob::class)->do('setUserPayCountAndPromoter')->data($orderInfo)->push();
        //支付成功后向用户设置标签
        Queue::instance()->job(\crmeb\jobs\OrderJob::class)->do('setUserLabel')->data($orderInfo)->push();
        //支付成功后向管理员发送模板消息
        Queue::instance()->job(\crmeb\jobs\OrderJob::class)->do('sendServicesAndTemplate')->data($orderInfo)->push();
        //支付成功后其他事件处理
        Queue::instance()->job(\crmeb\jobs\OrderJob::class)->do('otherTake')->data($orderInfo)->push();
        //支付记录
        Queue::instance()->job(ProductLogJob::class)->data('pay', ['uid' => $orderInfo['uid'], 'order_id' => $orderInfo['id']])->push();
        $res = $res1 && $resPink;
        return false !== $res;
    }

}

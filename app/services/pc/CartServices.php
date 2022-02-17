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
declare (strict_types=1);

namespace app\services\pc;


use app\services\BaseServices;
use app\services\order\StoreCartServices;
use app\services\product\product\StoreProductServices;
use app\services\user\MemberCardServices;
use app\services\user\UserLevelServices;
use app\services\user\UserServices;

class CartServices extends BaseServices
{
    /**
     * PC端购物车列表
     * @param int $uid
     * @return array[]
     */
    public function getCartList(int $uid)
    {
        /** @var StoreCartServices $storeCartServices */
        $storeCartServices = app()->make(StoreCartServices::class);
        /** @var StoreProductServices $productServices */
        $productServices = app()->make(StoreProductServices::class);
        /** @var UserLevelServices $userLevelServices */
        $userLevelServices = app()->make(UserLevelServices::class);

        $list = $storeCartServices->getCartList(['uid' => $uid], 0, 0, ['productInfo', 'attrInfo']);
        $discount = $userLevelServices->getDiscount($uid, 'discount');
        /** @var MemberCardServices $memberCardService */
        $memberCardService = app()->make(MemberCardServices::class);
        $vipStatus = $memberCardService->isOpenMemberCard('vip_price');
        /** @var UserServices $user */
        $user = app()->make(UserServices::class);
        $userInfo = $user->getUserInfo($uid);
        $valid = $invalid = [];
        foreach ($list as &$item) {
            $is_valid = $item['attrInfo']['suk'] ?? 0;
            $item['productInfo']['attrInfo'] = $item['attrInfo'] ?? [];
            $item['productInfo']['attrInfo']['image'] = $item['attrInfo']['image'] ?? $item['productInfo']['image'];
            if (isset($item['productInfo']['attrInfo'])) {
                $item['productInfo']['attrInfo'] = get_thumb_water($item['productInfo']['attrInfo']);
            }
            $item['productInfo'] = get_thumb_water($item['productInfo']);
            $productInfo = $item['productInfo'];
            if (isset($productInfo['attrInfo']['product_id']) && $item['product_attr_unique']) {
                $item['costPrice'] = $productInfo['attrInfo']['cost'] ?? 0;
                $item['trueStock'] = $productInfo['attrInfo']['stock'] ?? 0;
                $item['truePrice'] = $productServices->setLevelPrice($productInfo['attrInfo']['price'] ?? 0, $uid, $userInfo, $vipStatus, true, $discount, $item['attrInfo']['vip_price'] ?? 0, $productInfo['is_vip'] ?? 0, true);
                $item['vip_truePrice'] = (float)$productServices->setLevelPrice($productInfo['attrInfo']['price'], $uid, $userInfo, $vipStatus, false, $discount, $item['attrInfo']['vip_price'] ?? 0, $productInfo['is_vip'] ?? 0, true);
            } else {
                $item['costPrice'] = $item['productInfo']['cost'] ?? 0;
                $item['trueStock'] = $item['productInfo']['stock'] ?? 0;
                $item['truePrice'] = $productServices->setLevelPrice($item['productInfo']['price'] ?? 0, $uid, $userInfo, $vipStatus, true, $discount, $item['attrInfo']['vip_price'] ?? 0, $item['productInfo']['is_vip'] ?? 0);
                $item['vip_truePrice'] = (float)$productServices->setLevelPrice($item['productInfo']['price'], $uid, $userInfo, $vipStatus, false, $discount, $item['attrInfo']['vip_price'] ?? 0, $item['productInfo']['is_vip'] ?? 0);
            }
            unset($item['attrInfo']);
            if ($item['status'] == 1 && $is_valid && $item['trueStock'] > 0) {
                $valid[] = $item;
            } else {
                $invalid[] = $item;
            }
        }
        return ['valid' => $valid, 'invalid' => $invalid];
    }
}

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

namespace crmeb\jobs;


use app\services\order\StoreOrderDeliveryServices;
use app\services\order\StoreOrderServices;
use app\services\product\product\StoreProductServices;
use app\services\product\sku\StoreProductRuleServices;
use app\services\user\UserServices;
use crmeb\basic\BaseJob;
use think\facade\Log;
use crmeb\utils\Queue;

class BatchHandleJob extends BaseJob
{
    /**
     * @param $coupon
     * @return bool
     */
    public function doJob($data = false, $type, array $other = [])
    {
        switch ($type) {
            case 1://批量发放优惠券
                try {
                    if (!$data) {
                        return true;
                    }
                    /** @var UserServices $user */
                    $user = app()->make(UserServices::class);
                    $user->adminSendCoupon($data, $type);
                } catch (\Throwable $e) {
                    Log::error('主动发放优惠券失败,失败原因:' . $e->getMessage());
                }
                return true;
            case 2://批量设置用户分组
                try {
                    if (!$data) {
                        return true;
                    }
                    /** @var UserServices $user */
                    $user = app()->make(UserServices::class);
                    $user->adminUserGroup($data, $type);
                } catch (\Throwable $e) {
                    Log::error('主动用户分组失败,失败原因:' . $e->getMessage());
                }
                return true;
            case 3://批量设置用户标签
                try {
                    if (!$data) {
                        return true;
                    }
                    /** @var UserServices $user */
                    $user = app()->make(UserServices::class);
                    $user->adminUserLabel($data, $type);
                } catch (\Throwable $e) {
                    Log::error('批量设置用户标签,失败原因:' . $e->getMessage());
                }
                return true;
            case 4://批量上下架商品
                try {
                    /** @var StoreProductServices $product */
                    $product = app()->make(StoreProductServices::class);
                    $product->adminProductUnshow($data, $type);
                } catch (\Throwable $e) {
                    Log::error('商品批量下架,失败原因:' . $e->getMessage());
                }
                return true;
            case 5://批量删除商品规格
                try {
                    /** @var StoreProductRuleServices $productRule */
                    $productRule = app()->make(StoreProductRuleServices::class);
                    $productRule->adminDelProductRule($type);
                } catch (\Throwable $e) {
                    Log::error('商品规格批量删除,失败原因:' . $e->getMessage());
                }
                return true;
            case 6://批量删除用户已删除订单
                try {
                    /** @var StoreOrderServices $orderService */
                    $orderService = app()->make(StoreOrderServices::class);
                    $orderService->adminDelOrder($type);
                } catch (\Throwable $e) {
                    Log::error('订单批量删除,失败原因:' . $e->getMessage());
                }
                return true;
            case 7://批量手动发货
            case 8://批量电子面单发货
            case 9://批量配送
            case 10://批量虚拟发货
                try {
                    /** @var StoreOrderDeliveryServices $deliveryService */
                    $deliveryService = app()->make(StoreOrderDeliveryServices::class);
                    $other['queueType'] = $type;
                    $deliveryService->queueOrderDelivery($data, $other);
                } catch (\Throwable $e) {
                    Log::error('订单批量发货,失败原因:' . $e->getMessage());
                }
                return true;
        }

        return true;
    }
}

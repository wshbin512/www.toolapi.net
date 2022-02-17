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


use app\services\message\sms\SmsSendServices;
use app\services\order\StoreOrderServices;
use crmeb\basic\BaseJob;

/**
 * 未支付10分钟后发送短信
 * Class UnpaidOrderSend
 * @package crmeb\jobs
 */
class UnpaidOrderSend extends BaseJob
{
    public function doJob($id)
    {
        /** @var StoreOrderServices $services */
        $services = app()->make(StoreOrderServices::class);
        $orderInfo = $services->get($id);
        if (!$orderInfo) {
            return true;
        }
        if ($orderInfo->paid) {
            return true;
        }
        if ($orderInfo->is_del) {
            return true;
        }
        /** @var SmsSendServices $smsServices */
        $smsServices = app()->make(SmsSendServices::class);
        $smsServices->send(true, $orderInfo['user_phone'], ['order_id' => $orderInfo['order_id']], 'ORDER_PAY_FALSE');
        return true;
    }

}

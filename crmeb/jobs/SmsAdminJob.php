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
use crmeb\basic\BaseJob;


class SmsAdminJob extends BaseJob
{
    /**
     * 退款发送管理员消息任务
     * @param $switch
     * @param $adminList
     * @param $order
     * @return bool
     */
    public function sendAdminRefund($switch, $adminList, $order)
    {
        if (!$switch) {
            return true;
        }
        /** @var SmsSendServices $smsServices */
        $smsServices = app()->make(SmsSendServices::class);
        foreach ($adminList as $item) {
            $data = ['order_id' => $order['order_id'], 'admin_name' => $item['nickname']];
            $smsServices->send(true, $item['phone'], $data, 'ADMIN_RETURN_GOODS_CODE');
        }
        return true;
    }

    /**
     * 用户确认收货管理员短信提醒
     * @param $switch
     * @param $adminList
     * @param $order
     * @return bool
     */
    public function sendAdminConfirmTakeOver($switch, $adminList, $order)
    {
        if (!$switch) {
            return true;
        }
        /** @var SmsSendServices $smsServices */
        $smsServices = app()->make(SmsSendServices::class);
        foreach ($adminList as $item) {
            $data = ['order_id' => $order['order_id'], 'admin_name' => $item['nickname']];
            $smsServices->send(true, $item['phone'], $data, 'ADMIN_TAKE_DELIVERY_CODE');
        }
        return true;
    }
}

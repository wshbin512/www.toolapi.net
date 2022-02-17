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
use app\services\order\StoreOrderServices;

class OrderServices extends BaseServices
{
    /**
     * 轮询订单状态
     * @param string $order_id
     * @return bool
     */
    public function checkOrderStatus(string $order_id)
    {
        /** @var StoreOrderServices $order */
        $order = app()->make(StoreOrderServices::class);
        $res = $order->count(['order_id' => $order_id, 'paid' => 1]);
        if ($res) return true;
        return false;
    }

    /**
     * 获取订单列表
     * @param array $where
     * @param array|string[] $field
     * @param array $with
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getOrderList(array $where, array $field = ['*'], array $with = [])
    {
        /** @var StoreOrderServices $order */
        $order = app()->make(StoreOrderServices::class);
        $data['list'] = $order->getOrderApiList($where, $field, $with);
        $data['count'] = $order->count($where);
        return $data;
    }
}

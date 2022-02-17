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
namespace app\adminapi\controller\v1\merchant;

use app\adminapi\controller\AuthController;
use app\services\order\StoreOrderServices;
use app\services\user\UserServices;
use think\facade\App;

/**
 * 核销订单
 * Class SystemVerifyOrder
 * @package app\adminapi\controller\v1\merchant
 */
class SystemVerifyOrder extends AuthController
{
    /**
     * 构造方法
     * SystemVerifyOrder constructor.
     * @param App $app
     * @param StoreOrderServices $services
     */
    public function __construct(App $app, StoreOrderServices $services)
    {
        parent::__construct($app);
        $this->services = $services;
    }

    /**
     * 获取核销订单列表
     * return json
     */
    public function list()
    {
        $where = $this->request->getMore([
            ['data', '', '', 'time'],
            ['real_name', ''],
            ['store_id', ''],
            ['type', ''],
            ['field_key', ''],
        ]);
        $data = $this->services->getOrderList($where + ['status' => 6], ['*'], ['store', 'staff', 'staffUser']);
        return $this->success(['count' => $data['count'], 'data' => $data['data'], 'badge' => $data['stat']]);
    }

    /**
     * 未使用,获取核销订单头部
     * @return mixed
     */
    public function getVerifyBadge()
    {
        return $this->success([]);
    }

    /**
     * 订单列表推荐人详细
     * @param $uid
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function order_spread_user($uid)
    {
        /** @var UserServices $userServices */
        $userServices = app()->make(UserServices::class);
        $userInfo = $userServices->getUserInfo((int)$uid);
        $spread = [];
        if ($userInfo['spread_uid']) {
            $spread = $userServices->getUserInfo((int)$userInfo['spread_uid']);
            if ($spread) {
                $spread = $spread->toArray();
                $spread['brokerage_pric'] = $spread['brokerage_price'];
                $spread['birthday'] = $spread['birthday'] ? date('Y-m-d', $spread['birthday']) : '';
                $spread['last_time'] = $spread['last_time'] ? date('Y-m-d H:i:s', $spread['last_time']) : '';
            }
        }
        return $this->success(['spread' => $spread]);
    }
}

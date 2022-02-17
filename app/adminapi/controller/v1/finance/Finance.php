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

namespace app\adminapi\controller\v1\finance;

use app\services\user\UserBillServices;
use think\facade\App;
use app\adminapi\controller\AuthController;

/**
 * Class Finance
 * @package app\adminapi\controller\v1\finance
 */
class Finance extends AuthController
{
    /**
     * Finance constructor.
     * @param App $app
     * @param UserBillServices $services
     */
    public function __construct(App $app, UserBillServices $services)
    {
        parent::__construct($app);
        $this->services = $services;
    }

    /**
     * 筛选类型
     */
    public function bill_type()
    {
        return $this->success($this->services->bill_type());
    }

    /**
     * 资金记录
     */
    public function list()
    {
        $where = $this->request->getMore([
            ['start_time', ''],
            ['end_time', ''],
            ['nickname', ''],
            ['limit', 20],
            ['page', 1],
            ['type', ''],
        ]);
        return $this->success($this->services->getBillList($where));
    }

    /**
     * 佣金记录
     * @return mixed
     */
    public function get_commission_list()
    {
        $where = $this->request->getMore([
            ['nickname', ''],
            ['price_max', ''],
            ['price_min', ''],
            ['sum_number', 'normal'],
            ['brokerage_price', 'normal']
        ]);
        return $this->success($this->services->getCommissionList($where));
    }

    /**
     * 佣金详情用户信息
     * @param $id
     * @return mixed
     */
    public function user_info($id)
    {
        return $this->success($this->services->user_info((int)$id));
    }

    /**
     * 佣金提现记录个人列表
     */
    public function get_extract_list($id = '')
    {
        if ($id == '') return $this->fail('缺少参数');
        $where = $this->request->getMore([
            ['start_time', ''],
            ['end_time', ''],
            ['nickname', '']
        ]);
        $where['category'] = 'now_money';
        $where['type'] = 'brokerage';
        return $this->success($this->services->getBillOneList((int)$id, $where));
    }

}

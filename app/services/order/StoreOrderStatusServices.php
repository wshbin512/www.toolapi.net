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


use app\dao\order\StoreOrderStatusDao;
use app\services\BaseServices;
use crmeb\traits\ServicesTrait;

/**
 * 订单状态
 * Class StoreOrderStatusServices
 * @package app\services\order
 */
class StoreOrderStatusServices extends BaseServices
{
    use ServicesTrait;

    /**
     * 构造方法
     * StoreOrderStatusServices constructor.
     * @param StoreOrderStatusDao $dao
     */
    public function __construct(StoreOrderStatusDao $dao)
    {
        $this->dao = $dao;
    }

    /**
     * 订单状态分页
     * @param array $where
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getStatusList(array $where)
    {
        [$page, $limit] = $this->getPageValue();
        $list = $this->dao->getStatusList($where, $page, $limit);
        foreach ($list as &$item) {
            if (is_int($item['change_time'])) $item['change_time'] = date('Y-m-d H:i:s', $item['change_time']);
        }
        $count = $this->dao->count($where);
        return compact('list', 'count');
    }

}

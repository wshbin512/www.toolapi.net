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

namespace app\dao\order;


use app\dao\BaseDao;
use app\model\order\StoreOrder;
use app\model\order\StoreOrderCartInfo;

/**
 *
 * Class StoreOrderStoreOrderCartInfoDao
 * @package app\dao\order
 */
class StoreOrderStoreOrderCartInfoDao extends BaseDao
{

    protected $alias = 'a';

    protected $joinAlis = 'c';

    /**
     * 设置主表模型
     * @return string
     */
    protected function setModel(): string
    {
        return StoreOrder::class;
    }

    /**
     * 设置链表模型
     * @return string
     */
    protected function setJoinModel(): string
    {
        return StoreOrderCartInfo::class;
    }

    /**
     * 设置模型
     * @return \crmeb\basic\BaseModel
     */
    public function getModel()
    {
        $name = app()->make($this->setJoinModel())->getName();
        return parent::getModel()->alias($this->alias)->join($name . ' ' . $this->joinAlis, $this->alias . '.id =' . $this->joinAlis . '.oid');
    }

    /**
     * 获取用户购买过的商品id
     * @param array $where
     * @return array
     */
    public function getUserCartProductIds(array $where)
    {
        return $this->getModel()->when(isset($where['uid']), function ($query) use ($where) {
            $query->where($this->alias . '.uid', $where['uid']);
        })->column($this->joinAlis . '.product_id');
    }
}

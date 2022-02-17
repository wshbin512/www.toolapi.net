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

namespace app\dao\other;
/**
 * Class QueueAuxiliaryDao
 * @package app\dao\other
 */
class QueueAuxiliaryDao extends AuxiliaryDao
{


    /**添加订单缓存记录
     * @param array $data
     * @return int|string
     */
    public function saveOrderCacheLog(array $data)
    {
        return $this->getModel()->insertGetId($data);
    }

    /**获取发货缓存数据列表
     * @param array $where
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getOrderExpreList(array $where)
    {
            return $this->search($where)->order('add_time asc')->select()->toArray();
    }

    /** 查询单条订单缓存数据
     * @param array $where
     * @return array|\think\Model|null
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getOrderCacheOne(array $where)
    {
        return $this->search($where)->find();
    }

    /**获取发货记录
     * @param array $where
     * @param int $page
     * @param int $limit
     * @param string $order
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function deliveryLogList(array $where, int $page = 0, int $limit = 0, string $order = '')
    {
        foreach($where as $k => $v) {
            if ($v == "") unset($where[$k]);
        }
        return $this->search($where)
            ->order(($order ? $order . ' ,' : '') . 'add_time desc')
            ->page($page, $limit)->select()->toArray();
    }

    /**获取某个队列的数据缓存
     * @param $bindingId
     * @param $type
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getCacheOidList($bindingId, $type)
    {
        return $this->search(['binding_id' => $bindingId, 'type' => $type])->select()->toArray();
    }

}

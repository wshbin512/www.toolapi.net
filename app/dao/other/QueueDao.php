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


use app\dao\BaseDao;
use app\model\other\Queue;

/**
 * Class QueueDao
 * @package app\dao\other
 */
class QueueDao extends BaseDao
{

    /**
     * @return string
     */
    public function setModel(): string
    {
        return Queue::class;
    }



    /**
     * 队列任务列表
     * @param array $where
     * @param int $page
     * @param int $limit
     * @param string $order
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getList(array $where, int $page = 0, int $limit = 0, string $order = '')
    {
        foreach($where as $k => $v) {
            if ($v == "") unset($where[$k]);
        }
        return $this->search($where)
            ->order(($order ? $order . ' ,' : '') . 'add_time desc')
            ->page($page, $limit)->select()->toArray();
    }
    /**获取单个队列详情
     * @param array $where
     * @return array|bool|\think\Model|null
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getQueueOne(array $where)
    {
        if (!$where) return false;
        return $this->search($where)->find();
    }

    /**插入队列后返回队列id
     * @param $data
     * @return int|string
     */
    public function addQueueList($data)
    {
        return $this->getModel()->insertGetId($data);
    }

}

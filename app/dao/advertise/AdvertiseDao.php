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
namespace app\dao\advertise;

use app\dao\BaseDao;
use app\model\advertise\Advertise;

/**
 * 广告dao
 * Class AdvertiseDao
 * @package app\dao\advertise
 */
class AdvertiseDao extends BaseDao
{
    /**
     * 设置模型
     * @return string
     */
    protected function setModel(): string
    {
        return Advertise::class;
    }

    public function search(array $where = [])
    {
        return parent::search($where)->when(isset($where['ids']) && count($where['ids']), function ($query) use ($where) {
            $query->whereNotIn('id', $where['ids']);
        });
    }

    /**
     * 获取广告列表
     * @param array $where
     * @param int $page
     * @param int $limit
     * @return mixed
     */
    public function getList(array $where, int $page, int $limit)
    {
        return $this->search($where)->with(['content', 'storeInfo', 'appInfo', 'cateName'])->page($page, $limit)->order('sort desc,id desc')->select()->toArray();
    }

    /**
     * Cid获取广告
     * @param $cid
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getCidDetails($cid){
        $where = ['cid' => $cid, 'hide' => 0, 'status' => 1];
        return $this->search($where)->where('cid', $cid)->order('sort desc,id desc')->select()->toArray();
    }

    /**
     * 获取一条数据
     * @param $id
     * @return mixed
     */
    public function read($id)
    {
        $data = $this->search()->with(['content', 'storeInfo', 'appInfo', 'cateName'])->find($id);
        return $data;
    }

    /**
     * @param array $where
     * @param int $page
     * @param int $limit
     * @param string $field
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function cidByAdvertiseList(array $where, int $page, int $limit, string $field = '*')
    {
        return $this->search(['status' => 1, 'hide' => 0])
            ->when(isset($where['cid']) && $where['cid'], function ($query) use ($where) {
                $query->where('cid', $where['cid']);
            })->when(isset($where['is_hot']) && $where['is_hot'], function ($query) use ($where) {
                $query->where('is_hot', $where['is_hot']);
            })->when(isset($where['is_banner']) && $where['is_banner'], function ($query) use ($where) {
                $query->where('is_banner', $where['is_banner']);
            })->when($page != 0, function ($query) use ($page, $limit) {
                $query->page($page, $limit);
            })->order('add_time desc')->field($field)->select()->toArray();
    }

    /**
     * 新闻分类下的广告
     * @param $new_id
     * @return mixed
     */
    public function advertiseLists($new_id)
    {
        return $this->getModel()->where('hide', 0)->where('id', 'in', $new_id)->select();
    }

    /**
     * 图文详情
     * @param $new_id
     * @return mixed
     */
    public function advertiseContentList($new_id)
    {
        return $this->getModel()->where('hide', 0)->where('id', 'in', $new_id)->with('content')->select();
    }
}

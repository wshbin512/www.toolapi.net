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
use app\model\advertise\AdvertiseCategory;

/**
 * 广告分类
 * Class AdvertiseCategoryDao
 * @package app\dao\advertise
 */
class AdvertiseCategoryDao extends BaseDao
{
    /**
     * 设置模型
     * @return string
     */
    protected function setModel(): string
    {
        return AdvertiseCategory::class;
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
        return $this->search($where)->page($page, $limit)->order('sort desc,id desc')->select()->toArray();
    }

    /**
     * 别名查询详情
     * @param $where
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getAliasDetails($where){
        return $this->search($where)->where('alias', 'like', '%' . $where['alias'] . '%')->find()->toArray();
    }

    /**
     * 前台获取广告分类
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getAdvertiseCategory()
    {
        return $this->search(['hidden'=>0,'is_del'=>0,'status'=>1])
            ->order('sort DESC')
            ->field('id,title')
            ->select()->toArray();
    }
}

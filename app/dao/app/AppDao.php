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

namespace app\dao\app;

use app\dao\BaseDao;
use app\model\app\App;

/**
 * APP
 * Class AppDao
 * @package app\dao\app
 */
class AppDao extends BaseDao
{
    /**
     * 设置模型
     * @return string
     */
    protected function setModel(): string
    {
        return App::class;
    }

    /**
     * 获取列表
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
     * 前台获取
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getApp()
    {
        return $this->search(['hidden'=>0,'is_del'=>0,'status'=>1])
            ->order('sort DESC')
            ->field('id,title')
            ->select()->toArray();
    }

    public function getAppIdData(string $appId = '')
    {
        $data = $this->getModel()->where('appId', $appId)->find();
        if($data){
            return $data->toArray();
        }
        return [];
    }
}

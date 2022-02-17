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

namespace app\dao\service;


use app\dao\BaseDao;
use app\model\service\StoreServiceFeedback;

/**
 * Class StoreServiceFeedbackDao
 * @package app\dao\service
 */
class StoreServiceFeedbackDao extends BaseDao
{

    protected function setModel(): string
    {
        return StoreServiceFeedback::class;
    }

    /**
     * 获取用户反馈信息列表
     * @param array $where
     * @param int $page
     * @param int $limit
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getFeedback(array $where, int $page, int $limit)
    {
        return $this->search($where)->page($page, $limit)->order('id DESC')->select()->toArray();
    }
}

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
declare (strict_types=1);

namespace app\dao\user;

use app\dao\BaseDao;
use app\model\user\UserGroup;

/**
 *
 * Class UserGroupDao
 * @package app\dao\user
 */
class UserGroupDao extends BaseDao
{

    /**
     * 设置模型
     * @return string
     */
    protected function setModel(): string
    {
        return UserGroup::class;
    }

    /**
     * 获取列表
     * @param array $where
     * @param string $feild
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getList(array $where = [], string $feild = '*', int $page = 0, int $limit)
    {
        return $this->search($where)->field($feild)->page($page, $limit)->select()->toArray();
    }
}

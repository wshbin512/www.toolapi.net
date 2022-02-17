<?php

// TODO +----------------------------------------------------------------------
// TODO | NRLSE [ NRLSE赋能开发者，助力企业发展 ]
// TODO +----------------------------------------------------------------------
// TODO | Copyright (c) 2014~2021 https://www.nrlse.cn All rights reserved.
// TODO +----------------------------------------------------------------------
// TODO | Licensed NRLSE并不是自由软件，未经许可不能去掉NRLSE相关版权
// TODO +----------------------------------------------------------------------
// TODO | Author: NRLSE Team <admin@nrlse.cn>
// TODO +----------------------------------------------------------------------

namespace app\dao\system\admin;

use app\dao\BaseDao;
use app\model\system\admin\SystemArea;

/**
 * Class SystemAreaDao
 * @package app\dao\system\admin
 */
class SystemAreaDao extends BaseDao
{
    /**
     * 设置模型名
     * @return string
     */
    protected function setModel(): string
    {
        return SystemArea::class;
    }

    /**
     * 获取区域
     * @param string $field
     * @param string $key
     * @return mixed
     */
    public function getRoule(array $where = [], ?string $field = null, ?string $key = null)
    {
        return $this->search($where)->column($field ?: 'area_name', $key ?: 'id');
    }

    /**
     * 获取区域列表
     * @param array $where
     * @param int $page
     * @param int $limit
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getRouleList(array $where, int $page, int $limit)
    {
        return $this->search($where)->page($page, $limit)->select()->toArray();
    }

    /**
     * 请求列表
     * @param array $where
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getList(array $where) {
        return $this->search($where)->select()->toArray();
    }
}

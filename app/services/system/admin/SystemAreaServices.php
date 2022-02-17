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

namespace app\services\system\admin;

use app\Request;
use app\services\BaseServices;
use app\dao\system\admin\SystemAreaDao;
use app\services\shipping\SystemCityServices;

/**
 * Class SystemAreaServices
 * @package app\services\system\admin
 * @method update($id, array $data, ?string $key = null) 修改数据
 * @method save(array $data) 保存数据
 * @method get(int $id, ?array $field = []) 获取数据
 * @method delete(int $id, ?string $key = null) 删除数据
 */
class SystemAreaServices extends BaseServices
{
    /**
     * SystemAreaServices constructor.
     * @param SystemAreaDao $dao
     */
    public function __construct(SystemAreaDao $dao)
    {
        $this->dao = $dao;
    }

    /**
     * 获取区域
     * @return mixed
     */
    public function getAreaArray(array $where = [], string $field = '', string $key = '')
    {
        return $this->dao->getRoule($where, $field, $key);
    }

    /**
     * 获取表单所需的区域名称列表
     * @param int $level
     * @return array
     */
    public function getAreaFormSelect(int $level)
    {
        $list = $this->getAreaArray(['status' => 1]);
        $options = [];
        foreach ($list as $id => $areaName) {
            $options[] = ['label' => $areaName, 'value' => $id];
        }
        return $options;
    }

    /**
     * 区域列表
     * @param array $where
     * @return array
     */
    public function getAreaList(array $where)
    {
        [$page, $limit] = $this->getPageValue();
        $list = $this->dao->getRouleList($where, $page, $limit);
        $count = $this->dao->count($where);
        /** @var SystemCityServices $service */
        $service = app()->make(SystemCityServices::class);
        foreach ($list as &$item) {
            $item['areas'] = implode(',', array_merge($service->column(['city_id' => json_decode($item['areas'])], 'name', 'city_id')));
        }
        return compact('count', 'list');
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
        return $this->dao->getList($where);
    }
}

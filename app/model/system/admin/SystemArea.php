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

namespace app\model\system\admin;

use crmeb\basic\BaseModel;
use crmeb\traits\ModelTrait;
use think\Model;

/**
 * 区域
 * Class SystemRole
 * @package app\model\system\admin
 */
class SystemArea extends BaseModel
{
    use ModelTrait;

    /**
     * 数据表主键
     * @var string
     */
    protected $pk = 'id';

    /**
     * 模型名称
     * @var string
     */
    protected $name = 'system_area';

    /**
     * 规则修改器
     * @param Model $value
     * @return string
     */
    public static function setRulesAttr($value)
    {
        return is_array($value) ? implode(',', $value) : $value;
    }

    /**
     * 区域状态搜索器
     * @param Model $query
     * @param $value
     */
    public function searchStatusAttr($query, $value)
    {
        if ($value != '') {
            $query->where('status', $value);
        }
    }

    /**
     * 区域等级搜索器
     * @param Model $query
     * @param $value
     */
    public function searchLevelAttr($query, $value)
    {
        $query->where('level', $value);
    }

    /**
     * 区域ID搜索器
     * @param Model $query
     * @param $value
     */
    public function searchIdAttr($query, $value)
    {
        if (is_array($value)) {
            $query->whereIn('id', $value);
        } else {
            $query->where('id', $value);
        }
    }

    /**
     * 名称搜索
     * @param Model $query
     * @param $value
     */
    public function searchRoleNameAttr($query, $value)
    {
        if ($value) {
            $query->whereLike('area_name', '%' . $value . '%');
        }
    }
}

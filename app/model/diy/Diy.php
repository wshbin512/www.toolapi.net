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

namespace app\model\diy;


use crmeb\basic\BaseModel;
use crmeb\traits\ModelTrait;
use think\Model;

class Diy extends BaseModel
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
    protected $name = 'diy';

    protected $updateTime = false;

    /**
     * 添加时间获取器
     * @param $value
     * @return false|string
     */
    public function getAddTimeAttr($value)
    {
        return date('Y-m-d H:i:s', $value);
    }

    /**
     * 修改时间获取器
     * @param $value
     * @return false|string
     */
    public function getUpdateTimeAttr($value)
    {
        return date('Y-m-d H:i:s', $value);
    }

    /**
     * 类型搜索器
     * @param Model $query
     * @param $value
     */
    public function searchTypeAttr($query, $value)
    {
        if ($value != '') $query->where('type', $value);
    }

    /**
     * 版本号搜索器
     * @param Model $query
     * @param $value
     */
    public function searchVersionAttr($query, $value)
    {
        if ($value != '') $query->where('version', $value);
    }

    /**
     * 是否使用搜索器
     * @param Model $query
     * @param $value
     */
    public function searchStatusAttr($query, $value)
    {
        if ($value != '') $query->where('status', $value);
    }

    /**
     * 名称搜索器
     * @param Model $query
     * @param $value
     */
    public function searchNameAttr($query, $value)
    {
        if ($value != '') $query->where('name', $value);
    }

    /**
     * 是否删除搜索器
     * @param Model $query
     * @param $value
     */
    public function searchIsDelAttr($query, $value)
    {
        if ($value !== '') $query->where('is_del', $value);
    }
}

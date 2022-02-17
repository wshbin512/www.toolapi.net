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

namespace app\model\app;

use crmeb\traits\ModelTrait;
use crmeb\basic\BaseModel;
use think\Model;

/**
 * TODO APPModel
 * Class App
 * @package app\model\app
 */
class App extends BaseModel
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
    protected $name = 'app';

    /**
     * 状态搜索器
     * @param Model $query
     * @param $value
     * @param $data
     */
    public function searchStatusAttr($query, $value, $data)
    {
        if ($value !== '') $query->where('status', $value);
    }

    /**
     * 名称搜索器
     * @param Model $query
     * @param $value
     * @param $data
     */
    public function searchTitleAttr($query, $value, $data)
    {
        $query->where('title', 'like', '%' . $value . '%');
    }

    /**
     * 隐藏搜索器
     * @param Model $query
     * @param $value
     * @param $data
     */
    public function searchHiddenAttr($query, $value, $data)
    {
        $query->where('hidden', $value);
    }

    /**
     * 删除搜索器
     * @param Model $query
     * @param $value
     * @param $data
     */
    public function searchIsDelAttr($query, $value, $data)
    {
        $query->where('is_del', $value);
    }
}

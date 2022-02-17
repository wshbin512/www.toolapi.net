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

namespace app\model\other;


use app\model\user\UserLabel;
use crmeb\basic\BaseModel;
use crmeb\traits\ModelTrait;
use think\Model;

/**
 * 分类表
 * Class Category
 * @package app\model\other
 */
class Category extends BaseModel
{

    use ModelTrait;

    /**
     * 表名
     * @var string
     */
    protected $name = 'category';

    /**
     * 主键
     * @var string
     */
    protected $pk = 'id';

    /**
     * 搜索分类名称
     * @param Model $query
     * @param $value
     */
    public function searchNameAttr($query, $value)
    {
        $query->whereLike('name', '%' . $value . '%');
    }

    /**
     *  归属人
     * @param Model $query
     * @param $value
     */
    public function searchOwnerIdAttr($query, $value)
    {
        $query->where('owner_id', $value);
    }

    /**
     *  类型
     * @param Model $query
     * @param $value
     */
    public function searchTypeAttr($query, $value)
    {
        $query->where('type', $value);
    }

    /**
     * 一对多关联
     * @return \think\model\relation\HasMany
     */
    public function label()
    {
        return $this->hasMany(UserLabel::class, 'label_cate', 'id');
    }
}

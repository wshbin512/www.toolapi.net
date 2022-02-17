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

namespace app\model\user;


use crmeb\basic\BaseModel;
use think\Model;

/**
 * Class UserLabelCate
 * @package app\model\user
 */
class UserLabelCate extends BaseModel
{
    /**
     * 表名
     * @var string
     */
    protected $name = 'user_label_cate';

    /**
     * 主键
     * @var string
     */
    protected $pk = 'id';

    /**
     * @param Model $query
     * @param $value
     */
    public function searchNameAttr($query, $value)
    {
        $query->whereLike('name', '%' . $value . '%');
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

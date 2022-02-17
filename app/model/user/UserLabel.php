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
use crmeb\traits\ModelTrait;

/**
 * Class UserLabel
 * @package app\model\user
 */
class UserLabel extends BaseModel
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
    protected $name = 'user_label';

    /**
     * 标签分类
     * @param \think\Model $query
     * @param $value
     */
    public function searchLabelCateAttr($query, $value)
    {
        if($value !== ''){
            $query->where('label_cate', $value);
        }
    }
}

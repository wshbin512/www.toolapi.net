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


use crmeb\basic\BaseModel;
use crmeb\traits\ModelTrait;

/**
 * 辅助表
 * Class Auxiliary
 * @package app\model\other
 */
class Auxiliary extends BaseModel
{

    use ModelTrait;

    /**
     * 表明
     * @var string
     */
    protected $name = 'auxiliary';
    protected $insert = ['add_time'];
    protected $autoWriteTimestamp = false;
    /**
     * 主键
     * @var string
     */
    protected $pk = 'id';

    /**类型搜索器
     * @param $query
     * @param $value
     */
    public function searchTypeAttr($query, $value)
    {
        $query->where('type', $value);
    }

    /**类型绑定id搜索器
     * @param $query
     * @param $value
     */
    public function searchBindingIdAttr($query, $value)
    {
        $query->where('binding_id', $value);
    }

    /**类型状态搜索器
     * @param $query
     * @param $value
     */
    public function searchStatusAttr($query, $value)
    {
        $query->whereIn('status', $value);
    }
    /**类型关联id搜索器
     * @param $query
     * @param $value
     */
    public function searchRelationIdAttr($query, $value)
    {
        $query->where('relation_id', $value);
    }
}

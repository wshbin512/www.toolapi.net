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

namespace app\model\service;

use crmeb\basic\BaseModel;
use crmeb\traits\ModelTrait;
use think\Model;

/**
 * 客服话术
 * @mixin \think\Model
 */
class StoreServiceSpeechcraft extends BaseModel
{
    use ModelTrait;

    /**
     * 表名
     * @var string
     */
    protected $name = 'store_service_speechcraft';

    /**
     * 主键
     * @var string
     */
    protected $pk = 'id';

    /**
     * 时间格式化
     * @param $value
     * @param $data
     * @return false|string
     */
    public function getAddTimeAttr($value, $data)
    {
        return date('Y-m-d H:i:s', $value);
    }

    /**
     * 话术搜索
     * @param Model $query
     * @param $value
     */
    public function searchTitleAttr($query, $value)
    {
        $query->whereLike('title', '%' . $value . '%');
    }

    /**
     * 归属客服搜索
     * @param Model $query
     * @param $value
     */
    public function searchKefuIdAttr($query, $value)
    {
        if ($value !== '') {
            $query->where('kefu_id', $value);
        }
    }

    /**
     * 分类搜索
     * @param Model $query
     * @param $value
     */
    public function searchCateIdAttr($query, $value)
    {
        if ($value !== '') {
            $query->where('cate_id', $value);
        }
    }

    /**
     * @param Model $query
     * @param $value
     */
    public function searchMessageAttr($query, $value)
    {
        if ($value) {
            $query->where('message', $value);
        }
    }
}

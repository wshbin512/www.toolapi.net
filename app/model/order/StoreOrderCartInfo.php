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

namespace app\model\order;

use crmeb\basic\BaseModel;
use crmeb\traits\ModelTrait;
use think\Model;

/**
 * TODO 订单记录Model
 * Class StoreOrderCartInfo
 * @package app\model\order
 */
class StoreOrderCartInfo extends BaseModel
{
    use ModelTrait;

    /**
     * 模型名称
     * @var string
     */
    protected $name = 'store_order_cart_info';

    /**
     * 购物车信息获取器
     * @param $value
     * @return array|mixed
     */
    public function getCartInfoAttr($value)
    {
        return json_decode($value, true) ?? [];
    }

    /**
     * 订单ID搜索器
     * @param Model $query
     * @param $value
     * @param $data
     */
    public function searchOidAttr($query, $value, $data)
    {
        $query->where('oid', $value);
    }

    /**
     * 购物车ID搜索器
     * @param Model $query
     * @param $value
     * @param $data
     */
    public function searchCartIdAttr($query, $value, $data)
    {
        if (is_array($value)) {
            $query->whereIn('cart_id', $value);
        } else {
            $query->where('cart_id', $value);
        }
    }
}

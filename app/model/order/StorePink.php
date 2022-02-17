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
 * Class StorePink
 * @package app\model\order
 */
class StorePink extends BaseModel
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
    protected $name = 'store_pink';

    protected $insert = ['add_time'];

    /**
     * 创建时间修改器
     * @return int
     */
    protected function setAddTimeAttr()
    {
        return time();
    }
    /**
     * 拼团订单id搜索器
     * @param Model $query
     * @param $value
     * @param $data
     */
    public function searchOrderIdKeyAttr($query, $value, $data)
    {
        $query->whereIn('order_id_key', $value);
    }


}

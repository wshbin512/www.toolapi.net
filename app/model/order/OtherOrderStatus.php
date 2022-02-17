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

/** TODO 订单修改状态记录Model
 * Class OtherOrderStatus
 * @package app\model\order
 */
class OtherOrderStatus extends BaseModel
{
    use ModelTrait;

    /**
     * 模型名称
     * @var string
     */
    protected $name = 'other_order_status';

    protected $autoWriteTimestamp = 'int';

    protected $createTime = 'change_time';

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
     * 变动类型搜索器
     * @param Model $query
     * @param $value
     */
    public function searchChangeTypeAttr($query, $value)
    {
        $query->where('change_type', $value);
    }
}

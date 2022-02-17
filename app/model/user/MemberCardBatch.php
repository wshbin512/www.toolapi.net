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

class MemberCardBatch extends BaseModel
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
    protected $name = 'member_card_batch';

    protected $insert = ['add_time'];

    protected $hidden = ['update_time'];

    /**
     * 卡批次名称搜索器
     * @param Model $query
     * @param $value
     */
    public function searchTitleAttr($query, $value)
    {
        if ($value) {
            $query->where('title', $value);
        }
    }

    /**
     * 格式化数据
     * @param $value
     * @return array|mixed
     */
    public function getQrcodeAttr($value)
    {
        $value = $value ? json_decode($value, true) : [];
        return is_array($value) ? $value : [];
    }
}

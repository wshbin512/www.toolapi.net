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

namespace app\model\wechat;

use crmeb\basic\BaseModel;
use crmeb\traits\ModelTrait;

/**
 * 微信用户行为记录  model
 * Class WechatMessage
 * @package app\model\wechat
 */
class WechatMessage extends BaseModel
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
    protected $name = 'wechat_message';

    protected $insert = ['add_time'];

    public static function setAddTimeAttr($value)
    {
        return time();
    }

}

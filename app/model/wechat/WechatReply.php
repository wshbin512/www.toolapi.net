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
 * 关键词
 * Class WechatReply
 * @package app\model\wechat
 */
class WechatReply extends BaseModel
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
    protected $name = 'wechat_reply';

    /**
     * 消息类型
     * @var string[]
     */
    public static $replyType = ['text', 'image', 'news', 'voice'];


    public function wechatKeys()
    {
        return $this->hasMany(WechatKey::class, 'reply_id', 'id');
    }
}

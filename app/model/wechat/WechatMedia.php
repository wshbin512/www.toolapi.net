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
 * Class WechatMedia
 * @package app\model\wechat
 */
class WechatMedia extends BaseModel
{
    use ModelTrait;

    /**
     * 主键
     * @var string
     */
    protected $pk = 'id';

    /**
     * 表名
     * @var string
     */
    protected $name = 'wechat_media';

}

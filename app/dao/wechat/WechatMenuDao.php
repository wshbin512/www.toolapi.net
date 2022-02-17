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

namespace app\dao\wechat;

use app\dao\BaseDao;
use app\model\other\Cache;

/**
 * Class WechatMenuDao
 * @package app\dao\wechat
 */
class WechatMenuDao extends BaseDao
{
    /**
     * 设置模型
     * @return string
     */
    public function setModel(): string
    {
        return Cache::class;
    }
}

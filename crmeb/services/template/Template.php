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

namespace crmeb\services\template;

use crmeb\basic\BaseManager;
use think\facade\Config;

/**
 * Class Template
 * @package crmeb\services\template
 * @mixin \crmeb\services\template\storage\Wechat
 * @mixin \crmeb\services\template\storage\Subscribe
 */
class Template extends BaseManager
{

    /**
     * 空间名
     * @var string
     */
    protected $namespace = '\\crmeb\\services\\template\\storage\\';

    /**
     * 设置默认
     * @return mixed
     */
    protected function getDefaultDriver()
    {
        return Config::get('template.default', 'wechat');
    }
}

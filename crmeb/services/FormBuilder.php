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

namespace crmeb\services;

use FormBuilder\Factory\Iview as Form;

/**
 * Form Builder
 * Class FormBuilder
 * @package crmeb\services
 */
class FormBuilder extends Form
{

    public static function setOptions($call)
    {
        if (is_array($call)) {
            return $call;
        } else {
            return $call();
        }

    }


}

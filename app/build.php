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
/**
 * 创建模块配置
 * php think build model_name
 */
return [
    // 需要自动创建的文件
    '__file__'   => ['.htaccess','ExecptionHandle.php'],
    // 需要自动创建的目录
    '__dir__'    => ['controller/v1','config','lang','validates/login/','route'],
    // 需要自动控制器类
    'controller' => ['Index'],
    // 需要自动创建的表单验证
    'validates' => ['Index'],
    // 需要自动创建的路由
    'route' => ['route'],
    // 需要自动创建配置文件
    'config'      => ['route'],
    // 需要自动创建的多语言配置文件
    'lang'      => ['zh-CN','en-US'],
    // 需要自动创建的模板
//    'view'       => ['index/index'],
];

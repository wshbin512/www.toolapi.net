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

use think\facade\Env;

return [
    'admin' => [
        //协议
        'protocol' => 'websocket',
        //监听地址
        'ip' => '0.0.0.0',
        //监听端口
        'port' => Env::get('workerman.admin_port', 20002),
        //设置当前Worker实例启动多少个进程
        'serverCount' => 1,
    ],

    'chat' => [
        //协议
        'protocol' => 'websocket',
        //监听地址
        'ip' => '0.0.0.0',
        //监听端口
        'port' => Env::get('workerman.chat_port', 20003),
        //设置当前Worker实例启动多少个进程
        'serverCount' => 1,
    ],

    'channel' => [
        //内部通讯监听端口
        'port' => Env::get('workerman.channel_port', 20012),
        //内部通讯地址
        'ip' => '127.0.0.1',
    ],

];

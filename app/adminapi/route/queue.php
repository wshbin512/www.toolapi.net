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
use think\facade\Route;

/**
 * 用户模块 相关路由
 */
Route::group('queue', function () {
    // 任务列表
    Route::get('index', 'v1.queue.Queue/index');
    //批量发货记录
    Route::get('delivery/log/:id/:type', 'v1.queue.Queue/delivery_log');
    //再次执行批量任务
    Route::get('again/do_queue/:id/:type', 'v1.queue.Queue/again_do_queue');
    //清除异常任务
    Route::get('del/wrong_queue/:id/:type', 'v1.queue.Queue/del_wrong_queue');
    //停止任务
    Route::get('stop/wrong_queue/:id', 'v1.queue.Queue/stop_wrong_queue');


})->middleware([
    \app\http\middleware\AllowOriginMiddleware::class,
    \app\adminapi\middleware\AdminAuthTokenMiddleware::class,
    \app\adminapi\middleware\AdminCkeckRoleMiddleware::class,
    \app\adminapi\middleware\AdminLogMiddleware::class
]);

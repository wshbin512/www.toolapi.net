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
use think\facade\Config;
use think\Response;
use app\http\middleware\AllowOriginMiddleware;

/**
 * 无需授权的接口
 */
Route::group(function () {
    //用户名密码登录
    Route::post('login', 'Login/login')->name('AdminLogin');
    //后台登录页面数据
    Route::get('login/info', 'Login/info');
    //下载文件
    Route::get('download', 'PublicController/download');
    //验证码
    Route::get('captcha_pro', 'Login/captcha');


    Route::get('index', 'Test/index');

})->middleware(AllowOriginMiddleware::class);

/**
 * miss 路由
 */
Route::miss(function () {
    if (app()->request->isOptions()) {
        $header = Config::get('cookie.header');
        $header['Access-Control-Allow-Origin'] = app()->request->header('origin');
        return Response::create('ok')->code(200)->header($header);
    } else
        return Response::create()->code(404);
});

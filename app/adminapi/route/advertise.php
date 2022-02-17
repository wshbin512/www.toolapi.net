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
 * 广告管理 相关路由
 */
Route::group('advertise', function () {
    //广告资源路由
    Route::resource('advertise', 'v1.advertise.Advertise')->name('AdvertiseResource');
    //分类列表
    Route::get('advertise/merchant_index/:id', 'v1.advertise.Advertise/merchantIndex')->name('MerchantIndex');
    //关联商户
    Route::put('advertise/relation/:id', 'v1.advertise.Advertise/relation')->name('Relation');
    //取消关联
    Route::put('advertise/unrelation/:id', 'v1.advertise.Advertise/unrelation')->name('UnRelation');

    //关联APP
    Route::put('advertise/app_relation/:id', 'v1.advertise.Advertise/app_relation')->name('AppRelation');
    //取消关联
    Route::put('advertise/app_unRelation/:id', 'v1.advertise.Advertise/app_unRelation')->name('AppUnRelation');

    //广告分类资源路由
    Route::resource('category', 'v1.advertise.AdvertiseCategory')->name('AdvertiseCategoryResource');
    //修改状态
    Route::put('category/set_status/:id/:status', 'v1.advertise.AdvertiseCategory/set_status')->name('CategoryStatus');
    //分类列表
    Route::get('category_list', 'v1.advertise.AdvertiseCategory/categoryList')->name('categoryList');

})->middleware([
    \app\http\middleware\AllowOriginMiddleware::class,
    \app\adminapi\middleware\AdminAuthTokenMiddleware::class,
    \app\adminapi\middleware\AdminCkeckRoleMiddleware::class,
    \app\adminapi\middleware\AdminLogMiddleware::class
]);

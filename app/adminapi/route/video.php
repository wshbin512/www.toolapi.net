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

Route::group('video', function () {

    Route::get('category', 'v1.video.VideoCategory/index');
    //商品树形列表
    Route::get('category/tree/:type', 'v1.video.VideoCategory/tree_list');
    //获取分类cascader行列表
    Route::get('category/cascader_list/[:type]', 'v1.video.VideoCategory/cascader_list');
    //商品分类新增表单
    Route::get('category/create', 'v1.video.VideoCategory/create');
    //商品分类新增
    Route::post('category', 'v1.video.VideoCategory/save');
    //商品分类编辑表单
    Route::get('category/:id', 'v1.video.VideoCategory/edit');
    //商品分类编辑
    Route::put('category/:id', 'v1.video.VideoCategory/update');
    //删除商品分类
    Route::delete('category/:id', 'v1.video.VideoCategory/delete');
    //商品分类修改状态
    Route::put('category/set_show/:id/:is_show', 'v1.video.VideoCategory/set_show');
    //商品分类快捷编辑
    Route::put('category/set_category/:id', 'v1.video.VideoCategory/set_category');
    //商品列表
    Route::get('video', 'v1.video.Video/index');
    //获取退出未保存的数据
    Route::get('cache', 'v1.video.Video/getCacheData');
    //1分钟保存一次数据
    Route::post('cache', 'v1.video.Video/saveCacheData');
    //删除退出未保存的数据
    Route::delete('cache', 'v1.video.Video/deleteCacheData');
    //获取所有商品列表
    Route::get('video/list', 'v1.video.Video/search_list');
    //获取商品规格
    Route::get('video/attrs/:id/:type', 'v1.video.Video/get_attrs');
    //商品列表头
    Route::get('video/type_header', 'v1.video.Video/type_header');
    //商品详情
    Route::get('video/:id', 'v1.video.Video/get_video_info');
    //加入回收站
    Route::delete('video/:id', 'v1.video.Video/delete');
    //保存新建或保存
    Route::post('video/:id', 'v1.video.Video/save');
    //修改商品状态
    Route::put('video/set_show/:id/:is_show', 'v1.video.Video/set_show');
    //商品快速编辑
    Route::put('video/set_video/:id', 'v1.video.Video/set_video');
    //设置批量商品上架
    Route::put('video/video_show', 'v1.video.Video/video_show');
    //设置批量商品下架
    Route::put('video/video_unshow', 'v1.video.Video/video_unshow');
    //规则列表
    Route::get('video/rule', 'v1.video.VideoRule/index');
    //规则 保存新建或编辑
    Route::post('video/rule/:id', 'v1.video.VideoRule/save');
    //规则详情
    Route::get('video/rule/:id', 'v1.video.VideoRule/read');
    //删除属性规则
    Route::delete('video/rule/delete', 'v1.video.VideoRule/delete');
    //生成属性
    Route::post('generate_attr/:id/:type', 'v1.video.Video/is_format_attr');
    //评论列表
    Route::get('reply', 'v1.video.VideoReply/index');
    //回复评论
    Route::put('reply/set_reply/:id', 'v1.video.VideoReply/set_reply');
    //删除评论
    Route::delete('reply/:id', 'v1.video.VideoReply/delete');
    //获取复制商品配置
    Route::get('copy_config', 'v1.video.CopyTaobao/getConfig');
    //获取商品数据
    Route::post('crawl', 'v1.video.CopyTaobao/get_request_contents');
    //复制其他平台商品
    Route::post('copy', 'v1.video.CopyTaobao/copyProduct');
    //保存商品数据
    Route::post('crawl/save', 'v1.video.CopyTaobao/save_video');
    //调起虚拟评论表单
    Route::get('reply/fictitious_reply/:video_id', 'v1.video.VideoReply/fictitious_reply');
    //保存虚拟评论
    Route::post('reply/save_fictitious_reply', 'v1.video.VideoReply/save_fictitious_reply');
    //获取规则属性模板
    Route::get('video/get_rule', 'v1.video.Video/get_rule');
    //获取运费模板
    Route::get('video/get_template', 'v1.video.Video/get_template');
    //上传视频密钥接口
    Route::get('video/get_temp_keys', 'v1.video.Video/getTempKeys');
    //检测是否有活动开启
    Route::get('video/check_activity/:id', 'v1.video.Video/check_activity');
})->middleware([
    \app\http\middleware\AllowOriginMiddleware::class,
    \app\adminapi\middleware\AdminAuthTokenMiddleware::class,
    \app\adminapi\middleware\AdminCkeckRoleMiddleware::class,
    \app\adminapi\middleware\AdminLogMiddleware::class
]);

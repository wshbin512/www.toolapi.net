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
namespace app\api\controller\v1\publics;

use app\services\article\ArticleCategoryServices;
use crmeb\services\CacheService;

/**
 * 文章分类类
 * Class ArticleCategoryController
 * @package app\api\controller\publics
 */
class ArticleCategoryController
{
    protected $services;

    public function __construct(ArticleCategoryServices $services)
    {
        $this->services = $services;
    }
    /**
     * 文章分类列表
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
    public function lst()
    {
        $cateInfo = CacheService::get('ARTICLE_CATEGORY', function () {
            $cateInfo = $this->services->getArticleCategory();
            array_unshift($cateInfo, ['id' => 0, 'title' => '热门']);
            return $cateInfo;
        });
        return app('json')->successful($cateInfo);
    }
}

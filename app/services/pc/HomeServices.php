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
declare (strict_types=1);

namespace app\services\pc;

use app\services\BaseServices;
use app\services\product\product\StoreCategoryServices;
use app\services\product\product\StoreProductServices;

class HomeServices extends BaseServices
{
    /**
     * 首页分类尚品
     * @return mixed
     */
    public function getCategoryProduct()
    {
        /** @var StoreCategoryServices $category */
        $category = app()->make(StoreCategoryServices::class);
        /** @var StoreProductServices $product */
        $product = app()->make(StoreProductServices::class);

        [$page, $limit] = $this->getPageValue();
        $list = $category->getCid($page, $limit);
        foreach ($list as &$info) {
            $productList = $product->getSearchList(['cid' => $info['id'], 'star' => 1, 'is_show' => 1, 'is_del' => 0], 1, 8, ['id,store_name,image,IFNULL(sales, 0) + IFNULL(ficti, 0) as sales,price,ot_price']);
            foreach ($productList as &$item) {
                if (count($item['star'])) {
                    $item['star'] = bcdiv((string)array_sum(array_column($item['star'], 'product_score')), (string)count($item['star']), 1);
                } else {
                    $item['star'] = '3.0';
                }
            }
            $info['productList'] = get_thumb_water($productList, 'mid');
        }
        $data['list'] = $list;
        $data['count'] = $category->getCidCount();
        return $data;
    }
}

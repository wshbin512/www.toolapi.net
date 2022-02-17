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

namespace app\api\controller\pc;


use app\Request;
use app\services\pc\CartServices;

class CartController
{
    protected $services;

    public function __construct(CartServices $services)
    {
        $this->services = $services;
    }

    /**
     * 获取用户购物车列表
     * @param Request $request
     * @return mixed
     */
    public function getCartList(Request $request)
    {
        $uid = $request->uid();
        $data = $this->services->getCartList((int)$uid);
        return app('json')->successful($data);
    }
}

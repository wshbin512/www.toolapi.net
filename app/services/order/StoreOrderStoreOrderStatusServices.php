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

namespace app\services\order;


use app\dao\order\StoreOrderStoreOrderStatusDao;
use app\services\BaseServices;

/**
 * Class StoreOrderStoreOrderStatusServices
 * @package app\services\order
 * @method getTakeOrderIds(array $where)
 */
class StoreOrderStoreOrderStatusServices extends BaseServices
{

    /**
     * StoreOrderStoreOrderStatusServices constructor.
     * @param StoreOrderStoreOrderStatusDao $dao
     */
    public function __construct(StoreOrderStoreOrderStatusDao $dao)
    {
        $this->dao = $dao;
    }
}

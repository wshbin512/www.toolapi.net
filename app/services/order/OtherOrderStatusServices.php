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


use app\dao\order\OtherOrderStatusDao;
use app\services\BaseServices;

/**
 * Class OtherOrderStatusServices
 * @package app\services\order
 */
class OtherOrderStatusServices extends BaseServices
{

    /**
     * OtherOrderStatusServices constructor.
     * @param OtherOrderStatusDao $dao
     */
    public function __construct(OtherOrderStatusDao $dao)
    {
        $this->dao = $dao;
    }
}

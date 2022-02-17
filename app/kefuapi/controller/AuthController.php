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

namespace app\kefuapi\controller;


use crmeb\basic\BaseController;

/**
 * Class AuthController
 * @package app\kefuapi\controller
 */
abstract class AuthController extends BaseController
{

    /**
     * @var int
     */
    protected $kefuId;

    /**
     * @var array
     */
    protected $kefuInfo;

    /**
     * 初始化
     */
    protected function initialize()
    {
        $this->kefuId = $this->request->kefuId();
        $this->kefuInfo = $this->request->kefuInfo();
    }
}

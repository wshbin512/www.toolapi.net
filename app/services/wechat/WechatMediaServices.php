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

namespace app\services\wechat;


use app\dao\wechat\WechatMediaDao;
use app\services\BaseServices;

/**
 * Class WechatMediaServices
 * @package app\services\wechat
 * @method save(array $data) 保存数据
 */
class WechatMediaServices extends BaseServices
{
    /**
     * WechatMediaServices constructor.
     * @param WechatMediaDao $dao
     */
    public function __construct(WechatMediaDao $dao)
    {
        $this->dao = $dao;
    }

}

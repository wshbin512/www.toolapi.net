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
namespace crmeb\subscribes;


/**
 * 用户事件
 * Class UserSubscribe
 * @package crmeb\subscribes
 */
class UserSubscribe
{

    public function handle()
    {

    }

    /**
     * 管理员后台给用户添加金额
     * @param $event
     */
    public function onAdminAddMoney($event)
    {
        list($user, $money) = $event;
        //$user 用户信息
        //$money 添加的金额
    }

}

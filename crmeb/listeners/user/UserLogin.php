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

namespace crmeb\listeners\user;


use crmeb\interfaces\ListenerInterface;

class UserLogin implements ListenerInterface
{
    /**
     * 用户成功登录后
     * @param $event
     */
    public function handle($event): void
    {
        [$user, $token] = $event;

    }
}

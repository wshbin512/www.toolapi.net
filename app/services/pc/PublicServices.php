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
use app\services\shipping\SystemCityServices;

class PublicServices extends BaseServices
{
    /**
     * 获取城市数据
     * @param int $pid
     * @return mixed
     */
    public function getCity(int $pid)
    {
        /** @var SystemCityServices $city */
        $city = app()->make(SystemCityServices::class);
        $list = $city->getColumn(['parent_id' => $pid, 'is_show' => 1], 'city_id,name');
        return $list;
    }
}

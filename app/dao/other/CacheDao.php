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

namespace app\dao\other;


use app\dao\BaseDao;
use app\model\other\Cache;

/**
 * Class CacheDao
 * @package app\dao\other
 */
class CacheDao extends BaseDao
{

    /**
     * @return string
     */
    public function setModel(): string
    {
        return Cache::class;
    }

    /**
     * 清除过期缓存
     * @throws \Exception
     */
    public function delectDeOverdueDbCache()
    {
        $this->getModel()->where('expire_time', '<>', 0)->where('expire_time', '<', time())->delete();
    }
}

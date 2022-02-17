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

namespace crmeb\utils;

class QRcode extends \dh2y\qrcode\QRcode
{
    public function setCacheDir(string $cache_dir)
    {
        $this->cache_dir = $cache_dir;
        if (!file_exists($this->cache_dir)) {
            mkdir($this->cache_dir, 0775, true);
        }
        return $this;
    }

}

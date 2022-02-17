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

namespace app\services\advertise;

use app\dao\advertise\AdvertiseContentDao;
use app\services\BaseServices;

/**
 * Class AdvertiseContentServices
 * @package app\services\advertise
 * @method save(array $data)保存
 * @method update($id, array $data, ?string $key = null)
 */
class AdvertiseContentServices extends BaseServices
{
    /**
     * AdvertiseContentServices constructor.
     * @param AdvertiseContentDao $dao
     */
    public function __construct(AdvertiseContentDao $dao)
    {
        $this->dao = $dao;
    }

    /**
     * 删除
     * @param int $id
     * @return bool
     */
    public function del(int $id)
    {
        return $this->dao->del($id);
    }
}

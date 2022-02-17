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
declare (strict_types = 1);

namespace app\services\user;

use app\services\BaseServices;
use app\dao\user\UserTaskFinishDao;

/**
 *
 * Class UserTaskFinishServices
 * @package app\services\user
 */
class UserTaskFinishServices extends BaseServices
{

    /**
     * UserTaskFinishServices constructor.
     * @param UserTaskFinishDao $dao
     */
    public function __construct(UserTaskFinishDao $dao)
    {
        $this->dao = $dao;
    }

}

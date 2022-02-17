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
namespace app\model\other;

use crmeb\traits\ModelTrait;
use crmeb\basic\BaseModel;
use think\Model;

/**
 *  协议Model
 * Class Cache
 * @package app\model\other
 */
class Agreement extends BaseModel
{
    use ModelTrait;

    const EXPIRE = 0;
    /**
     * 模型名称
     * @var string
     */
    protected $name = 'agreement';
}

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


use app\dao\wechat\WechatKeyDao;
use app\services\BaseServices;

/**
 * 微信菜单
 * Class WechatMenuServices
 * @package app\services\wechat
 * @method delete($id, ?string $key = null)  删除
 * @method getOne(array $where)  获取一条数据
 * @method count(array $where)  读取数据条数
 * @method saveAll(array $where)  插入数据
 * @method getColumn($where,$key)  获取某个字段数组
 */
class WechatKeyServices extends BaseServices
{
    /**
     * 构造方法
     * WechatMenuServices constructor.
     * @param WechatKeyDao $dao
     */
    public function __construct(WechatKeyDao $dao)
    {
        $this->dao = $dao;
    }

}

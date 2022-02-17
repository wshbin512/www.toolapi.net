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
namespace app\api\controller\v1\user;

use app\Request;
use app\services\user\UserExtractServices;
use think\facade\Config;

/**
 * 提现类
 * Class UserExtractController
 * @package app\api\controller\user
 */
class UserExtractController
{
    protected $services = NUll;

    /**
     * UserExtractController constructor.
     * @param UserExtractServices $services
     */
    public function __construct(UserExtractServices $services)
    {
        $this->services = $services;
    }

    /**
     * 提现银行
     * @param Request $request
     * @return mixed
     */
    public function bank(Request $request)
    {
        $uid = (int)$request->uid();
        return app('json')->successful($this->services->bank($uid));
    }

    /**
     * 提现申请
     * @param Request $request
     * @return mixed
     */
    public function cash(Request $request)
    {
        $extractInfo = $request->postMore([
            ['money', 0],
            ['change_url', '']
        ]);

        if (!preg_match('/^[0-9]+(.[0-9]{1,2})?$/', (float)$extractInfo['money'])) return app('json')->fail('提现金额输入有误');

        $uid = (int)$request->uid();
        if ($this->services->cash($uid, $extractInfo))
            return app('json')->successful('申请提现成功');
        else
            return app('json')->fail('提现失败');
    }
}

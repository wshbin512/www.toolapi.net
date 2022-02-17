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
namespace app\api\validate\user;


use think\Validate;

/**
 * 注册验证
 * Class RegisterValidates
 * @package app\http\validates\user
 */
class RegisterValidates extends Validate
{
    protected $regex = ['phone' => '/^1[23456789]\d{8}$/'];

    protected $rule = [
        'phone' => 'require|regex:phone',
        'account' => 'require|regex:phone',
        'captcha' => 'require|length:6',
        'password' => 'require',
    ];

    protected $message = [
        'phone.require' => '手机号必须填写',
        'phone.regex' => '手机号格式错误',
        'account.require' => '手机号必须填写',
        'account.regex' => '手机号格式错误',
        'captcha.require' => '验证码必须填写',
        'captcha.length' => '验证码长度不正确',
        'password.require' => '密码必须填写',
    ];


    public function sceneCode()
    {
        return $this->only(['phone']);
    }


    public function sceneRegister()
    {
        return $this->only(['account', 'captcha', 'password']);
    }
}

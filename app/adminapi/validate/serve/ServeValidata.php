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

namespace app\adminapi\validate\serve;


use think\Validate;

class ServeValidata extends Validate
{
    /**
     * 定义验证规则
     * 格式：'字段名'    =>    ['规则1','规则2'...]
     *
     * @var array
     */
    protected $rule = [
        'phone' => 'require|number|mobile',
        'password' => 'require',
        'verify_code' => 'require|number',
        'account' => 'require',
    ];

    /**
     * 定义错误信息
     * 格式：'字段名.规则名'    =>    '错误信息'
     *
     * @var array
     */
    protected $message = [
        'phone.require' => '请填写手机号码',
        'phone.number' => '您输入的手机号码必须为数字',
        'phone.mobile' => '您输入的手机号码有误',
        'password.require' => '密码必须填写',
        'verify_code.require' => '请填写短信验证码',
        'verify_code.number' => '短信验证码必须为数字',
        'account.require' => '请填写账号',
    ];

    protected $scene = [
        'login' => ['password', 'account'],
        'phone' => ['phone']
    ];
}

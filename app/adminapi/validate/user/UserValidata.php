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

namespace app\adminapi\validate\user;

use think\Validate;

class UserValidata extends Validate
{
    /**
     * 定义验证规则
     * 格式：'字段名'    =>    ['规则1','规则2'...]
     *
     * @var array
     */
    protected $rule = [
        'account' => 'require|alphaNum',
        'pwd' => 'require',
        'true_pwd' => 'require',
        'nickname' => 'require',
    ];

    /**
     * 定义错误信息
     * 格式：'字段名.规则名'    =>    '错误信息'
     *
     * @var array
     */
    protected $message = [
        'account.require' => '请输入用户账号',
        'account.alphaNum' => '账号只能为数字和字母',
        'pwd.require' => '请填写密码',
        'true_pwd.require' => '请填写确认密码',
        'nickname.number' => '请输入用户昵称'
    ];
}

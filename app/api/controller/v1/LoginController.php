<?php

// TODO +----------------------------------------------------------------------
// TODO | NRLSE [ NRLSE赋能开发者，助力企业发展 ]
// TODO +----------------------------------------------------------------------
// TODO | Copyright (c) 2014~2021 https://www.nrlse.cn All rights reserved.
// TODO +----------------------------------------------------------------------
// TODO | Licensed NRLSE并不是自由软件，未经许可不能去掉NRLSE相关版权
// TODO +----------------------------------------------------------------------
// TODO | Author: NRLSE Team <admin@nrlse.cn>
// TODO +----------------------------------------------------------------------

namespace app\api\controller\v1;


use app\Request;
use app\services\wechat\WechatServices as WechatAuthServices;
use crmeb\utils\Queue;
use think\facade\Cache;
use crmeb\jobs\TaskJob;
use think\facade\Config;
use crmeb\services\CacheService;
use app\services\user\LoginServices;
use app\services\system\store\SystemStoreServices;
use app\services\app\AppServices;
use think\exception\ValidateException;
use app\api\validate\user\RegisterValidates;
use app\services\message\sms\SmsSendServices;

/**微信小程序授权类
 * Class AuthController
 * @package app\api\controller
 */
class LoginController
{
    protected $services = NUll;

    /**
     * LoginController constructor.
     * @param LoginServices $services
     */
    public function __construct(LoginServices $services)
    {
        $this->services = $services;
    }

    /**
     * H5账号登陆
     * @param Request $request
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
    public function login(Request $request)
    {
        [$appId, $account, $password, $spread] = $request->postMore([
            'appId', 'account', 'password', 'spread'
        ], true);
        Queue::instance()->do('emptyYesterdayAttachment')->job(TaskJob::class)->push();

        if (!$appId) {
            return app('json')->fail('缺失AppID参数');
        }

        /** @var SystemStoreServices $systemStore */
        /*$systemStore = app()->make(SystemStoreServices::class);
        $systemStoreData = $systemStore->getAppIdData($appId);
        if(!$systemStoreData){
            return app('json')->fail('该APP未注册API接口，请联系管理员');
        }*/

        /** @var AppServices $appServices */
        $appServices = app()->make(AppServices::class);
        $appData = $appServices->getAppIdData($appId);
        if(!$appData){
            return app('json')->fail('该APP未注册API接口，请联系管理员');
        }

        if (!$account || !$password) {
            return app('json')->fail('请输入账号和密码');
        }
        return app('json')->success('登录成功', $this->services->login($account, $password, $spread));
    }

    /**
     * apple快捷登陆
     * @param Request $request
     * @param WechatAuthServices $services
     * @return mixed
     * @throws \Psr\SimpleCache\InvalidArgumentException
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function appleLogin(Request $request, WechatAuthServices $services)
    {
        [$appId, $openId, $phone, $email, $captcha] = $request->postMore([
            ['appId', ''],
            ['openId', ''],
            ['phone', ''],
            ['email', ''],
            ['captcha', '']
        ], true);

        if (!$appId) {
            return app('json')->fail('缺失AppID参数');
        }

        /** @var AppServices $appServices */
        $appServices = app()->make(AppServices::class);
        $appData = $appServices->getAppIdData($appId);
        if(!$appData){
            return app('json')->fail('该APP未注册API接口，请联系管理员');
        }

        if ($phone) {
            if (!$captcha) {
                return app('json')->fail('请输入验证码');
            }
            //验证验证码
            $verifyCode = CacheService::get('code_' . $phone);
            if (!$verifyCode)
                return app('json')->fail('请先获取验证码');
            $verifyCode = substr($verifyCode, 0, 6);
            if ($verifyCode != $captcha) {
                CacheService::delete('code_' . $phone);
                return app('json')->fail('验证码错误');
            }
        }
        $userInfo = [
            'openId' => $openId,
            'unionid' => '',
            'avatarUrl' => sys_config('h5_avatar'),
            'nickName' => $email,
        ];
        $token = $services->appAuth($userInfo, $phone, 'apple');
        if ($token) {
            return app('json')->success('登录成功', $token);
        } else if ($token === false) {
            return app('json')->success('登录成功', ['isbind' => true]);
        } else {
            return app('json')->fail('登陆失败');
        }

    }

    /**
     * 退出登录
     * @param Request $request
     */
    public function logout(Request $request)
    {
        $key = trim(ltrim($request->header(Config::get('cookie.token_name')), 'Bearer'));
        CacheService::redisHandler()->delete($key);
        return app('json')->success('成功');
    }

    public function verifyCode()
    {
        $unique = password_hash(uniqid(true), PASSWORD_BCRYPT);
        Cache::set('sms.key.' . $unique, 0, 300);
        $time = sys_config('verify_expire_time', 1);
        return app('json')->success(['key' => $unique, 'expire_time' => $time]);
    }

    public function captcha(Request $request)
    {
        ob_clean();
        $rep = captcha();
        $key = app('session')->get('captcha.key');
        $uni = $request->get('key');
        if ($uni)
            Cache::set('sms.key.cap.' . $uni, $key, 300);

        return $rep;
    }

    /**
     * 验证验证码是否正确
     *
     * @param $uni
     * @param string $code
     * @return bool
     * @throws \Psr\SimpleCache\InvalidArgumentException
     */
    protected function checkCaptcha($uni, string $code): bool
    {
        $cacheName = 'sms.key.cap.' . $uni;
        if (!Cache::has($cacheName)) {
            return false;
        }

        $key = Cache::get($cacheName);

        $code = mb_strtolower($code, 'UTF-8');

        $res = password_verify($code, $key);

        if ($res) {
            Cache::delete($cacheName);
        }

        return $res;
    }

    /**
     * 验证码发送
     * @param Request $request
     * @return mixed
     */
    public function verify(Request $request, SmsSendServices $services)
    {
        [$phone, $type, $key, $code] = $request->postMore([['phone', 0], ['type', ''], ['key', ''], ['code', '']], true);

        $keyName = 'sms.key.' . $key;
        $nowKey = 'sms.' . date('YmdHi');


        if (!Cache::has($keyName)){
            //return app('json')->make(401, '发送验证码失败,请刷新页面重新获取');
        }

        $num = Cache::get($keyName);

//        if ($num > 2) {
//            if (!$code)
//                return app('json')->make(402, '请输入验证码');
//
//            if (!$this->checkCaptcha($key, $code))
//                return app('json')->fail('验证码输入有误');
//        }

        $total = 1;
        if ($has = Cache::has($nowKey)) {
            $total = Cache::get($nowKey);
            if ($total > Config::get('sms.maxMinuteCount', 20))
                return app('json')->success('已发送');
        }

        try {
            validate(RegisterValidates::class)->scene('code')->check(['phone' => $phone]);
        } catch (ValidateException $e) {
            return app('json')->fail($e->getError());
        }
        $time = sys_config('verify_expire_time', 1);
        
        //TODO 临时启用虚拟短信
        $code = rand(100000, 999999);
        CacheService::set('code_' . $phone, $code, $time * 60);
        Cache::set($keyName, $num + 1, 300);
        Cache::set($nowKey, $total, 61);
        return app('json')->successful(compact('code'));
        //TODO 临时启用虚拟短信

        $smsCode = $this->services->verify($services, $phone, $type, $time, app()->request->ip());
        if ($smsCode) {
            CacheService::set('code_' . $phone, $smsCode, $time * 60);
            Cache::set($keyName, $num + 1, 300);
            Cache::set($nowKey, $total, 61);
            return app('json')->success('发送成功');
        } else {
            return app('json')->fail('发送失败');
        }

    }

    /**
     * H5注册新用户
     * @param Request $request
     * @return mixed
     */
    public function register(Request $request)
    {
        [$appId, $account, $captcha, $password, $confirm_password, $spread, $address, $is_default] = $request->postMore([['appId', ''], ['account', ''], ['captcha', ''], ['password', ''], ['confirm_password', ''], ['spread', 0], ['address', ''], ['is_default', 1]], true);
        try {
            validate(RegisterValidates::class)->scene('register')->check(['account' => $account, 'captcha' => $captcha, 'password' => $password]);
        } catch (ValidateException $e) {
            return app('json')->fail($e->getError());
        }

        if (!$appId) {
            return app('json')->fail('缺失AppID参数');
        }

        /** @var SystemStoreServices $systemStore */
        /*$systemStore = app()->make(SystemStoreServices::class);
        $systemStoreData = $systemStore->getAppIdData($appId);
        if(!$systemStoreData){
            return app('json')->fail('该APP未注册API接口，请联系管理员');
        }*/

        /** @var AppServices $appServices */
        $appServices = app()->make(AppServices::class);
        $appData = $appServices->getAppIdData($appId);
        if(!$appData){
            return app('json')->fail('该APP未注册API接口，请联系管理员');
        }

        $verifyCode = CacheService::get('code_' . $account);
        if (!$verifyCode)
            return app('json')->fail('请先获取验证码');
        $verifyCode = substr($verifyCode, 0, 6);
        if ($verifyCode != $captcha)
            return app('json')->fail('验证码错误');

        if (strlen(trim($password)) < 6 || strlen(trim($password)) > 16)
            return app('json')->fail('密码必须是在6到16位之间');
        if ($password == '123456') return app('json')->fail('密码太过简单，请输入较为复杂的密码');
        if (strlen(trim($password)) <> strlen(trim($confirm_password)))
            return app('json')->fail('输入的两次密码不一致');

        $registerStatus = $this->services->register($appId, $account, $password, $spread, 'h5', $address, $is_default);
        if ($registerStatus) {
            return app('json')->success('注册成功');
        }
        return app('json')->fail('注册失败');
    }

    /**
     * 密码修改
     * @param Request $request
     * @return mixed
     */
    public function reset(Request $request)
    {
        [$account, $captcha, $password] = $request->postMore([['account', ''], ['captcha', ''], ['password', '']], true);
        try {
            validate(RegisterValidates::class)->scene('register')->check(['account' => $account, 'captcha' => $captcha, 'password' => $password]);
        } catch (ValidateException $e) {
            return app('json')->fail($e->getError());
        }
        $verifyCode = CacheService::get('code_' . $account);
        if (!$verifyCode)
            return app('json')->fail('请先获取验证码');
        $verifyCode = substr($verifyCode, 0, 6);
        if ($verifyCode != $captcha) {
            return app('json')->fail('验证码错误');
        }
        if (strlen(trim($password)) < 6 || strlen(trim($password)) > 16)
            return app('json')->fail('密码必须是在6到16位之间');
        if ($password == '123456') return app('json')->fail('密码太过简单，请输入较为复杂的密码');
        $resetStatus = $this->services->reset($account, $password);
        if ($resetStatus) return app('json')->success('修改成功');
        return app('json')->fail('修改失败');
    }

    /**
     * 手机号登录
     * @param Request $request
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
    public function mobile(Request $request)
    {
        [$appId, $phone, $captcha, $spread] = $request->postMore([['appId', ''], ['phone', ''], ['captcha', ''], ['spread', 0]], true);

        if (!$appId) {
            return app('json')->fail('缺失AppID参数');
        }

        /** @var AppServices $appServices */
        $appServices = app()->make(AppServices::class);
        $appData = $appServices->getAppIdData($appId);
        if(!$appData){
            return app('json')->fail('该APP未注册API接口，请联系管理员');
        }

        //验证手机号
        try {
            validate(RegisterValidates::class)->scene('code')->check(['phone' => $phone]);
        } catch (ValidateException $e) {
            return app('json')->fail($e->getError());
        }

        //验证验证码
        $verifyCode = CacheService::get('code_' . $phone);
        if (!$verifyCode)
            return app('json')->fail('请先获取验证码');
        $verifyCode = substr($verifyCode, 0, 6);
        if ($verifyCode != $captcha) {
            CacheService::delete('code_' . $phone);
            return app('json')->fail('验证码错误');
        }

        $user_type = $request->getFromType() ? $request->getFromType() : 'h5';
        $token = $this->services->mobile($appId, $phone, $spread, $user_type);

        if ($token) {
            CacheService::delete('code_' . $phone);
            return app('json')->success('登录成功', $token);
        } else {
            return app('json')->fail('登录失败');
        }
    }

    /**
     * H5切换登陆
     * @param Request $request
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
    public function switch_h5(Request $request)
    {
        $from = $request->post('from', 'wechat');
        $user = $request->user();
        $token = $this->services->switchAccount($user, $from);
        if ($token) {
            $token['userInfo'] = $user;
            return app('json')->success('登录成功', $token);
        } else
            return app('json')->fail('登录失败');
    }

    /**
     * 绑定手机号
     * @param Request $request
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
    public function binding_phone(Request $request)
    {
        list($phone, $captcha, $key) = $request->postMore([
            ['phone', ''],
            ['captcha', ''],
            ['key', '']
        ], true);
        //验证手机号
        try {
            validate(RegisterValidates::class)->scene('code')->check(['phone' => $phone]);
        } catch (ValidateException $e) {
            return app('json')->fail($e->getError());
        }
        if (!$key) {
            return app('json')->fail('参数错误+');
        }
        if (!$phone) {
            return app('json')->fail('请输入手机号');
        }
        //验证验证码
        $verifyCode = CacheService::get('code_' . $phone);
        if (!$verifyCode)
            return app('json')->fail('请先获取验证码');
        $verifyCode = substr($verifyCode, 0, 6);
        if ($verifyCode != $captcha) {
            CacheService::delete('code_' . $phone);
            return app('json')->fail('验证码错误');
        }
        $re = $this->services->bindind_phone($phone, $key);
        if ($re) {
            CacheService::delete('code_' . $phone);
            return app('json')->success('绑定成功', $re);
        } else
            return app('json')->fail('绑定失败');
    }

    /**
     * 绑定手机号
     * @param Request $request
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
    public function user_binding_phone(Request $request)
    {
        list($phone, $captcha, $step) = $request->postMore([
            ['phone', ''],
            ['captcha', ''],
            ['step', 0]
        ], true);

        //验证手机号
        try {
            validate(RegisterValidates::class)->scene('code')->check(['phone' => $phone]);
        } catch (ValidateException $e) {
            return app('json')->fail($e->getError());
        }
        if (!$step) {
            //验证验证码
            $verifyCode = CacheService::get('code_' . $phone);
            if (!$verifyCode)
                return app('json')->fail('请先获取验证码');
            $verifyCode = substr($verifyCode, 0, 6);
            if ($verifyCode != $captcha)
                return app('json')->fail('验证码错误');
        }
        $uid = (int)$request->uid();
        $re = $this->services->userBindindPhone($uid, $phone, $step);
        if ($re) {
            CacheService::delete('code_' . $phone);
            return app('json')->success($re['msg'] ?? '绑定成功', $re['data'] ?? []);
        } else
            return app('json')->fail('绑定失败');
    }

    public function update_binding_phone(Request $request)
    {
        [$phone, $captcha] = $request->postMore([
            ['phone', ''],
            ['captcha', ''],
        ], true);

        //验证手机号
        try {
            validate(RegisterValidates::class)->scene('code')->check(['phone' => $phone]);
        } catch (ValidateException $e) {
            return app('json')->fail($e->getError());
        }
        //验证验证码
        $verifyCode = CacheService::get('code_' . $phone);
        if (!$verifyCode)
            return app('json')->fail('请先获取验证码');
        $verifyCode = substr($verifyCode, 0, 6);
        if ($verifyCode != $captcha)
            return app('json')->fail('验证码错误');
        $uid = (int)$request->uid();
        $re = $this->services->updateBindindPhone($uid, $phone);
        if ($re) {
            CacheService::delete('code_' . $phone);
            return app('json')->success($re['msg'] ?? '修改成功', $re['data'] ?? []);
        } else
            return app('json')->fail('修改失败');
    }

    /**
     * 设置扫描二维码状态
     * @param string $code
     * @return mixed
     */
    public function setLoginKey(string $code)
    {
        if (!$code) {
            return app('json')->fail('登录CODE不存在');
        }
        $cacheCode = CacheService::get($code);
        if ($cacheCode === false || $cacheCode === null) {
            return app('json')->fail('二维码已过期请重新扫描');
        }
        CacheService::set($code, '0', 600);
        return app('json')->success();
    }
}

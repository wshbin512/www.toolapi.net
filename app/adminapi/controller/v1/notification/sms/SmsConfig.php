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
namespace app\adminapi\controller\v1\notification\sms;

use app\services\message\sms\SmsAdminServices;
use app\services\serve\ServeServices;
use crmeb\services\CacheService;
use app\adminapi\controller\AuthController;
use think\facade\App;

/**
 * 短信配置
 * Class SmsConfig
 * @package app\admin\controller\sms
 */
class SmsConfig extends AuthController
{
    /**
     * 构造方法
     * SmsConfig constructor.
     * @param App $app
     * @param SmsAdminServices $services
     */
    public function __construct(App $app, SmsAdminServices $services)
    {
        parent::__construct($app);
        $this->services = $services;
    }


    /**
     * 保存短信配置
     * @return mixed
     */
    public function save_basics()
    {
        [$account, $token] = $this->request->postMore([
            ['sms_account', ''],
            ['sms_token', '']
        ], true);

        $this->validate(['sms_account' => $account, 'sms_token' => $token], \app\adminapi\validate\notification\SmsConfigValidate::class);

        if ($this->services->login($account, $token)) {
            return $this->success('登录成功');
        } else {
            return $this->fail('账号或密码错误');
        }
    }

    /**
     * 检测登录
     * @return mixed
     */
    public function is_login(ServeServices $services)
    {
        $sms_info = CacheService::redisHandler()->get('sms_account');
        $data = ['status' => false, 'info' => ''];
        if ($sms_info) {
            try {
                $result = $services->user()->getUser();
            } catch (\Throwable $e) {
                $result = [];
            }
            if (!$result) {
                $this->logout();
            } else {
                $data['status'] = true;
                $data['info'] = $sms_info;
            }
            return $this->success($data);
        } else {
            \crmeb\services\CacheService::clear();
            $account = sys_config('sms_account');
            $password = sys_config('sms_token');
            //没有退出登录 清空这两个数据 自动登录
            if ($account && $password) {
                $res = $services->user()->login($account, $password);
                if ($res) {
                    CacheService::redisHandler()->set('sms_account', $account);
                    $data['status'] = true;
                    $data['info'] = $account;
                }
            }
        }
        return $this->success($data);
    }

    /**
     * 退出
     * @return mixed
     * @throws \Psr\SimpleCache\InvalidArgumentException
     */
    public function logout()
    {
        $res = CacheService::redisHandler()->delete('sms_account');
        if ($res) {
            $this->services->updateSmsConfig('', '');
            CacheService::clear();
            return $this->success('退出成功');
        } else {
            return $this->fail('退出失败');
        }
    }

    /**
     * 短信发送记录
     * @return mixed
     */
    public function record(ServeServices $services)
    {
        [$page, $limit, $status] = $this->request->getMore([
            [['page', 'd'], 0],
            [['limit', 'd'], 10],
            ['type', '', '', 'status'],
        ], true);
        return $this->success($services->user()->record($page, $limit, 1, $status));
    }

    /**
     * @return mixed
     */
    public function data()
    {
        return $this->success($this->services->getSmsData());
    }
}

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
use app\services\user\UserRechargeServices;

/**
 * 充值类
 * Class UserRechargeController
 * @package app\api\controller\user
 */
class UserRechargeController
{
    protected $services = NUll;

    /**
     * UserRechargeController constructor.
     * @param UserRechargeServices $services
     */
    public function __construct(UserRechargeServices $services)
    {
        $this->services = $services;
    }

    /**
     * 资金来往
     * @param Request $request
     * @return mixed
     */
    public function mutual(Request $request)
    {
        list($mutual_uid, $mutual_coupon, $mutual_integral, $mutual_currency) = $request->postMore([
            ['mutual_uid', 0],
            ['mutual_coupon', 0],
            ['mutual_integral', 0],
            ['mutual_currency', 0]
        ], true);

        $uid = (int)$request->uid();
        $res = $this->services->mutual($uid, $mutual_uid, $mutual_coupon, $mutual_integral, $mutual_currency);

        if ($res) {
            $msg = $res['msg'];
            unset($res['msg']);
            return app('json')->successful($msg, $res);
        }
        return app('json')->fail('互转失败');
    }

    /**
     * 红券转绿券
     * @param Request $request
     * @return mixed
     */
    public function red_green_turn(Request $request)
    {
        list($number) = $request->postMore([
            ['number', 0]
        ], true);

        $uid = (int)$request->uid();
        $res = $this->services->turn($uid, $number);

        if ($res) {
            $msg = $res['msg'];
            unset($res['msg']);
            return app('json')->successful($msg, $res);
        }
        return app('json')->fail('互转失败');
    }

    /**
     * 绿券转零钱
     * @param Request $request
     * @return mixed
     */
    public function green_currency_turn(Request $request)
    {
        list($number) = $request->postMore([
            ['number', 0]
        ], true);

        $uid = (int)$request->uid();
        $res = $this->services->greenCurrency($uid, $number);

        if ($res) {
            $msg = $res['msg'];
            unset($res['msg']);
            return app('json')->successful($msg, $res);
        }
        return app('json')->fail('互转失败');
    }

    /**
     * 积分转零钱
     * @param Request $request
     * @return mixed
     */
    public function integral_change_turn(Request $request)
    {
        list($number) = $request->postMore([
            ['number', 0]
        ], true);

        $uid = (int)$request->uid();
        $res = $this->services->integralChange($uid, $number);

        if ($res) {
            $msg = $res['msg'];
            unset($res['msg']);
            return app('json')->successful($msg, $res);
        }
        return app('json')->fail('互转失败');
    }

    public function recharge(Request $request)
    {
        [$price, $recharId, $type, $from] = $request->postMore([
            ['price', 0],
            ['rechar_id', 0],
            ['type', 0],
            ['from', 'weixin']
        ], true);
        if (!$price || $price <= 0) return app('json')->fail('充值金额不能为0元!');
        if (!in_array($type, [0, 1])) return app('json')->fail('充值方式不支持!');
        if (!in_array($from, ['weixin', 'weixinh5', 'routine'])) return app('json')->fail('充值方式不支持');
        $storeMinRecharge = sys_config('store_user_min_recharge');
        if ($price < $storeMinRecharge) return app('json')->fail('充值金额不能低于' . $storeMinRecharge);
        $uid = (int)$request->uid();
        $re = $this->services->recharge($uid, $price, $recharId, $type, $from);
        if ($re) {
            $msg = $re['msg'];
            unset($re['msg']);
            return app('json')->successful($msg, $re);
        }
        return app('json')->fail('充值失败');
    }

    /**
     * 小程序充值
     * @param Request $request
     * @return mixed
     */
    public function routine(Request $request)
    {
        list($price, $recharId, $type) = $request->postMore([['price', 0], ['rechar_id', 0], ['type', 0]], true);
        if (!$price || $price <= 0) return app('json')->fail('充值金额不能为0元!');
        $storeMinRecharge = sys_config('store_user_min_recharge');
        if ($price < $storeMinRecharge) return app('json')->fail('充值金额不能低于' . $storeMinRecharge);
        $from = 'routine';
        $uid = (int)$request->uid();
        $re = $this->services->recharge($uid, $price, $recharId, $type, $from);
        if ($re) {
            $msg = $re['msg'];
            unset($re['msg']);
            return app('json')->successful($msg, $re['data']);
        }
        return app('json')->fail('充值失败');
    }

    /**
     * 公众号充值
     * @param Request $request
     * @return mixed
     */
    public function wechat(Request $request)
    {
        list($price, $change_url, $from, $type) = $request->postMore([['price', 0], ['change_url', 0], ['from', 'weixin'], ['type', 0]], true);

        if (!$price || $price <= 0) return app('json')->fail('充值金额不能为0元!');
        $storeMinRecharge = sys_config('store_user_min_recharge');
        if ($price < $storeMinRecharge) return app('json')->fail('充值金额不能低于' . $storeMinRecharge);
        $uid = (int)$request->uid();
        $re = $this->services->recharge($uid, $price, $change_url, $type, $from);
        if ($re) {
            $msg = $re['msg'];
            unset($re['msg']);
            return app('json')->successful($msg, $re);
        }
        return app('json')->fail('充值失败');
    }

    /**
     * 充值额度选择
     * @return mixed
     */
    public function index()
    {
        $rechargeQuota = sys_data('user_recharge_quota') ?? [];
        $data['recharge_quota'] = $rechargeQuota;
        $recharge_attention = sys_config('recharge_attention');
        $recharge_attention = explode("\n", $recharge_attention);
        $data['recharge_attention'] = $recharge_attention;

        $cash_attention = sys_config('cash_attention');
        $cash_attention = explode("\n", $cash_attention);
        $data['cash_attention'] = $cash_attention;

        $mutual_attention = sys_config('mutual_attention');
        $mutual_attention = explode("\n", $mutual_attention);
        $data['mutual_attention'] = $mutual_attention;

        $redgreen_attention = sys_config('redgreen_attention');
        $redgreen_attention = explode("\n", $redgreen_attention);
        $data['redgreen_attention'] = $redgreen_attention;

        $integral_attention = sys_config('integral_attention');
        $integral_attention = explode("\n", $integral_attention);
        $data['integral_attention'] = $integral_attention;

        return app('json')->successful($data);
    }
}

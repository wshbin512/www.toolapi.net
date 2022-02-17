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
declare (strict_types=1);

namespace app\services\pay;

use crmeb\services\AliPayService;
use crmeb\services\MiniProgramService;
use crmeb\services\WechatService;
use think\exception\ValidateException;

/**
 * 支付统一入口
 * Class PayServices
 * @package app\services\pay
 */
class PayServices
{
    /**
     * 微信支付类型
     */
    const WEIXIN_PAY = 'weixin';

    /**
     * 余额支付
     */
    const YUE_PAY = 'yue';

    /**
     * 线下支付
     */
    const OFFLINE_PAY = 'offline';

    /**
     * 支付宝
     */
    const ALIAPY_PAY = 'alipay';

    /**
     * 支付方式
     * @var string[]
     */
    const PAY_TYPE = [
        PayServices::WEIXIN_PAY => '微信支付',
        PayServices::YUE_PAY => '货币支付',
        PayServices::OFFLINE_PAY => '线下支付',
        PayServices::ALIAPY_PAY => '支付宝'
    ];

    /**
     * 发起支付
     * @param string $payType
     * @param string $openid
     * @param string $orderId
     * @param string $price
     * @param string $successAction
     * @param string $body
     * @return array|string
     */
    public function pay(string $payType, string $openid, string $orderId, string $price, string $successAction, string $body, bool $isCode = false)
    {
        try {
            switch ($payType) {
                case 'routine':
                    if (request()->isApp()) {
                        return MiniProgramService::appPay($openid, $orderId, $price, $successAction, $body);
                    } else {
                        return MiniProgramService::jsPay($openid, $orderId, $price, $successAction, $body);
                    }
                case 'weixinh5':
                    return WechatService::paymentPrepare(null, $orderId, $price, $successAction, $body, '', 'MWEB');
                case 'weixin':
                    if (request()->isApp()) {
                        return WechatService::appPay($openid, $orderId, $price, $successAction, $body);
                    } else {
                        return WechatService::jsPay($openid, $orderId, $price, $successAction, $body);
                    }
                case 'alipay':
                    return AliPayService::instance()->create($body, $orderId, $price, $successAction, $openid, sys_config('site_url'), $isCode);
                case 'pc':
                    return WechatService::nativePay($openid, $orderId, $price, $successAction, $body);
                default:
                    throw new ValidateException('支付方式不存在');
            }
        } catch (\Exception $e) {
            throw new ValidateException($e->getMessage());
        }
    }
}

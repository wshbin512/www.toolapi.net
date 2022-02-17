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

namespace app\api\controller\v1;


use crmeb\services\AliPayService;
use crmeb\services\MiniProgramService;
use crmeb\services\WechatService;

/**
 * 支付回调
 * Class PayController
 * @package app\api\controller\v1
 */
class PayController
{

    /**
     * 支付回调
     * @param string $type
     * @return string|void
     * @throws \EasyWeChat\Core\Exceptions\FaultException
     */
    public function notify(string $type)
    {
        switch (urldecode($type)) {
            case 'alipay':
                return AliPayService::handleNotify();
                break;
            case 'wechat':
                return WechatService::handleNotify()->getContent();
                break;
            case 'routine':
                return MiniProgramService::handleNotify()->getContent();
                break;
        }
    }
}

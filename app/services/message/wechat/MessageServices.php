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

namespace app\services\message\wechat;


use app\services\activity\StoreBargainServices;
use app\services\activity\StoreCombinationServices;
use app\services\activity\StorePinkServices;
use app\services\activity\StoreSeckillServices;
use app\services\BaseServices;
use app\services\other\QrcodeServices;
use app\services\product\product\StoreProductServices;
use app\services\user\LoginServices;
use app\services\user\UserServices;
use app\services\wechat\WechatReplyServices;
use app\services\wechat\WechatUserServices;
use crmeb\services\WechatService;
use EasyWeChat\Message\News;
use think\facade\Log;

class MessageServices extends BaseServices
{
    /**
     * 事件处理
     * @param string $eventName
     * @param $qrInfo
     * @param $message
     * @return array|\EasyWeChat\Message\Image|\EasyWeChat\Message\News|\EasyWeChat\Message\Text|\EasyWeChat\Message\Transfer|\EasyWeChat\Message\Voice|string
     */
    public function wechatEvent($qrInfo, $message)
    {
        $response = WechatService::transfer();
        $thirdType = explode('-', $qrInfo['third_type']);
        switch (strtolower($thirdType[0])) {
            case 'spread':
                try {
                    $spreadUid = $qrInfo['third_id'];
                    /** @var WechatUserServices $wechatUser */
                    $wechatUser = app()->make(WechatUserServices::class);
                    $uid = $wechatUser->getFieldValue($message->FromUserName, 'openid', 'uid', ['user_type', '<>', 'h5']);
                    if ($spreadUid == $uid) {
                        $response = '自己不能推荐自己';
                    }
                    /** @var UserServices $userService */
                    $userService = app()->make(UserServices::class);
                    $userInfo = $userService->get($uid);
                    if (!$userInfo) {
                        $response = '用户不存在';
                    }
                    if ($userInfo['spread_uid']) {
                        $response = '已有推荐人!';
                    }
                    /** @var LoginServices $loginService */
                    $loginService = app()->make(LoginServices::class);
                    if ($loginService->updateUserInfo(['code' => $spreadUid], $userInfo)) {
                        $response = '绑定推荐人失败!';
                    }
                    $wechatNews['title'] = sys_config('site_name');
                    $wechatNews['image'] = sys_config('site_logo');
                    $wechatNews['description'] = sys_config('site_name');
                    $wechatNews['url'] = sys_config('site_url') . '/pages/index/index';
                    $messages = new News($wechatNews);
                    WechatService::staffService()->message($messages)->to($message->FromUserName)->send();
                } catch (\Exception $e) {
                    $response = $e->getMessage();
                }
                break;
            case 'reply':
                /** @var WechatReplyServices $replyServices */
                $replyServices = app()->make(WechatReplyServices::class);
                $data = $replyServices->get($qrInfo['third_id']);
                if ($data) {
                    $response = $replyServices->replyDataByMessage($data->toArray());
                }
                break;
            case 'product':
                /** @var StoreProductServices $productService */
                $productService = app()->make(StoreProductServices::class);
                $productInfo = $productService->get($thirdType[1]);
                $wechatNews['title'] = $productInfo->store_name;
                $wechatNews['image'] = $productInfo->image;
                $wechatNews['description'] = $productInfo->store_info;
                $wechatNews['url'] = sys_config('site_url') . '/pages/news_details/index?id=' . $thirdType[1];
                $messages = new News($wechatNews);
                WechatService::staffService()->message($messages)->to($message->FromUserName)->send();
                break;
            case 'combination':
                /** @var StoreCombinationServices $combinationService */
                $combinationService = app()->make(StoreCombinationServices::class);
                $productInfo = $combinationService->get($thirdType[1]);
                $wechatNews['title'] = $productInfo->title;
                $wechatNews['image'] = $productInfo->image;
                $wechatNews['description'] = $productInfo->info;
                $wechatNews['url'] = sys_config('site_url') . '/pages/activity/goods_combination_details/index?id=' . $thirdType[1];
                $messages = new News($wechatNews);
                WechatService::staffService()->message($messages)->to($message->FromUserName)->send();
                break;
            case 'seckill':
                /** @var StoreSeckillServices $seckillService */
                $seckillService = app()->make(StoreSeckillServices::class);
                $productInfo = $seckillService->get($thirdType[1]);
                $wechatNews['title'] = $productInfo->title;
                $wechatNews['image'] = $productInfo->image;
                $wechatNews['description'] = $productInfo->info;
                $wechatNews['url'] = sys_config('site_url') . '/pages/activity/goods_seckill_details/index?id=' . $thirdType[1] . '&time=' . $thirdType[2] . '&status=' . $thirdType[3];
                $messages = new News($wechatNews);
                WechatService::staffService()->message($messages)->to($message->FromUserName)->send();
                break;
            case 'bargain':
                /** @var StoreBargainServices $bargainService */
                $bargainService = app()->make(StoreBargainServices::class);
                $productInfo = $bargainService->get($thirdType[1]);
                $wechatNews['title'] = $productInfo->title;
                $wechatNews['image'] = $productInfo->image;
                $wechatNews['description'] = $productInfo->info;
                $wechatNews['url'] = sys_config('site_url') . '/pages/activity/goods_bargain_details/index?id=' . $thirdType[1] . '&bargain=' . $thirdType[2];
                $messages = new News($wechatNews);
                WechatService::staffService()->message($messages)->to($message->FromUserName)->send();
                break;
            case 'pink':
                /** @var StorePinkServices $pinkService */
                $pinkService = app()->make(StorePinkServices::class);
                /** @var StoreCombinationServices $combinationService */
                $combinationService = app()->make(StoreCombinationServices::class);
                $pinktInfo = $pinkService->get($thirdType[1]);
                $productInfo = $combinationService->get($pinktInfo->cid);
                $wechatNews['title'] = $productInfo->title;
                $wechatNews['image'] = $productInfo->image;
                $wechatNews['description'] = $productInfo->info;
                $wechatNews['url'] = sys_config('site_url') . '/pages/activity/goods_combination_status/index?id=' . $thirdType[1];
                $messages = new News($wechatNews);
                WechatService::staffService()->message($messages)->to($message->FromUserName)->send();
                break;
        }
        return $response;
    }

    /**
     * 扫码
     * @param $message
     * @return array|\EasyWeChat\Message\Image|\EasyWeChat\Message\News|\EasyWeChat\Message\Text|\EasyWeChat\Message\Voice|string
     */
    public function wechatEventScan($message)
    {
        /** @var QrcodeServices $qrcodeService */
        $qrcodeService = app()->make(QrcodeServices::class);
        /** @var WechatReplyServices $wechatReplyService */
        $wechatReplyService = app()->make(WechatReplyServices::class);
        $response = $wechatReplyService->reply('subscribe');
        if ($message->EventKey && ($qrInfo = $qrcodeService->getQrcode($message->Ticket, 'ticket'))) {
            $qrcodeService->scanQrcode($message->Ticket, 'ticket');
            $response = $this->wechatEvent($qrInfo, $message);
        }
        return [$response, $qrInfo['third_id']];
    }

    /**
     * 取消关注
     * @param $message
     */
    public function wechatEventUnsubscribe($message)
    {
        /** @var WechatUserServices $wechatUser */
        $wechatUser = app()->make(WechatUserServices::class);
        $wechatUser->unSubscribe($message->FromUserName);
    }


    /**
     * 公众号关注
     * @param $message
     * @return array|\EasyWeChat\Message\Image|\EasyWeChat\Message\News|\EasyWeChat\Message\Text|\EasyWeChat\Message\Voice|string
     */
    public function wechatEventSubscribe($message)
    {
        /** @var WechatReplyServices $wechatReplyService */
        $wechatReplyService = app()->make(WechatReplyServices::class);
        $response = $wechatReplyService->reply('subscribe');
        if (isset($message->EventKey)) {
            /** @var QrcodeServices $qrcodeService */
            $qrcodeService = app()->make(QrcodeServices::class);
            if ($message->EventKey && ($qrInfo = $qrcodeService->getQrcode($message->Ticket, 'ticket'))) {
                $qrcodeService->scanQrcode($message->Ticket, 'ticket');
                $response = $this->wechatEvent($qrInfo, $message);
            }
        }
        return [$response, $qrInfo['third_id']];
    }

    /**
     * 位置 事件
     * @param $message
     * @return string
     */
    public function wechatEventLocation($message)
    {
        //return 'location';
    }

    /**
     * 跳转URL  事件
     * @param $message
     * @return string
     */
    public function wechatEventView($message)
    {
        //return 'view';
    }

    /**
     * 图片 消息
     * @param $message
     * @return string
     */
    public function wechatMessageImage($message)
    {
        //return 'image';
    }

    /**
     * 语音 消息
     * @param $message
     * @return string
     */
    public function wechatMessageVoice($message)
    {
        //return 'voice';
    }

    /**
     * 视频 消息
     * @param $message
     * @return string
     */
    public function wechatMessageVideo($message)
    {
        //return 'video';
    }

    /**
     * 位置  消息
     */
    public function wechatMessageLocation($message)
    {
        //return 'location';
    }

    /**
     * 链接   消息
     * @param $message
     * @return string
     */
    public function wechatMessageLink($message)
    {
        //return 'link';
    }

    /**
     * 其它消息  消息
     */
    public function wechatMessageOther($message)
    {
        //return 'other';
    }
}

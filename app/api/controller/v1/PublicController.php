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
use crmeb\services\CacheService;
use crmeb\services\UploadService;
use crmeb\services\workerman\ChannelService;
use think\facade\Cache;

use app\services\advertise\AdvertiseServices;
use app\services\advertise\AdvertiseCategoryServices;

use app\services\activity\StorePinkServices;
use app\services\diy\DiyServices;
use app\services\message\service\StoreServiceServices;
use app\services\order\DeliveryServiceServices;
use app\services\product\product\StoreCategoryServices;
use app\services\product\product\StoreProductServices;
use app\services\shipping\ExpressServices;
use app\services\shipping\SystemCityServices;
use app\services\system\attachment\SystemAttachmentServices;
use app\services\system\config\SystemConfigServices;
use app\services\system\store\SystemStoreServices;
use app\services\system\store\SystemStoreStaffServices;
use app\services\user\UserBillServices;
use app\services\user\UserInvoiceServices;
use app\services\user\UserServices;
use app\services\wechat\WechatUserServices;
use app\services\app\AppServices;


/**
 * 公共类
 * Class PublicController
 * @package app\api\controller
 */
class PublicController
{
    /**
     * 主页获取
     * @param Request $request
     * @return mixed
     */
    public function index(Request $request)
    {

        $site_name = sys_config('site_name');

        $android_version = sys_config('android_version');
        $android_version_code = sys_config('android_version_code');
        $android_logo = sys_config('android_logo');
        $android_link = sys_config('android_link');
        $android_news = sys_config('android_news');

        $ios_version = sys_config('ios_version');
        $ios_version_code = sys_config('ios_version_code');
        $ios_logo = sys_config('ios_logo');
        $ios_link = sys_config('ios_link');
        $ios_news = sys_config('ios_news');

        $is_update = sys_config('is_update');
        return app('json')->successful(compact('site_name', 'logoUrl', 'android_version', 'android_version_code', 'android_logo','android_link', 'android_news', 'ios_version', 'ios_version_code', 'ios_logo', 'ios_link', 'ios_news', 'is_update'));

        $banner = sys_data('routine_home_banner') ?: [];//TODO 首页banner图
        $menus = sys_data('routine_home_menus') ?: [];//TODO 首页按钮
        $roll = sys_data('routine_home_roll_news') ?: [];//TODO 首页滚动新闻
        $activity = sys_data('routine_home_activity', 3) ?: [];//TODO 首页活动区域图片
        $explosive_money = sys_data('index_categy_images') ?: [];//TODO 首页超值爆款
        $site_name = sys_config('site_name');
        $routine_index_page = sys_data('routine_index_page');
        $info['fastInfo'] = $routine_index_page[0]['fast_info'] ?? '';//TODO 快速选择简介
        $info['bastInfo'] = $routine_index_page[0]['bast_info'] ?? '';//TODO 精品推荐简介
        $info['firstInfo'] = $routine_index_page[0]['first_info'] ?? '';//TODO 首发新品简介
        $info['salesInfo'] = $routine_index_page[0]['sales_info'] ?? '';//TODO 促销单品简介
        $logoUrl = sys_config('routine_index_logo');//TODO 促销单品简介
        if (strstr($logoUrl, 'http') === false && $logoUrl) {
            $logoUrl = sys_config('site_url') . $logoUrl;
        }
        $logoUrl = str_replace('\\', '/', $logoUrl);
        $fastNumber = (int)sys_config('fast_number', 0);//TODO 快速选择分类个数
        $bastNumber = (int)sys_config('bast_number', 0);//TODO 精品推荐个数
        $firstNumber = (int)sys_config('first_number', 0);//TODO 首发新品个数
        $promotionNumber = (int)sys_config('promotion_number', 0);//TODO 首发新品个数

        /** @var StoreCategoryServices $categoryService */
        $categoryService = app()->make(StoreCategoryServices::class);
        $info['fastList'] = $fastNumber ? $categoryService->byIndexList($fastNumber, 'id,cate_name,pid,pic') : [];//TODO 快速选择分类个数
        /** @var StoreProductServices $storeProductServices */
        $storeProductServices = app()->make(StoreProductServices::class);
        $info['bastList'] = $bastNumber ? $storeProductServices->getRecommendProduct($request->uid(), 'is_best', $bastNumber) : [];//TODO 精品推荐个数
        $info['firstList'] = $firstNumber ? $storeProductServices->getRecommendProduct($request->uid(), 'is_new', $firstNumber) : [];//TODO 首发新品个数
        $info['bastBanner'] = sys_data('routine_home_bast_banner') ?? [];//TODO 首页精品推荐图片
        $info['activityBanner'] = sys_data('activity_banner') ?? [];//TODO 活动图片
//        $benefit = $promotionNumber ? $storeProductServices->getRecommendProduct($request->uid(), 'is_benefit', $promotionNumber) : [];//TODO 首页促销单品
//        $lovely = sys_data('routine_home_new_banner') ?: [];//TODO 首发新品顶部图
//        $likeInfo = $storeProductServices->getRecommendProduct($request->uid(), 'is_hot', 3);//TODO 热门榜单 猜你喜欢
//        if ($request->uid()) {
//            /** @var WechatUserServices $wechatUserService */
//            $wechatUserService = app()->make(WechatUserServices::class);
//            $subscribe = $wechatUserService->value(['uid' => $request->uid()], 'subscribe') ? true : false;
//        } else {
//            $subscribe = true;
//        }
//        $newGoodsBananr = sys_config('new_goods_bananr');
//        $tengxun_map_key = sys_config('tengxun_map_key');
        return app('json')->successful(compact('banner', 'menus', 'roll', 'info', 'activity', 'lovely', 'benefit', 'likeInfo', 'logoUrl', 'site_name', 'subscribe', 'newGoodsBananr', 'tengxun_map_key', 'explosive_money'));
    }

    /**
     * 系统信息获取
     * @param Request $request
     * @return mixed
     */
    public function system(Request $request)
    {
        $where = $request->getMore([
            ['appId', '']
        ]);

        if(!$where['appId']){
            return app('json')->fail('缺失appId参数');
        }

        /** @var AppServices $appServices */
        $appServices = app()->make(AppServices::class);
        $appData = $appServices->getAppIdData($where['appId']);
        if(!$appData){
            return app('json')->fail('该APP未注册API接口，请联系管理员');
        }

        /** @var UserServices $user */
        $user = app()->make(UserServices::class);
        $userWhere['status'] = 1;
        $userCount = bcadd($user->getUserRegister($userWhere),10000,0);
        $userOnline = rand(5000,1000);

        return app('json')->successful(compact('appData','userCount','userOnline'));
    }

    /**
     * 版本获取
     * @param Request $request
     * @return mixed
     */
    public function version(Request $request)
    {

        $site_name = sys_config('site_name');

        $android_version = sys_config('android_version');
        $android_version_code = sys_config('android_version_code');
        $android_logo = sys_config('android_logo');
        $android_link = sys_config('android_link');
        $android_news = sys_config('android_news');

        $ios_version = sys_config('ios_version');
        $ios_version_code = sys_config('ios_version_code');
        $ios_logo = sys_config('ios_logo');
        $ios_link = sys_config('ios_link');
        $ios_news = sys_config('ios_news');

        $is_update = sys_config('is_update');
        return app('json')->successful(compact('site_name', 'logoUrl', 'android_version', 'android_version_code', 'android_logo','android_link', 'android_news', 'ios_version', 'ios_version_code', 'ios_logo', 'ios_link', 'ios_news', 'is_update'));
    }

    /**
     * 获取分享配置
     * @return mixed
     */
    public function share()
    {
        $data['img'] = sys_config('wechat_share_img');
        if (strstr($data['img'], 'http') === false) {
            $data['img'] = sys_config('site_url') . $data['img'];
        }
        $data['img'] = str_replace('\\', '/', $data['img']);
        $data['title'] = sys_config('wechat_share_title');
        $data['synopsis'] = sys_config('wechat_share_synopsis');
        return app('json')->successful(compact('data'));
    }

    public function getAdvertise(Request $request, AdvertiseServices $services){
        /** @var AdvertiseCategoryServices $advertiseCategoryServices */
        $advertiseCategoryServices = app()->make(AdvertiseCategoryServices::class);

        $where = $request->postMore([
            ['alias', 'startUp'],
            ['appId', '']
        ]);

        if(!$where['appId']){
            return app('json')->fail('缺失appId参数');
        }

        /** @var AppServices $appServices */
        $appServices = app()->make(AppServices::class);
        $appData = $appServices->getAppIdData($where['appId']);
        if(!$appData){
            return app('json')->fail('该APP未注册API接口，请联系管理员');
        }

        $alias = $advertiseCategoryServices->getAliasDetails($where);
        if(!$alias){
            return app('json')->fail('数据迷路了');
        }

        $list = $services->getCidDetails($alias['id']);

        switch (count($list)){
            case 0:
                return app('json')->fail('数据迷路了');
                break;
            case 1:
                $data = $list[0];
                $data['images'] = $data['image_input'][0];
                return app('json')->successful($data);
                break;
            default:
                foreach ($list as $item=>$value){
                    $list[$item]['images'] = $value['image_input'][0];
                }
                return app('json')->successful($list);
        }
    }

    /**
     * 获取网站配置
     * @return mixed
     */
    public function getSiteConfig()
    {
        $data['integral_proportion'] = sys_config('integral_proportion');
        $data['record_No'] = sys_config('record_No');
        return app('json')->success($data);
    }

    /**
     * 获取个人中心菜单
     * @param Request $request
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
    public function menu_user(Request $request)
    {
        $menusInfo = sys_data('routine_my_menus') ?? [];
        $uid = 0;
        $userInfo = [];
        if ($request->hasMacro('user')) $userInfo = $request->user();
        if ($request->hasMacro('uid')) $uid = $request->uid();

        $vipOpen = sys_config('member_func_status');
        $brokerageFuncStatus = sys_config('brokerage_func_status');
        $balanceFuncStatus = sys_config('balance_func_status');
        $vipCard = sys_config('member_card_status', 0);
        $svipOpen = sys_config('member_card_status') ? true : false;
        $userService = $invoiceStatus = $deliveryUser = $isUserPromoter = $userVerifyStatus = $userOrder = true;

        if ($uid && $userInfo) {
            /** @var StoreServiceServices $storeService */
            $storeService = app()->make(StoreServiceServices::class);
            $userService = $storeService->checkoutIsService(['uid' => $uid, 'status' => 1]);
            $userOrder = $storeService->checkoutIsService(['uid' => $uid, 'status' => 1, 'customer' => 1]);
            /** @var SystemStoreStaffServices $systemStoreStaff */
            $systemStoreStaff = app()->make(SystemStoreStaffServices::class);
            /** @var UserServices $user */
            $user = app()->make(UserServices::class);
            /** @var UserInvoiceServices $userInvoice */
            $userInvoice = app()->make(UserInvoiceServices::class);
            $invoiceStatus = $userInvoice->invoiceFuncStatus(false);
            /** @var DeliveryServiceServices $deliveryService */
            $deliveryService = app()->make(DeliveryServiceServices::class);
            $deliveryUser = $deliveryService->checkoutIsService($uid);
            $isUserPromoter = $user->checkUserPromoter($uid, $userInfo);
            $userVerifyStatus = $systemStoreStaff->verifyStatus($uid);
        }
        $auth = [];
        $auth['/pages/users/user_vip/index'] = !$vipOpen;
        $auth['/pages/users/user_spread_user/index'] = !$brokerageFuncStatus || !$isUserPromoter || $uid == 0;
        $auth['/pages/users/user_money/index'] = !$balanceFuncStatus;
        $auth['/pages/admin/order/index'] = !$userOrder || $uid == 0;
        $auth['/pages/admin/order_cancellation/index'] = (!$userVerifyStatus && !$deliveryUser) || $uid == 0;
        $auth['/pages/users/user_invoice_list/index'] = !$invoiceStatus;
        $auth['/pages/annex/vip_paid/index'] = !$vipCard || !$svipOpen;
        $auth['/kefu/mobile_list'] = !$userService || $uid == 0;
        foreach ($menusInfo as $key => &$value) {
            $value['pic'] = set_file_url($value['pic']);
            if (isset($auth[$value['url']]) && $auth[$value['url']]) {
                unset($menusInfo[$key]);
                continue;
            }
            if ($value['url'] == '/kefu/mobile_list') {
                $value['url'] = sys_config('site_url') . $value['url'];
                if ($request->isRoutine()) {
                    $value['url'] = str_replace('http://', 'https://', $value['url']);
                }
            }
        }
        /** @var SystemConfigServices $systemConfigServices */
        $systemConfigServices = app()->make(SystemConfigServices::class);
        $bannerInfo = $systemConfigServices->getSpreadBanner() ?? [];
        $my_banner = sys_data('routine_my_banner');
        return app('json')->successful(['routine_my_menus' => array_merge($menusInfo), 'routine_my_banner' => $my_banner, 'routine_spread_banner' => $bannerInfo]);
    }

    /**
     * 热门搜索关键字获取
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
    public function search()
    {
        $routineHotSearch = sys_data('routine_hot_search') ?? [];
        $searchKeyword = [];
        if (count($routineHotSearch)) {
            foreach ($routineHotSearch as $key => &$item) {
                array_push($searchKeyword, $item['title']);
            }
        }
        return app('json')->successful($searchKeyword);
    }


    /**
     * 图片上传
     * @param Request $request
     * @return mixed
     * @throws \Psr\SimpleCache\InvalidArgumentException
     */
    public function upload_image(Request $request, SystemAttachmentServices $services)
    {
        $data = $request->postMore([
            ['filename', 'file'],
        ]);
        if (!$data['filename']) return app('json')->fail('参数有误');
        if (Cache::has('start_uploads_' . $request->uid()) && Cache::get('start_uploads_' . $request->uid()) >= 100) return app('json')->fail('非法操作');
        $upload = UploadService::init();
        $info = $upload->to('store/comment')->validate()->move($data['filename']);
        if ($info === false) {
            return app('json')->fail($upload->getError());
        }
        $res = $upload->getUploadInfo();
        $services->attachmentAdd($res['name'], $res['size'], $res['type'], $res['dir'], $res['thumb_path'], 1, (int)sys_config('upload_type', 1), $res['time'], 3);
        if (Cache::has('start_uploads_' . $request->uid()))
            $start_uploads = (int)Cache::get('start_uploads_' . $request->uid());
        else
            $start_uploads = 0;
        $start_uploads++;
        Cache::set('start_uploads_' . $request->uid(), $start_uploads, 86400);
        $res['dir'] = path_to_url($res['dir']);
        if (strpos($res['dir'], 'http') === false) $res['dir'] = $request->domain() . $res['dir'];
        return app('json')->successful('图片上传成功!', ['name' => $res['name'], 'url' => $res['dir']]);
    }

    /**
     * 物流公司
     * @return mixed
     */
    public function logistics(ExpressServices $services)
    {
        $expressList = $services->expressList();
        return app('json')->successful($expressList ?? []);
    }

    /**
     * 短信购买异步通知
     *
     * @param Request $request
     * @return mixed
     */
    public function sms_pay_notify(Request $request)
    {
        [$order_id, $price, $status, $num, $pay_time, $attach] = $request->postMore([
            ['order_id', ''],
            ['price', 0.00],
            ['status', 400],
            ['num', 0],
            ['pay_time', time()],
            ['attach', 0],
        ], true);
        if ($status == 200) {
            try {
                ChannelService::instance()->send('PAY_SMS_SUCCESS', ['price' => $price, 'number' => $num], [$attach]);
            } catch (\Throwable $e) {
            }
            return app('json')->successful();
        }
        return app('json')->fail();
    }

    /**
     * 记录用户分享
     * @param Request $request
     * @return mixed
     */
    public function user_share(Request $request, UserBillServices $services)
    {
        $uid = (int)$request->uid();
        return app('json')->successful($services->setUserShare($uid));
    }

    /**
     * 获取图片base64
     * @param Request $request
     * @return mixed
     */
    public function get_image_base64(Request $request)
    {
        [$imageUrl, $codeUrl] = $request->postMore([
            ['image', ''],
            ['code', ''],
        ], true);
        try {
            $code = CacheService::get($codeUrl, function () use ($codeUrl) {
                $codeTmp = $code = $codeUrl ? image_to_base64($codeUrl) : false;
                if (!$codeTmp) {
                    $putCodeUrl = put_image($codeUrl);
                    $code = $putCodeUrl ? image_to_base64(app()->request->domain(true) . '/' . $putCodeUrl) : false;
                    $code ?? unlink($_SERVER["DOCUMENT_ROOT"] . '/' . $putCodeUrl);
                }
                return $code;
            });
            $image = CacheService::get($imageUrl, function () use ($imageUrl) {
                $imageTmp = $image = $imageUrl ? image_to_base64($imageUrl) : false;
                if (!$imageTmp) {
                    $putImageUrl = put_image($imageUrl);
                    $image = $putImageUrl ? image_to_base64(app()->request->domain(true) . '/' . $putImageUrl) : false;
                    $image ?? unlink($_SERVER["DOCUMENT_ROOT"] . '/' . $putImageUrl);
                }
                return $image;
            });
            return app('json')->successful(compact('code', 'image'));
        } catch (\Exception $e) {
            return app('json')->fail($e->getMessage());
        }
    }

    /**
     * 门店列表
     * @return mixed
     */
    public function store_list(Request $request, SystemStoreServices $services)
    {
        list($latitude, $longitude) = $request->getMore([
            ['latitude', ''],
            ['longitude', ''],
        ], true);
        $data['list'] = $services->getStoreList(['type' => 0], ['id', 'name', 'phone', 'address', 'detailed_address', 'image', 'latitude', 'longitude'], $latitude, $longitude);
        $data['tengxun_map_key'] = sys_config('tengxun_map_key');
        return app('json')->successful($data);
    }

    /**
     * 查找城市数据
     * @param Request $request
     * @return mixed
     */
    public function city_list(Request $request)
    {
        /** @var SystemCityServices $systemCity */
        $systemCity = app()->make(SystemCityServices::class);
        return app('json')->successful($systemCity->cityList());
    }

    /**
     * 获取拼团数据
     * @return mixed
     */
    public function pink(StorePinkServices $pink, UserServices $user)
    {
        $data['pink_count'] = $pink->getCount(['status' => 2, 'is_refund' => 0]);
        $uids = array_flip($pink->getColumn(['status' => 2, 'is_refund' => 0], 'uid'));
        if (count($uids)) {
            $uids = array_rand($uids, count($uids) < 3 ? count($uids) : 3);
        }
        $data['avatars'] = $uids ? $user->getColumn(is_array($uids) ? [['uid', 'in', $uids]] : ['uid' => $uids], 'avatar') : [];
        return app('json')->successful($data);
    }

    /**
     * 复制口令接口
     * @return mixed
     */
    public function copy_words()
    {
        $data['words'] = sys_config('copy_words');
        return app('json')->successful($data);
    }

    /**生成口令关键字
     * @param Request $request
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function copy_share_words(Request $request)
    {
        list($productId) = $request->getMore([
            ['product_id', ''],
        ], true);
        /** @var StoreProductServices $productService */
        $productService = app()->make(StoreProductServices::class);
        $keyWords['key_words'] = $productService->getProductWords($productId);
        return app('json')->successful($keyWords);
    }

    /**
     * 获取页面数据
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getDiy(DiyServices $services, $id = 0)
    {
        return app('json')->successful($services->getDiyInfo((int)$id));
    }

    /**
     * 获取底部导航
     * @param DiyServices $services
     * @param string $template_name
     * @return mixed
     */
    public function getNavigation(DiyServices $services, string $template_name = '')
    {
        return app('json')->success($services->getNavigation($template_name));
    }
}

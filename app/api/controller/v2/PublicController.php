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

namespace app\api\controller\v2;


use app\Request;
use app\services\diy\DiyServices;
use app\services\product\product\StoreCategoryServices;
use app\services\product\product\StoreProductServices;
use app\services\user\UserServices;
use app\services\wechat\WechatUserServices;

class PublicController
{
    /**
     * 主页获取
     * @param Request $request
     * @return mixed
     */
    public function index(Request $request)
    {
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
        $benefit = $promotionNumber ? $storeProductServices->getRecommendProduct($request->uid(), 'is_benefit', $promotionNumber) : [];//TODO 首页促销单品
        $likeInfo = $storeProductServices->getRecommendProduct($request->uid(), 'is_hot', 3);//TODO 热门榜单 猜你喜欢
        if ($request->uid()) {
            /** @var UserServices $userService */
            $userService = app()->make(UserServices::class);
            //看是否会员过期
            $userService->offMemberLevel($request->uid());
            /** @var WechatUserServices $wechatUserService */
            $wechatUserService = app()->make(WechatUserServices::class);
            $subscribe = $wechatUserService->value(['uid' => $request->uid()], 'subscribe') ? true : false;
        } else {
            $subscribe = true;
        }
        $tengxun_map_key = sys_config('tengxun_map_key');
        $site_name = sys_config('site_name');
        $head_images = sys_config('head_images');
        $community_images = sys_config('community_images');
        $company_images = sys_config('company_images');
        $user_agreement = sys_config('user_agreement');

        $order_head_price = sys_config('order_head_price');//团长单笔收益
        $order_promoter_price = sys_config('order_promoter_price');//群主单笔收益
        $order_red_coupon = sys_config('order_red_coupon');//中奖赠送红券
        $order_quicken_price = sys_config('order_quicken_price');//中奖加速赠送
        $order_integral_price = sys_config('order_integral_price');//中奖赠送积分
        $order_shopping_card = sys_config('order_shopping_card');//中奖赠送购物卡
        $order_pink_fail = sys_config('order_pink_fail');//参团失败奖励
        $site_change_tip = sys_config('site_change_tip');//参团失败奖励

        return app('json')->successful(compact('info', 'benefit', 'likeInfo', 'subscribe', 'tengxun_map_key', 'site_name', 'head_images', 'community_images', 'company_images', 'user_agreement', 'order_head_price', 'order_promoter_price', 'order_red_coupon', 'order_quicken_price', 'order_integral_price', 'order_shopping_card', 'order_pink_fail', 'site_change_tip'));
    }

    /**
     * 获取页面数据
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getDiy($name = '')
    {
        /** @var DiyServices $diyService */
        $diyService = app()->make(DiyServices::class);
        $data = $diyService->getDiy($name);
        if (isset($data['f_scroll_box']['goodsList']['list'])) {
            $data['f_scroll_box']['goodsList']['list'] = get_thumb_water($data['f_scroll_box']['goodsList']['list'], 'small', ['pic']);
        }
        return app('json')->successful($data);
    }

    /**
     * 是否强制绑定手机号
     * @return mixed
     */
    public function bindPhoneStatus()
    {
        $status = sys_config('store_user_mobile') ? true : false;
        return app('json')->success(compact('status'));
    }

    /**
     * 是否关注
     * @param Request $request
     * @param WechatServices $services
     * @return mixed
     */
    public function subscribe(Request $request, WechatServices $services)
    {
        return app('json')->success(['subscribe' => $services->isSubscribe((int)$request->uid())]);
    }

    /**
     * 获取提货点自提开启状态
     * @return mixed
     */
    public function getStoreStatus()
    {
        $data['store_status'] = sys_config('store_self_mention', 0);
        return app('json')->successful($data);
    }
}

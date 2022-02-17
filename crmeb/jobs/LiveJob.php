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

namespace crmeb\jobs;

use app\services\live\LiveAnchorServices;
use app\services\live\LiveGoodsServices;
use app\services\live\LiveRoomServices;
use crmeb\basic\BaseJob;
use crmeb\utils\Queue;
use think\facade\Log;

class LiveJob extends BaseJob
{
    /**
     * 执行同步数据后
     * @param $order
     * @return bool
     */
    public function doJob()
    {
        //更新直播商品状态
        try {
            /** @var LiveGoodsServices $liveGoods */
            $liveGoods = app()->make(LiveGoodsServices::class);
            $liveGoods->syncGoodStatus(true);
        } catch (\Throwable $e) {
            Log::error('更新直播商品状态失败,失败原因:' . $e->getMessage());
        }
        //更新直播间状态
        try {
            /** @var LiveRoomServices $liveRoom */
            $liveRoom = app()->make(LiveRoomServices::class);
            $liveRoom->syncRoomStatus(true);
        } catch (\Throwable $e) {
            Log::error('更新直播间状态失败,失败原因:' . $e->getMessage());
        }
        //更新直播间状态
//        try {
//            /** @var LiveAnchorServices $liveAnchor */
//            $liveAnchor = app()->make(LiveAnchorServices::class);
//            $liveAnchor->syncAnchor(true);
//        } catch (\Throwable $e) {
//            Log::error('更新主播失败,失败原因:' . $e->getMessage());
//        }
//        Queue::instance()->job(self::class)->secs(120)->push();
        return true;
    }
}

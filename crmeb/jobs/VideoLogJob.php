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

use app\services\video\video\VideoLogServices;
use crmeb\basic\BaseJob;
use think\facade\Log;

class  VideoLogJob extends BaseJob
{
    /**
     * @param $type  'visit','cart','order','pay','collect','refund'
     * @param $data
     * @return bool
     */
    public function doJob($type,$data)
    {
        try {
            /** @var VideoLogServices $videoLogServices */
            $videoLogServices = app()->make(VideoLogServices::class);
            $videoLogServices->createLog($type, $data);
        }catch (\Throwable $e){
            Log::error('写入电影记录发生错误,错误原因:' . $e->getMessage());
        }
        return true;
    }
}

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

use app\services\message\sms\SmsRecordServices;
use app\services\system\attachment\SystemAttachmentServices;
use crmeb\basic\BaseJob;
use crmeb\services\sms\Sms;
use crmeb\services\UploadService;

class TaskJob extends BaseJob
{
    /**
     * 修改短信发送记录短信状态
     */
    public function modifyResultCode()
    {
        /** @var SmsRecordServices $smsRecord */
        $smsRecord = app()->make(SmsRecordServices::class);
        return $smsRecord->modifyResultCode();
    }

    /**
     * 清除昨日海报
     * @return bool
     * @throws \Exception
     */
    public function emptyYesterdayAttachment()
    {
        /** @var SystemAttachmentServices $attach */
        $attach = app()->make(SystemAttachmentServices::class);
        return $attach->emptyYesterdayAttachment();
    }
}

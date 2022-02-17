<?php

namespace app\adminapi\controller;

use app\services\other\QrcodeServices;
use crmeb\basic\BaseController;

class Test extends BaseController
{
    public function index()
    {
        /** @var QrcodeServices $qrService */
        $qrService = app()->make(QrcodeServices::class);
        $res = $qrService->getTemporaryQrcode('product_1',1);
        var_dump($res);
    }
}


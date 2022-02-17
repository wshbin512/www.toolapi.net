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

namespace app\adminapi\controller\v1\serve;


use app\adminapi\controller\AuthController;
use app\services\serve\ServeServices;
use app\services\shipping\ExpressServices;
use think\facade\App;

/**
 * 一号通平台物流服务
 * Class Export
 * @package app\adminapi\controller\v1\serve
 */
class Export extends AuthController
{

    /**
     * Export constructor.
     * @param App $app
     * @param ExpressServices $services
     */
    public function __construct(App $app, ExpressServices $services)
    {
        parent::__construct($app);
        $this->services = $services;
    }

    /**
     * 物流公司
     * @return mixed
     */
    public function getExportAll()
    {
        return $this->success($this->services->expressList());
    }

    /**
     *
     * 获取面单信息
     * @param string $com
     * @return mixed
     */
    public function getExportTemp(ServeServices $services)
    {
        [$com] = $this->request->getMore([
            ['com', ''],
        ], true);
        return $this->success($services->express()->temp($com));
    }

    /**
     * 打印电子面单是否开启
     * @return mixed
     */
    public function dumpIsOpen(ServeServices $services)
    {
        $userInfo = $services->user()->getUser();
        $res = false;
        if ($userInfo['dump']['open']) {
            $res = true;
            if (!sys_config('config_export_siid')
                && !sys_config('config_export_com')
                && !sys_config('config_export_to_name')
                && !sys_config('config_export_to_tel')
                && !sys_config('config_export_to_address')
            ) {
                $res = false;
            }
        }
        return $this->success(['isOpen' => $res]);
    }
}

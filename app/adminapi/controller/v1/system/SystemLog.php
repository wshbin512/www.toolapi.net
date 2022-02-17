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
namespace app\adminapi\controller\v1\system;

use think\facade\App;
use app\adminapi\controller\AuthController;
use app\services\system\log\SystemLogServices;
use app\services\system\admin\SystemAdminServices;

/**
 * 管理员操作记录表控制器
 * Class SystemLog
 * @package app\adminapi\controller\v1\system
 */
class SystemLog extends AuthController
{
    /**
     * 构造方法
     * SystemLog constructor.
     * @param App $app
     * @param SystemLogServices $services
     */
    public function __construct(App $app, SystemLogServices $services)
    {
        parent::__construct($app);
        $this->services = $services;
        $this->services->deleteLog();
    }

    /**
     * 显示操作记录
     */
    public function index()
    {

        $where = $this->request->getMore([
            ['pages', ''],
            ['path', ''],
            ['ip', ''],
            ['admin_id', ''],
            ['data', '', '', 'time'],
        ]);
        return $this->success($this->services->getLogList($where, (int)$this->adminInfo['level']));
    }

    public function search_admin(SystemAdminServices $services)
    {
        $info = $services->getOrdAdmin('id,real_name', $this->adminInfo['level']);
        return $this->success(compact('info'));
    }

}


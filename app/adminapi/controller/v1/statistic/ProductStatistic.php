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

namespace app\adminapi\controller\v1\statistic;


use app\adminapi\controller\AuthController;
use app\services\statistic\ProductStatisticServices;
use think\facade\App;

/**
 * Class ProductStatistic
 * @package app\adminapi\controller\v1\statistic
 */
class ProductStatistic extends AuthController
{
    /**
     * ProductStatistic constructor.
     * @param App $app
     * @param ProductStatisticServices $services
     */
    public function __construct(App $app, ProductStatisticServices $services)
    {
        parent::__construct($app);
        $this->services = $services;
    }

    /**
     * 商品基础
     * @return mixed
     */
    public function getBasic()
    {
        $where = $this->request->getMore([
            ['data', '', '', 'time']
        ]);
        $where['time'] = $this->getDay($where['time']);
        return $this->success($this->services->getBasic($where));
    }

    /**
     * 商品趋势
     * @return mixed
     */
    public function getTrend()
    {
        $where = $this->request->getMore([
            ['data', '', '', 'time']
        ]);
        $where['time'] = $this->getDay($where['time']);
        return $this->success($this->services->getTrend($where));
    }

    /**
     * 商品排行
     * @return mixed
     */
    public function getProductRanking()
    {
        $where = $this->request->getMore([
            ['data', '', '', 'time'],
            ['sort', '']
        ]);
        $where['time'] = $this->getDay($where['time']);
        return $this->success($this->services->getProductRanking($where));
    }

    /**
     * 导出
     * @return mixed
     */
    public function getExcel()
    {
        $where = $this->request->getMore([
            ['data', '', '', 'time']
        ]);
        $where['time'] = $this->getDay($where['time']);
        return $this->success($this->services->getTrend($where, true));
    }

    /**
     * 格式化时间
     * @param $time
     * @return string
     */
    public function getDay($time)
    {
        if (strstr($time, '-') !== false) {
            [$startTime, $endTime] = explode('-', $time);
            if (!$startTime && !$endTime) {
                return date("Y/m/d", strtotime("-30 days", time())) . '-' . date("Y/m/d", time());
            } else {
                return $time;
            }
        } else {
            return date("Y/m/d", strtotime("-30 days", time())) . '-' . date("Y/m/d", time());
        }
    }
}

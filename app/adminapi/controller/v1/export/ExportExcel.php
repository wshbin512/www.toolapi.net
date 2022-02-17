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
namespace app\adminapi\controller\v1\export;

use app\adminapi\controller\AuthController;
use app\services\activity\StoreBargainServices;
use app\services\activity\StoreCombinationServices;
use app\services\activity\StorePinkServices;
use app\services\activity\StoreSeckillServices;
use app\services\agent\AgentManageServices;
use app\services\export\ExportServices;
use app\services\order\StoreOrderServices;
use app\services\other\QueueAuxiliaryServices;
use app\services\other\QueueServices;
use app\services\product\product\StoreProductServices;
use app\services\shipping\ExpressServices;
use app\services\system\store\SystemStoreServices;
use app\services\user\MemberCardServices;
use app\services\user\UserBillServices;
use app\services\user\UserRechargeServices;
use app\services\wechat\WechatUserServices;
use think\facade\App;

/**
 * 导出excel类
 * Class ExportExcel
 * @package app\adminapi\controller\v1\export
 */
class ExportExcel extends AuthController
{
    /**
     * @var ExportServices
     */
    protected $service;

    /**
     * ExportExcel constructor.
     * @param App $app
     * @param ExportServices $services
     */
    public function __construct(App $app, ExportServices $services)
    {
        parent::__construct($app);
        $this->service = $services;
    }

    /**
     * 保存用户资金监控的excel表格
     * @param UserBillServices $services
     * @return mixed
     */
    public function userFinance(UserBillServices $services)
    {
        $where = $this->request->getMore([
            ['start_time', ''],
            ['end_time', ''],
            ['nickname', ''],
            ['type', ''],
        ]);
        $data = $services->getBillList($where, '*', false);
        return $this->success($this->service->userFinance($data['data'] ?? []));
    }

    /**
     * 用户佣金
     * @param UserBillServices $services
     * @return mixed
     */
    public function userCommission(UserBillServices $services)
    {
        $where = $this->request->getMore([
            ['page', 1],
            ['limit', 20],
            ['nickname', ''],
            ['price_max', ''],
            ['price_min', ''],
            ['excel', '1'],
        ]);
        $data = $services->getCommissionList($where, false);
        return $this->success($this->service->userCommission($data['list'] ?? []));
    }

    /**
     * 用户积分
     * @param UserBillServices $services
     * @return mixed
     */
    public function userPoint(UserBillServices $services)
    {
        $where = $this->request->getMore([
            ['start_time', ''],
            ['end_time', ''],
            ['nickname', ''],
            ['excel', '1'],
        ]);
        $data = $services->getPointList($where, '*', false);
        return $this->success($this->service->userPoint($data['list'] ?? []));
    }

    /**
     * 用户充值
     * @param UserRechargeServices $services
     * @return mixed
     */
    public function userRecharge(UserRechargeServices $services)
    {
        $where = $this->request->getMore([
            ['data', ''],
            ['paid', ''],
            ['page', 1],
            ['limit', 20],
            ['nickname', ''],
            ['excel', '1'],
        ]);
        $data = $services->getRechargeList($where, '*', false);
        return $this->success($this->service->userRecharge($data['list'] ?? []));
    }

    /**
     * 分销管理 用户推广
     * @param AgentManageServices $services
     * @return mixed
     */
    public function userAgent(AgentManageServices $services)
    {
        $where = $this->request->getMore([
            ['nickname', ''],
            ['data', ''],
            ['excel', '1'],
        ]);
        $data = $services->agentSystemPage($where, false);
        return $this->success($this->service->userAgent($data['list']));
    }

    /**
     * 微信用户导出
     * @param WechatUserServices $services
     * @return mixed
     */
    public function wechatUser(WechatUserServices $services)
    {
        $where = $this->request->getMore([
            ['page', 1],
            ['limit', 20],
            ['nickname', ''],
            ['data', ''],
            ['tagid_list', ''],
            ['groupid', '-1'],
            ['sex', ''],
            ['export', '1'],
            ['subscribe', '']
        ]);
        $tagidList = explode(',', $where['tagid_list']);
        foreach ($tagidList as $k => $v) {
            if (!$v) {
                unset($tagidList[$k]);
            }
        }
        $tagidList = array_unique($tagidList);
        $where['tagid_list'] = implode(',', $tagidList);
        $data = $services->exportData($where);
        return $this->success($this->service->wechatUser($data));
    }

    /**
     * 商铺砍价活动导出
     * @param StoreBargainServices $services
     * @return mixed
     */
    public function storeBargain(StoreBargainServices $services)
    {
        $where = $this->request->getMore([
            ['start_status', ''],
            ['status', ''],
            ['store_name', ''],
        ]);
        $data = $services->getList($where);
        return $this->success($this->service->storeBargain($data));
    }

    /**
     * 商铺拼团导出
     * @param StoreCombinationServices $services
     * @return mixed
     */
    public function storeCombination(StoreCombinationServices $services)
    {
        $where = $this->request->getMore([
            ['start_status', ''],
            ['is_show', ''],
            ['store_name', ''],
        ]);
        $data = $services->getList($where);
        /** @var StorePinkServices $storePinkServices */
        $storePinkServices = app()->make(StorePinkServices::class);
        $countAll = $storePinkServices->getPinkCount([]);
        $countTeam = $storePinkServices->getPinkCount(['k_id' => 0, 'status' => 2]);
        foreach ($data as &$item) {
            $item['count_people_all'] = $countAll[$item['id']] ?? 0;//参与人数
            $item['count_people_pink'] = $countTeam[$item['id']] ?? 0;//成团数量
        }
        return $this->success($this->service->storeCombination($data));
    }

    /**
     * 商铺秒杀导出
     * @param StoreSeckillServices $services
     * @return mixed
     */
    public function storeSeckill(StoreSeckillServices $services)
    {
        $where = $this->request->getMore([
            ['start_status', ''],
            ['status', ''],
            ['store_name', '']
        ]);
        $data = $services->getList($where);
        return $this->success($this->service->storeSeckill($data));
    }

    /**
     * 商铺产品导出
     * @param StoreProductServices $services
     * @return mixed
     */
    public function storeProduct(StoreProductServices $services)
    {
        $where_tmp = $this->request->getMore([
            ['store_name', ''],
            ['cate_id', ''],
            ['type', 1],
            ['ids','']
        ]);
        if ($where_tmp['ids']){
            $where['id'] = explode(',', $where_tmp['ids']);
        }else{
            unset($where_tmp['ids']);
            $where = $where_tmp;
        }
        $data = $services->searchList($where, true, false);
        return $this->success($this->service->storeProduct($data['list'] ?? []));
    }

    /**
     * 订单列表导出
     * @param StoreOrderServices $services
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function storeOrder(StoreOrderServices $services)
    {
        $where_tmp = $this->request->getMore([
            ['status', ''],
            ['real_name', ''],
            ['data', '', '', 'time'],
            ['type', ''],
            ['ids','']
        ]);
        $type = $where_tmp['type'];
        if ($where_tmp['ids'] && !$type){
            $where['id'] = explode(',', $where_tmp['ids']);
        }
        if ((!$where_tmp['ids'] && $type) || ($where_tmp['ids'] && $type)) {
            $where['status'] = 1;
            $where['paid'] = 1;
            $where['is_del'] = 0;
            $where['shipping_type'] = 1;
            $where['is_system_del'] = 0;
        }
        if (!$where_tmp['ids'] && !$type){
            unset($where_tmp['ids']);
            unset($where_tmp['type']);
            $where = $where_tmp;
        }

        $data = $services->getExportList($where);
        return $this->success($this->service->storeOrder($data, $type));
    }

    /**
     * 获取提货点
     * @return mixed
     */
    public function storeMerchant(SystemStoreServices $services)
    {
        $where = $this->request->getMore([
            [['keywords', 's'], ''],
            [['type', 'd'], 0],
        ]);
        $data = $services->getExportData($where);
        return $this->success($this->service->storeMerchant($data));
    }

    /**会员卡导出
     * @param int $id
     * @param MemberCardServices $services
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function memberCard(int $id, MemberCardServices $services)
    {
        $data = $services->getExportData(['batch_card_id' => $id]);
        return $this->success($this->service->memberCard($data));
    }

    /**导出批量任务发货的记录
     * @param int $id
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function batchOrderDelivery($id, $queueType, $cacheType)
    {
        /** @var QueueAuxiliaryServices $auxiliaryService */
        $auxiliaryService = app()->make(QueueAuxiliaryServices::class);
        /** @var QueueServices $queueService */
        $queueService = app()->make(QueueServices::class);
        $queueInfo = $queueService->getQueueOne(['id' => $id]);
        if (!$queueInfo) $this->fail("数据不存在");
        $queueValue = json_decode($queueInfo['queue_in_value'], true);
        if (!$queueValue || !isset($queueValue['cacheType'])) $this->fail("数据参数缺失");
        $data = $auxiliaryService->getExportData(['binding_id' => $id, 'type' => $cacheType]);
        return $this->success($this->service->batchOrderDelivery($data, $queueType));
    }

    /**物流公司表导出
     * @return mixed
     */
    public function expressList()
    {
       /** @var ExpressServices $expressService */
        $expressService = app()->make(ExpressServices::class);
        $data = $expressService->apiExpressList();
        return $this->success($this->service->expressList($data));
    }
}

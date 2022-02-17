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

namespace app\services\other;


use app\dao\other\QueueAuxiliaryDao;
use app\services\BaseServices;
use app\services\order\StoreOrderServices;
use app\services\other\QueueServices;
use crmeb\exceptions\AdminException;
use think\exception\ValidateException;
use think\facade\Db;

/**
 * Class QueueAuxiliaryServices
 * @package app\services\message\service
 */
class QueueAuxiliaryServices extends BaseServices
{
    public static $_status = [
        0 => "未执行",
        1 => "成功",
        2 => "失败"
    ];
    /**
     * QueueAuxiliaryServices constructor.
     * @param QueueAuxiliaryDao $dao
     */
    public function __construct(QueueAuxiliaryDao $dao)
    {
        $this->dao = $dao;
    }


    /** 获取发货执行数据记录
     * @param array $where
     * @return array|bool|\think\Model|null
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getOrderCacheOne(array $where)
    {
        if (!$where) return false;
        return $this->dao->getOrderCacheOne($where);
    }

    /**插入订单队列缓存数据
     * @param $data
     * @param $queueId
     * @return bool
     */
    public function saveOrderCacheLog($data, $queueName = "", $queueType, $cacheType, $source = "admin")
    {
        if (!$data) throw new ValidateException('缺少数据');
        /** @var StoreOrderServices $orderService */
        $orderService = app()->make(StoreOrderServices::class);
        /** @var QueueServices $queueService */
        $queueService = app()->make(QueueServices::class);
        Db::startTrans();
        try {
            if ($cacheType == 3 && $queueType == 7) {//批量发货读取数据表格
                $orderSn = array_column($data, 0);
                $orderList = $orderService->getCanDevlieryOrder("order_id", $orderSn);
                if (!$orderList) throw new AdminException("数据不符合发货状态");
                $orderIds = array_column($orderList,'id','order_id');
                $queueId = $queueService->addQueueList($queueName, count($orderIds), $queueType, "", $source);
                foreach ($data as $k => $v) {
                    if ($v[0] && $v[1] && $v[2] && $v[3]) {
                        if (isset($orderIds[$v[0]])) {
                            $save['relation_id'] = $orderIds[$v[0]];
                            $save['type'] = $cacheType;
                            $save['status'] = 0;
                            $save['add_time'] = time();
                            $save['other'] = json_encode(['order_id' => $v[0], 'delivery_name' => $v[1], 'delivery_code' => $v[2], 'delivery_id' => $v[3], 'delivery_status' => 0, 'wx_message' => 0, 'phone_message' => 0, 'error_info' => ""]);
                            $logId = $this->dao->saveOrderCacheLog($save);
                            $this->dao->update(['id' => $logId], ['binding_id' => $queueId]);
                        }
                    }
                }
            }
            if (($cacheType == 4 && $queueType == 8) || ($cacheType == 5 && $queueType == 9) || ($cacheType == 6 && $queueType == 10)) {
                $orderList = $orderService->getCanDevlieryOrder('id', $data);
                if (!$orderList) throw new AdminException("数据不符合发货状态");
                $orderIds = array_column($orderList,'order_id','id');
                $queueId = $queueService->addQueueList($queueName, count($orderIds), $queueType, "", $source);
                foreach ($data as $k => $v) {
                    if (isset($orderIds[$v])) {
                        $save['relation_id'] =$v;
                        $save['type'] = $cacheType;
                        $save['status'] = 0;
                        $save['add_time'] = time();
                        $save['other'] = json_encode(['order_id' =>  $orderIds[$v], 'delivery_status' => 0, 'wx_message' => 0, 'phone_message' => 0, 'error_info' => ""]);
                        $logId = $this->dao->saveOrderCacheLog($save);
                        $this->dao->update(['id' => $logId], ['binding_id' => $queueId]);
                    }
                }
            }
            Db::commit();
            return $queueId;
        } catch (\Exception $e) {
            Db::rollback();
            throw new AdminException($e->getMessage());
        }

    }

    /**获取发货缓存数据列表
     * @param array $where
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getOrderExpreList(array $where)
    {
        if (!$where) throw new AdminException("获取发货缓存数据条件缺失");
        return $this->dao->getOrderExpreList($where);
    }

    /**修改订单缓存数据
     * @param array $where
     * @param array $data
     * @return mixed
     */
    public function updateOrderStatus(array $where, array $data)
    {
        if (!$where) throw new AdminException("数据条件缺失");
        return $this->dao->update($where, $data);
    }

    /** 根据条件统计缓存数据
     * @param array $where
     * @return int
     */
    public function getCountOrder(array $where)
    {
        return $this->dao->count($where);
    }

    /**查看订单缓存数据的各种状态
     * @param $orderId
     * @param $queueId
     * @return bool|mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getOrderOtherSataus($orderId, $queueId, $cacheType)
    {
        if (!$orderId || !$queueId) return false;
        $where['relation_id'] = $orderId;
        $where['binding_id'] = $queueId;
        $where['type'] = $cacheType;
        $getOne = $this->getOrderCacheOne($where);
        if ($getOne) return json_decode($getOne['other'], true);
        return false;
    }

    /**获取发货记录
     * @param array $where
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function deliveryLogList(array $where = [])
    {
        [$page, $limit] = $this->getPageValue();
        $list = $this->dao->deliveryLogList($where, $page, $limit);
        $list = $this->doBatchDeliveryData($list);
        $count = $this->dao->count($where);
        return compact('list', 'count');
    }

    /**下载发货记录
     * @param array $where
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getExportData(array $where)
    {
        if (!$where) throw new AdminException("数据条件缺失");
        $list = $this->getOrderExpreList($where);
        $list = $this->doBatchDeliveryData($list);
        return $list;
    }

    /**批量发货记录数据
     * @param $list
     * @return mixed
     */
    public function doBatchDeliveryData($list)
    {
        if ($list) {
            /** @var StoreOrderServices $storeOrderService */
            $storeOrderService = app()->make(StoreOrderServices::class);
            /** @var QueueServices $queueService */
            $queueService = app()->make(QueueServices::class);
            $queueType = array_flip($queueService::QUEUE_AND_CACHE_TYPE);

            foreach($list as &$v){
                $v['add_time'] = date('Y-m-d H:i:s', $v['add_time']);
                if ($v['other']) {
                    $other = json_decode($v['other'],true);
                    $v['order_id'] = $other['order_id'];
                    $error = "";
                    if ($other['delivery_status'] == 2) $error .= "发货失败";
                    if ($other['delivery_status'] == 0) $error .= "未执行发货";
                    if ($other['wx_message'] == 2) $error .= "--模板消息发送失败";
                    if ($other['wx_message'] == 0) $error .= "--未执行模板消息发送";
                    if ($other['phone_message'] == 2) $error .= "--短信提醒发送失败";
                    if ($other['phone_message'] == 0) $error .= "--未执行短信提醒发送";
                    $v['error'] = $other['error_info'].'【'.$error.'】';
                }
                $v['status_cn'] = self::$_status[$v['status']];
                $orderInfo = $storeOrderService->getOne(['id' => $v['relation_id']]);
                if (in_array($queueType[$v['type']], [7, 8, 9])){
                    $v['delivery_name'] = $orderInfo ? $orderInfo['delivery_name'] : "";
                    $v['delivery_id'] = $orderInfo ? $orderInfo['delivery_id'] : "";
                }
                if ($queueType[$v['type']] == 10) {
                    $v['fictitious_content'] = $orderInfo ? $orderInfo['fictitious_content'] : "";
                }

            }
        }
        return $list;
    }

    /**获取某个队列的数据缓存
     * @param $bindingId
     * @param $type
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getCacheOidList($bindingId, $type)
    {
        return $this->dao->getCacheOidList($bindingId, $type);
    }
}

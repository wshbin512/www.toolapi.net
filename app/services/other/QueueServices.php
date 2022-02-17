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


use app\dao\other\QueueDao;
use app\services\BaseServices;
use app\services\order\StoreOrderServices;
use app\services\product\product\StoreCategoryServices;
use app\services\product\product\StoreProductServices;
use app\services\product\sku\StoreProductRuleServices;
use app\services\user\UserGroupServices;
use app\services\user\UserLabelServices;
use app\services\user\UserServices;
use crmeb\exceptions\AdminException;
use crmeb\services\CacheService;
use crmeb\utils\Queue;
use think\exception\ValidateException;
use think\facade\Db;

/**
 * Class QueueServices
 * @package app\services\other
 */
class QueueServices extends BaseServices
{
    const BATCH_USER_COUPON_KEY = "DrivingSendCoupon-ADMIN";
    const BATCH_USER_GROUP_KEY = "DrivingUserGroup-ADMIN";
    const BATCH_USER_LABEL_KEY = "DrivingUserLabel-ADMIN";
    const BATCH_PRODUCT_UNSHOW_KEY = "DrivingProductUnshow-ADMIN";
    const BATCH_PRODUCT_RULE_KEY = "DrivingProductRule-ADMIN";
    const BATCH_ORDER_DEL_KEY = "DrivingOrderDel-ADMIN";
    public static $_queueType = [
        1 => "批量发放用户优惠券",
        2 => "批量设置用户分组",
        3 => "批量设置用户标签",
        4 => "批量下架商品",
        5 => "批量删除商品规格",
        6 => "批量删除订单",
        7 => "批量手动发货",
        8 => "批量打印电子面单",
        9 => "批量配送",
        10 => "批量虚拟发货",
    ];
    const QUEUE_AND_CACHE_TYPE = [
        7 => 3,
        8 => 4,
        9 => 5,
        10 => 6,
    ];

    public function __construct(QueueDao $dao)
    {
        $this->dao = $dao;
    }

    /**
     * 获取任务列表
     * @param array $where
     */
    public function getList(array $where = [])
    {
        /** @var QueueServices $queueService */
        $queueService = app()->make(QueueServices::class);
        [$page, $limit] = $this->getPageValue();
        $list = $this->dao->getList($where, $page, $limit);
        if ($list) {
            foreach ($list as &$v) {
                $v['add_time'] = date('Y-m-d H:i:s', $v['add_time']);
                $v['finish_time'] = $v['finish_time'] ? date('Y-m-d H:i:s', $v['finish_time']) : "";
                $v['first_time'] = $v['first_time'] ? date('Y-m-d H:i:s', $v['first_time']) : "";
                $v['again_time'] = $v['again_time'] ? date('Y-m-d H:i:s', $v['again_time']) : "";
                switch ($v['status']) {
                    case 0:
                        $v['status_cn'] = "未处理";
                        break;
                    case 1:
                        $v['status_cn'] = "正在处理";
                        break;
                    case 2:
                        $v['status_cn'] = "完成";
                        break;
                    case 3:
                        $v['status_cn'] = "失败";
                        break;
                }
                switch ($v['type']) {//是否展示查看和下载
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                        $v['is_show_log'] = false;
                        break;
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                        $v['is_show_log'] = true;
                        $v['is_error_button'] = $v['status'] == 2 ? true : false;
                        break;
                }
                $v['type_cn'] = self::$_queueType[$v['type']];
                $v['cache_type'] = isset($queueService::QUEUE_AND_CACHE_TYPE[$v['type']]) ? $queueService::QUEUE_AND_CACHE_TYPE[$v['type']] : 0;
                $v['success_num'] = bcsub($v['total_num'], $v['surplus_num'], 0);
                //是否显示停止按钮
                $v['is_stop_button'] = $v['status'] == 1 ? true : false;
            }
        }
        $count = $this->dao->count($where);
        return compact('list', 'count');
    }

    /** 将要执行的任务存入集合
     * @param array $where
     * @param string $field
     * @param array $data
     * @param int $type
     * @return mixed
     */
    public function dataAddRedis(array $where = [], $field = "*", array $data = [], int $type, $other = false)
    {
        /** @var UserServices $userService */
        $userService = app()->make(UserServices::class);
        /** @var StoreProductServices $productService */
        $productService = app()->make(StoreProductServices::class);
        /** @var StoreProductRuleServices $productRuleService */
        $productRuleService = app()->make(StoreProductRuleServices::class);
        /** @var StoreOrderServices $orderService */
        $orderService = app()->make(StoreOrderServices::class);
        /** @var QueueAuxiliaryServices $queueA */
        if (!$type) throw new ValidateException('缺少执行任务类型');
        switch ($type) {
            case 1:
                $redisKey = self::BATCH_USER_COUPON_KEY;
                $res = $userService->userAddRedis($where, $field, $data, $redisKey, $type);
                $queueName = "批量发放用户优惠券";
                $source = "admin";
                if ($res) {
                    return $this->addQueueList($queueName, $res, $type, $redisKey, $source);
                }
                break;
            case 2:
                /** @var UserGroupServices $userGroup */
                $userGroup = app()->make(UserGroupServices::class);
                if (!$userGroup->getGroup($other)) {
                    throw new AdminException('该分组不存在');
                }
                $redisKey = self::BATCH_USER_GROUP_KEY;
                $res = $userService->userAddRedis($where, $field, $data, $redisKey, $type);
                $queueName = "批量设置用户分组";
                $source = "admin";
                if ($res) {
                    return $this->addQueueList($queueName, $res, $type, $redisKey, $source);
                }
                break;
            case 3:
                foreach ($other as $id) {
                    if (!app()->make(UserLabelServices::class)->getLable((int)$id)) {
                        throw new AdminException('有标签不存在或被删除');
                    }
                }
                $redisKey = self::BATCH_USER_LABEL_KEY;
                $res = $userService->userAddRedis($where, $field, $data, $redisKey, $type);
                $queueName = "批量设置用户标签";
                $source = "admin";
                if ($res) {
                    return $this->addQueueList($queueName, $res, $type, $redisKey, $source);
                }
                break;
            case 4:
                $redisKey = self::BATCH_PRODUCT_UNSHOW_KEY;
                $res = $productService->productAddRedis($where, $field, $data, $redisKey, $type);
                $queueName = "批量上下架商品";
                $source = "admin";
                if ($res) {
                    return $this->addQueueList($queueName, $res, $type, $redisKey, $source);
                }
                break;
            case 5:
                $redisKey = self::BATCH_PRODUCT_RULE_KEY;
                $res = $productRuleService->productRuleAddRedis($where, $field, $data, $redisKey, $type);
                $queueName = "批量删除商品规格";
                $source = "admin";
                if ($res) {
                    return $this->addQueueList($queueName, $res, $type, $redisKey, $source);
                }
                break;
            case 6:
                $redisKey = self::BATCH_ORDER_DEL_KEY;
                $res = $orderService->orderDelAddRedis($where, $field, $data, $redisKey, $type);
                $queueName = "批量删除订单";
                $source = "admin";
                if ($res) {
                    return $this->addQueueList($queueName, $res, $type, $redisKey, $source);
                }
                break;
            case 7:
                $queueName = "批量手动发货";
                $source = "admin";
                $cacheType = 3;
                $data = $orderService->getOrderDumpData($where, $field, $data, $type, $cacheType);
                return $orderService->orderBatchCache($data, $type, $cacheType, $queueName, $source);
            case 8:
                $queueName = "批量打印电子面单";
                $source = "admin";
                $cacheType = 4;
                $data = $orderService->getOrderDumpData($where, $field, $data, $type, $cacheType);
                return $orderService->orderBatchCache($data, $type, $cacheType, $queueName, $source);
            case 9:
                $queueName = "批量配送";
                $source = "admin";
                $cacheType = 5;
                $data = $orderService->getOrderDumpData($where, $field, $data, $type, $cacheType);
                return $orderService->orderBatchCache($data, $type, $cacheType, $queueName, $source);
            case 10:
                $queueName = "批量虚拟发货";
                $source = "admin";
                $cacheType = 6;
                $data = $orderService->getOrderDumpData($where, $field, $data, $type, $cacheType);
                return $orderService->orderBatchCache($data, $type, $cacheType, $queueName, $source);
        }

    }

    /**加入队列数据表
     * @param string $queueName
     * @param int $queueDataNum
     * @param int $type
     * @param string $redisKey
     * @param string $source
     * @return mixed
     */
    public function addQueueList(string $queueName, int $queueDataNum, int $type, string $redisKey, string $source = "admin")
    {
        $add = [
            'type' => $type,
            'source' => $source,
            'execute_key' => $redisKey ? $redisKey : "",
            'title' => $queueName,
            'status' => 0,
            'surplus_num' => $queueDataNum,
            'total_num' => $queueDataNum,
            'add_time' => time(),
        ];
        return $this->dao->addQueueList($add);
    }


    /**获取队列详情
     * @param array $where
     * @return array|bool|\think\Model|null
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getQueueOne(array $where)
    {
        if (!$where) return false;
        return $this->dao->getQueueOne($where);
    }

    /**数据修改
     * @param array $where
     * @param array $update
     * @return bool|mixed
     */
    public function saveQueue(array $where, array $update)
    {
        if (!$where || !$update) return false;
        return $this->dao->update($where, $update);
    }


    /**将队列置为正在执行状态
     * @param $queueInValue
     * @param $queueId
     * @return bool|mixed
     */
    public function addQueueDoing($queueInValue, $queueId, bool $is_again = false)
    {
        $saveData['queue_in_value'] = is_array($queueInValue) ? json_encode($queueInValue) : $queueInValue;
        $saveData['status'] = 1;
        if ($is_again) {
            $saveData['again_time'] = time();
        } else {
            $saveData['first_time'] = time();
        }

        return $this->saveQueue(['id' => $queueId], $saveData);
    }

    /** 任务执行失败，修改队列状态
     * @param $redisKey
     * @param $queueId
     */
    public function addQueueFail($queueId, $redisKey)
    {
        /** @var CacheService $cacheService */
        $cacheService = app()->make(CacheService::class);
        /** @var QueueAuxiliaryServices $auxiliaryService */
        $auxiliaryService = app()->make(QueueAuxiliaryServices::class);
        if ($redisKey) {
            $surplusNum = $cacheService->sCard($redisKey);
        } else {
            $surplusNum = $auxiliaryService->getCountOrder(['binding_id' => $queueId, 'type' => 3, 'status' => 0]);
        }
        return $this->saveQueue(['id' => $queueId], ['status' => 3, 'surplus_num' => $surplusNum]);
    }

    /**任务执行成功
     * @param $queueId
     * @return bool|mixed
     */
    public function addQueueSuccess($queueId, $type, array $other)
    {
        if (!$type) return false;
        switch ($type) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                $update = [
                    'status' => 2,
                    'finish_time' => time(),
                    'surplus_num' => 0
                ];
                return $this->saveQueue(['id' => $queueId], $update);
            case 7:
            case 8:
            case 9:
            case 10:
                /** @var QueueAuxiliaryServices $auxiliaryService */
                $auxiliaryService = app()->make(QueueAuxiliaryServices::class);
                $queueInfo = $this->dao->get($queueId);
                if (!$queueInfo) return false;
                //看是否全部执行成功
                if (isset($other['bcDec']) && $other['bcDec'] && $queueInfo['surplus_num'] > 0) $this->dao->bcDec($queueId, 'surplus_num', 1);
                $queueInfo = $this->dao->get($queueId);
                if ($queueInfo['surplus_num'] == 0) return $this->saveQueue(['id' => $queueId], ['status' => 2, 'finish_time' => time(), 'surplus_num' => 0]);
                //是否执行失败
                $cacheNoDo = $auxiliaryService->getOrderCacheOne(['binding_id' => $queueId, 'type' => $other['cacheType'], 'relation_id' => $other['relation_id'], 'status' => [0, 2]]);
                if ($cacheNoDo && $queueInfo['surplus_num'] > 0) return $this->saveQueue(['id' => $queueId], ['status' => 3, 'finish_time' => time()]);
        }

    }

    /**将执行成功数据移除redis集合
     * @param array $data
     * @param $redisKey
     * @return bool
     */
    public function doSuccessSremRedis(array $data, $redisKey, $type, array $otherData = [])
    {
        /** @var CacheService $redis */
        $redis = app()->make(CacheService::class);
        /** @var QueueAuxiliaryServices $auxiliaryService */
        $auxiliaryService = app()->make(QueueAuxiliaryServices::class);
        switch ($type) {
            case 1://在redis缓存集合的从集合删除
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                if ($data && $redisKey) {
                    foreach ($data as $k => $v) {
                        $redis->sRem($redisKey, $v);
                    }
                }
                break;
            case 7:
            case 8:
            case 9:
            case 10:
                $where['relation_id'] = $data['order_id'];
                $where['binding_id'] = $redisKey;
                $where['type'] = self::QUEUE_AND_CACHE_TYPE[$type];
                $getOne = $auxiliaryService->getOrderCacheOne($where);
                if (!$getOne) return false;
                $other = json_decode($getOne['other'], true);
                if (isset($otherData['delivery_status'])) $other['delivery_status'] = $otherData['delivery_status'];
                if (isset($otherData['wx_message'])) $other['wx_message'] = $otherData['wx_message'];
                if (isset($otherData['phone_message'])) $other['phone_message'] = $otherData['phone_message'];
                if (isset($otherData['error_info'])) $other['error_info'] = $otherData['error_info'];
                $updateData['status'] = isset($otherData['status']) ? $otherData['status'] : 0;
                $updateData['other'] = json_encode($other);
                $auxiliaryService->updateOrderStatus($where, $updateData);
                break;
        }
        return true;
    }

    /**队列再次执行
     * @param $queueId
     * @param $queueType
     * @return bool
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function againDoQueue($queueId, $queueType)
    {
        /** @var QueueAuxiliaryServices $auxiliaryService */
        $auxiliaryService = app()->make(QueueAuxiliaryServices::class);
        /** @var StoreOrderServices $storeOrderService */
        $storeOrderService = app()->make(StoreOrderServices::class);
        $queueInfo = $this->getQueueOne(['id' => $queueId, 'type' => $queueType]);
        if (!$queueInfo) throw new AdminException('队列任务不存在');
        if ($queueInfo['status'] == 1) throw new AdminException('此批量任务正在执行当中ing');
        //先进行数据修复
        $this->repairWrongQueue($queueInfo);
        $log = $auxiliaryService->getOrderCacheOne(['binding_id' => $queueInfo['id'], 'status' => [0, 2]]);
        if (($queueInfo['status'] == 2 && $log) || ($queueInfo['status'] != 2 && !$log)) throw new AdminException('任务数据异常，请选择数据修复操作');
        $queueInValue = $this->getQueueInValue($queueInfo);
        switch ($queueType) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                Queue::instance()->job(\crmeb\jobs\BatchHandleJob::class)->data($queueInValue, $queueType)->setQueueName("BATCH-CRMEB")->push();
                break;
            case 7:
            case 8:
            case 9:
            case 10:
                $storeOrderService->adminQueueOrderDo($queueInValue, true);
                break;
        }
        return true;
    }

    /**清除异常队列
     * @param $queueId
     * @param $queueType
     * @return bool
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function delWrongQueue($queueId, $queueType)
    {
        /** @var QueueAuxiliaryServices $auxiliaryService */
        $auxiliaryService = app()->make(QueueAuxiliaryServices::class);
        /** @var CacheService $redis */
        $redis = app()->make(CacheService::class);
        $queueInfo = $this->getQueueOne(['id' => $queueId, 'type' => $queueType]);
        if (!$queueInfo) throw new AdminException('队列任务不存在');
        Db::startTrans();
        try {
            switch ($queueInfo['type']) {
                case 1://批量发放优惠券
                case 2://批量设置用户分组
                case 3://批量设置用户标签
                case 4://批量上下架商品
                case 5://批量删除商品规格
                case 6://批量删除用户已删除订单
                    if (!$queueInfo['execute_key']) {
                        $this->dao->update(['id' => $queueId], ['is_del' => 1, 'status' => 4]);
                    } else {
                        $redis->del($queueInfo['execute_key']);
                        $this->dao->update(['id' => $queueId], ['is_del' => 1, 'status' => 4]);
                    }
                    break;
                case 7://手动发货
                case 8://电子面单发货
                case 9://批量配送
                case 10://批量虚拟发货
                    $cacheType = self::QUEUE_AND_CACHE_TYPE[$queueType];
                    $cacheCount = $auxiliaryService->getCountOrder(['binding_id' => $queueId, 'type' => $cacheType, 'status' => [0, 1, 2]]);
                    if (!$cacheCount) return $this->dao->update(['id' => $queueId], ['is_del' => 1, 'status' => 4]);
            }
            Db::commit();
            return false;
        } catch (\Exception $e) {
            Db::rollback();
            return false;
        }
    }

    /**修复异常任务
     * @param $queueInfo
     * @return bool|mixed
     */
    public function repairWrongQueue($queueInfo)
    {
        /** @var QueueAuxiliaryServices $auxiliaryService */
        $auxiliaryService = app()->make(QueueAuxiliaryServices::class);
        /** @var CacheService $redis */
        $redis = app()->make(CacheService::class);
        if (!$queueInfo) throw new AdminException('任务不存在');
        try {
            switch ($queueInfo['type']) {
                case 1://批量发放优惠券
                case 2://批量设置用户分组
                case 3://批量设置用户标签
                case 4://批量上下架商品
                case 5://批量删除商品规格
                case 6://批量删除用户已删除订单
                    if (!$queueInfo['execute_key']) throw new AdminException('缓存key缺失，请清除数据');
                    $cacheNum = $redis->sCard($queueInfo['execute_key']);
                    if ($cacheNum != $queueInfo['surplus_num']) return $this->dao->update(['id' => $queueInfo['id']], ['surplus_num' => $cacheNum]);
                    break;
                case 7://手动发货
                case 8://电子面单发货
                case 9://批量配送
                case 10://批量虚拟发货
                    $cacheType = self::QUEUE_AND_CACHE_TYPE[$queueInfo['type']];
                    // $cacheNoNum = $auxiliaryService->getCountOrder(['binding_id' => $queueId, 'type' => $cacheType, 'status' => [0]]);
                    $cacheFailAndNoNum = $auxiliaryService->getCountOrder(['binding_id' => $queueInfo['id'], 'type' => $cacheType, 'status' => [0, 2]]);
                    $cacheTotalNum = $auxiliaryService->getCountOrder(['binding_id' => $queueInfo['id'], 'type' => $cacheType, 'status' => [0, 1, 2]]);
                    //如果任务已经执行完毕，但是记录却存在未执行数据，要进行修复，让其重新执行
                    if ($cacheFailAndNoNum && $queueInfo['status'] == 2) return $this->dao->update(['id' => $queueInfo['id']], ['status' => 3, 'surplus_num' => $cacheFailAndNoNum, 'total_num' => $cacheTotalNum]);
                    //如果执行失败，记录全部执行成功，那么进行修复
                    if (!$cacheFailAndNoNum && $queueInfo['status'] != 2) return $this->dao->update(['id' => $queueInfo['id']], ['status' => 2, 'surplus_num' => 0, 'total_num' => $cacheTotalNum]);
            }
            return true;
        } catch (\Exception $e) {
            throw new AdminException($e->getMessage());
        }
    }

    /**停止队列
     * @param $queueId
     * @return bool
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function stopWrongQueue($queueId)
    {
        $queueInfo = $this->getQueueOne(['id' => $queueId]);
        if (!$queueInfo) throw new AdminException('任务不存在');
        try {
            switch ($queueInfo['type']) {
                case 1://批量发放优惠券
                case 2://批量设置用户分组
                case 3://批量设置用户标签
                case 4://批量上下架商品
                case 5://批量删除商品规格
                case 6://批量删除用户已删除订单
                    $this->dao->update(['id' => $queueId], ['status' => 3]);
                    break;
                case 7://手动发货
                case 8://电子面单发货
                case 9://批量配送
                case 10://批量虚拟发货
                    $this->dao->update(['id' => $queueId], ['status' => 3]);
                    break;

            }

            return true;
        } catch (\Exception $e) {
            throw new AdminException("任务停止失败");
        }
    }

    /**获取队列执行参数
     * @param $queueInfo
     * @return mixed
     */
    public function getQueueInValue($queueInfo)
    {
        if (!$queueInfo) throw new AdminException('对列详情缺失');
        switch ($queueInfo['type']) {
            case 1://批量发放优惠券
                if (!$queueInfo['queue_in_value']) throw new AdminException('队列关键数据缺失，请清除此任务及异常数据');
                return json_decode($queueInfo['queue_in_value'], true);
            case 2://批量设置用户分组
                if (!$queueInfo['queue_in_value']) throw new AdminException('队列关键数据缺失，请清除此任务及异常数据');
                return $queueInfo['queue_in_value'];
            case 3://批量设置用户标签
                if (!$queueInfo['queue_in_value']) throw new AdminException('队列关键数据缺失，请清除此任务及异常数据');
                return $queueInfo['queue_in_value'];
            case 4://批量上下架商品
                return $queueInfo['queue_in_value'];
            case 5://批量删除商品规格
                return $queueInfo['queue_in_value'];
            case 6://批量删除用户已删除订单
                return $queueInfo['queue_in_value'];
            case 7://手动发货
            case 8://电子面单发货
            case 9://批量配送
            case 10://批量虚拟发货
                if (!$queueInfo['queue_in_value']) throw new AdminException('队列关键数据缺失，请清除此任务及异常数据');
                return json_decode($queueInfo['queue_in_value'], true);
        }
    }

    /**添加任务前校验同类型任务状态
     * @param $redisKey
     * @param $queueType
     * @return bool
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function isAddQueueRedisCheck($redisKey, $queueType)
    {
        /** @var CacheService $cacheService */
        $cacheService = app()->make(CacheService::class);
        /** @var QueueServices $queueService */
        $queueService = app()->make(QueueServices::class);
        $redisNum = $cacheService->sCard($redisKey);
        $queueInfo = $queueService->getQueueOne(['type' => $queueType, 'status' => [0, 1, 3]]);
        if ((!$queueInfo && $redisNum) || ($queueInfo && !$redisNum)) throw new AdminException('任务数据异常，前往任务列表清除异常数据');
        if ($redisNum && $queueInfo['status'] == 0) throw new AdminException('上次批量任务尚未执行，请前往任务列表手动执行');
        if ($redisNum && $queueInfo['status'] == 3) throw new AdminException('上次批量任务执行失败，请前往任务列表手动执行');
        if ($redisNum && $queueInfo['status'] == 1) throw new AdminException('有正在执行中的任务，请耐心等待，若长时间无反应，前往任务列表修复异常数据，再手动执行');
        return true;
    }

    /** 获得队列数据
     * @param $redisKey
     * @param $queueType
     * @param array $dataIds
     * @param array $where
     * @param string $filed
     * @return int
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getQueueRedisData($redisKey, $queueType, array $dataIds, array $where, $filed = "*")
    {
        /** @var CacheService $redis */
        $redis = app()->make(CacheService::class);
        /** @var UserServices $userService */
        $userService = app()->make(UserServices::class);
        /** @var StoreProductRuleServices $productRuleService */
        $productRuleService = app()->make(StoreProductRuleServices::class);
        /** @var StoreProductServices $productService */
        $productService = app()->make(StoreProductServices::class);
        /** @var StoreOrderServices $orderService */
        $orderService = app()->make(StoreOrderServices::class);
        if ($dataIds) {
            foreach ($dataIds as $v) {
                $redis->sAdd($redisKey, $v);
            }
        } else {
            if ($where) {
                foreach ($where as $k => $v) {
                    if (!$v) unset($where[$k]);
                }
            }
            switch ($queueType) {
                case 1://批量发放优惠券
                case 2://批量设置用户分组
                case 3://批量设置用户标签
                    $dataInfo = $userService->getUserInfoList($where, $filed);
                    if ($dataInfo) {
                        foreach ($dataInfo as $k => $v) {
                            $redis->sAdd($redisKey, $v['uid']);
                        }
                    }
                    break;
                case 4://批量上下架商品
                    $cateIds = [];
                    if (isset($where['cate_id']) && $where['cate_id']) {
                        /** @var StoreCategoryServices $storeCategory */
                        $storeCategory = app()->make(StoreCategoryServices::class);
                        $cateIds = $storeCategory->getColumn(['pid' => $where['cate_id']], 'id');
                    }
                    if ($cateIds) {
                        $cateIds[] = $where['cate_id'];
                        $where['cate_id'] = $cateIds;
                    }
                    $dataInfo = $productService->getProductListByWhere($where, $filed);
                    if ($dataInfo) {
                        foreach ($dataInfo as $k => $v) {
                            $redis->sAdd($redisKey, $v['id']);
                        }
                    }
                    break;
                case 5://批量删除商品规格
                    $dataInfo = $productRuleService->getProductRuleList($where, $filed);
                    if ($dataInfo) {
                        foreach ($dataInfo as $k => $v) {
                            $redis->sAdd($redisKey, $v['id']);
                        }
                    }
                    break;
                case 6://批量删除用户已删除订单
                    $dataInfo = $orderService->getOrderListByWhere($where, $filed);
                    if ($dataInfo) {
                        foreach ($dataInfo as $k => $v) {
                            $redis->sAdd($redisKey, $v['id']);
                        }
                    }
                    break;
            }

        }
        return $redis->sCard($redisKey);
    }
}

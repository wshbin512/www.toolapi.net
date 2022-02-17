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
declare (strict_types=1);

namespace app\services\user;

use app\services\BaseServices;
use app\dao\user\UserRechargeDao;
use app\services\pay\RechargeServices;
use app\services\system\config\SystemGroupDataServices;
use app\services\wechat\WechatUserServices;
use crmeb\exceptions\AdminException;
use crmeb\jobs\RoutineTemplateJob;
use crmeb\jobs\WechatTemplateJob as TemplateJob;
use crmeb\utils\Queue;
use crmeb\services\{
    FormBuilder as Form, MiniProgramService, WechatService
};
use think\exception\ValidateException;
use think\facade\Route as Url;
use function Sodium\compare;

/**
 *
 * Class UserRechargeServices
 * @package app\services\user
 * @method be($map, string $field = '') 查询一条数据是否存在
 * @method getDistinctCount(array $where, $field, ?bool $search = true)
 * @method getTrendData($time, $type, $timeType)
 */
class UserRechargeServices extends BaseServices
{

    /**
     * UserRechargeServices constructor.
     * @param UserRechargeDao $dao
     */
    public function __construct(UserRechargeDao $dao)
    {
        $this->dao = $dao;
    }

    /**
     * 获取单条数据
     * @param int $id
     * @param array $field
     */
    public function getRecharge(int $id, array $field = [])
    {
        return $this->dao->get($id, $field);
    }

    /**
     * 获取统计数据
     * @param array $where
     * @param string $field
     * @return float
     */
    public function getRechargeSum(array $where, string $field = '')
    {
        $whereData = [];
        if (isset($where['data'])) {
            $whereData['time'] = $where['data'];
        }
        if (isset($where['paid']) && $where['paid'] != '') {
            $whereData['paid'] = $where['paid'];
        }
        if (isset($where['nickname']) && $where['nickname']) {
            $whereData['like'] = $where['nickname'];
        }
        if (isset($where['recharge_type']) && $where['recharge_type']) {
            $whereData['recharge_type'] = $where['recharge_type'];
        }
        return $this->dao->getWhereSumField($whereData, $field);
    }

    /**
     * 获取充值列表
     * @param array $where
     * @param string $field
     * @return array
     */
    public function getRechargeList(array $where, string $field = '*', $is_page = true)
    {
        $whereData = [];
        if (isset($where['data'])) {
            $whereData['time'] = $where['data'];
        }
        if (isset($where['paid']) && $where['paid'] != '') {
            $whereData['paid'] = $where['paid'];
        }
        if (isset($where['nickname']) && $where['nickname']) {
            $whereData['like'] = $where['nickname'];
        }
        [$page, $limit] = $this->getPageValue($is_page);
        $list = $this->dao->getList($whereData, $field, $page, $limit);
        $count = $this->dao->count($whereData);

        foreach ($list as &$item) {
            switch ($item['recharge_type']) {
                case 'routine':
                    $item['_recharge_type'] = '小程序充值';
                    break;
                case 'weixin':
                    $item['_recharge_type'] = '公众号充值';
                    break;
                default:
                    $item['_recharge_type'] = '其他充值';
                    break;
            }
            $item['_pay_time'] = $item['pay_time'] ? date('Y-m-d H:i:s', $item['pay_time']) : '暂无';
            $item['_add_time'] = $item['add_time'] ? date('Y-m-d H:i:s', $item['add_time']) : '暂无';
            $item['paid_type'] = $item['paid'] ? '已支付' : '未支付';
            unset($item['user']);
        }
        return compact('list', 'count');
    }

    /**
     * 获取用户充值数据
     * @return array
     */
    public function user_recharge(array $where)
    {
        $data = [];
        $data['sumPrice'] = $this->getRechargeSum($where, 'price');
        $data['sumRefundPrice'] = $this->getRechargeSum($where, 'refund_price');
        $where['recharge_type'] = 'routine';
        $data['sumRoutinePrice'] = $this->getRechargeSum($where, 'price');
        $where['recharge_type'] = 'weixin';
        $data['sumWeixinPrice'] = $this->getRechargeSum($where, 'price');
        return [
            [
                'name' => '充值总金额',
                'field' => '元',
                'count' => $data['sumPrice'],
                'className' => 'logo-yen',
                'col' => 6,
            ],
            [
                'name' => '充值退款金额',
                'field' => '元',
                'count' => $data['sumRefundPrice'],
                'className' => 'logo-usd',
                'col' => 6,
            ],
            [
                'name' => '小程序充值金额',
                'field' => '元',
                'count' => $data['sumRoutinePrice'],
                'className' => 'logo-bitcoin',
                'col' => 6,
            ],
            [
                'name' => '公众号充值金额',
                'field' => '元',
                'count' => $data['sumWeixinPrice'],
                'className' => 'ios-bicycle',
                'col' => 6,
            ],
        ];
    }

    /**退款表单
     * @param $id
     * @return mixed|void
     */
    public function refund_edit(int $id)
    {
        $UserRecharge = $this->getRecharge($id);
        if (!$UserRecharge) {
            throw new AdminException('数据不存在!');
        }
        if ($UserRecharge['paid'] != 1) {
            throw new AdminException('订单未支付');
        }
        if ($UserRecharge['price'] == $UserRecharge['refund_price']) {
            throw new AdminException('已退完支付金额!不能再退款了');
        }
        if ($UserRecharge['recharge_type'] == 'balance') {
            throw new AdminException('佣金转入余额，不能退款');
        }
        $f = array();
        $f[] = Form::input('order_id', '退款单号', $UserRecharge->getData('order_id'))->disabled(true);
        $f[] = Form::radio('refund_price', '状态', 1)->options([['label' => '本金+赠送', 'value' => 1], ['label' => '仅本金', 'value' => 0]]);
//        $f[] = Form::number('refund_price', '退款金额', (float)$UserRecharge->getData('price'))->precision(2)->min(0)->max($UserRecharge->getData('price'));
        return create_form('编辑', $f, Url::buildUrl('/finance/recharge/' . $id), 'PUT');
    }

    /**
     * 退款操作
     * @param int $id
     * @param $refund_price
     * @return mixed
     */
    public function refund_update(int $id, string $refund_price)
    {
        $UserRecharge = $this->getRecharge($id);
        if (!$UserRecharge) {
            throw new AdminException('数据不存在!');
        }
        if ($UserRecharge['price'] == $UserRecharge['refund_price']) {
            throw new AdminException('已退完支付金额!不能再退款了');
        }
        if ($UserRecharge['recharge_type'] == 'balance') {
            throw new AdminException('佣金转入余额，不能退款');
        }
//        $data['refund_price'] = bcadd($refund_price, $UserRecharge['refund_price'], 2);
        $data['refund_price'] = $UserRecharge['price'];
//        $bj = bccomp((string)$UserRecharge['price'], (string)$data['refund_price'], 2);
//        if ($bj < 0) {
//            throw new AdminException('退款金额大于支付金额，请修改退款金额');
//        }
        $refund_data['pay_price'] = $UserRecharge['price'];
        $refund_data['refund_price'] = $UserRecharge['price'];
//        $refund_data['refund_account']='REFUND_SOURCE_RECHARGE_FUNDS';
        if ($refund_price == 1) {
            $number = bcadd($UserRecharge['price'], $UserRecharge['give_price'], 2);
        } else {
            $number = $UserRecharge['price'];
        }

        try {
            $recharge_type = $UserRecharge['recharge_type'];
            if ($recharge_type == 'weixin') {
                WechatService::payOrderRefund($UserRecharge['order_id'], $refund_data);
            } else {
                MiniProgramService::payOrderRefund($UserRecharge['order_id'], $refund_data);
            }
        } catch (\Exception $e) {
            throw new AdminException($e->getMessage());
        }
        if (!$this->dao->update($id, $data)) {
            throw new AdminException('修改提现数据失败');
        }
        /** @var UserServices $userServices */
        $userServices = app()->make(UserServices::class);
        $userInfo = $userServices->getUserInfo($UserRecharge['uid']);
        $userServices->cutNowMoney($UserRecharge['uid'], $userInfo['now_money'], $number);
        /** @var WechatUserServices $wechatServices */
        $wechatServices = app()->make(WechatUserServices::class);
        switch (strtolower($UserRecharge['recharge_type'])) {
            case 'weixin':
                $openid = $wechatServices->uidToOpenid($UserRecharge['uid'], 'wechat');
                Queue::instance()->do('sendRechargeRefundStatus')->job(TemplateJob::class)->data($openid, $data, $UserRecharge)->push();
                break;
            case 'routine':
//                $openid = $wechatServices->uidToOpenid($UserRecharge['uid'], 'routine');
//                Queue::instance()->do('sendOrderRefundSuccess')->job(RoutineTemplateJob::class)->data($openid, $UserRecharge, $refund_price)->push();
                break;
        }
        $billData = ['title' => '系统退款', 'number' => $number, 'link_id' => $id, 'balance' => $userInfo['now_money'], 'mark' => '退款给用户' . $UserRecharge['price'] . '元'];
        /** @var UserBillServices $userBillService */
        $userBillService = app()->make(UserBillServices::class);
        $userBillService->expendNowMoney($UserRecharge['uid'], 'user_recharge_refund', $billData);
        return true;
    }

    /**
     * 审核表单
     * @param $id
     * @return mixed|void
     */
    public function audit_edit(int $id)
    {
        $UserRecharge = $this->getRecharge($id);
        if (!$UserRecharge) {
            throw new AdminException('数据不存在!');
        }
        if ($UserRecharge['price'] == $UserRecharge['refund_price']) {
            throw new AdminException('已退完支付金额!不能再退款了');
        }
        if ($UserRecharge['recharge_type'] == 'balance') {
            throw new AdminException('佣金转入余额，不能退款');
        }
        $f = array();
        $f[] = Form::input('change_url', '充值地址', $UserRecharge->getData('change_url'))->disabled(true);
        $f[] = Form::input('order_id', '充值单号', $UserRecharge->getData('order_id'))->disabled(true);
        $f[] = Form::number('price', '充值金额', $UserRecharge->getData('price'))->disabled(true);
        return create_form('充值审核', $f, Url::buildUrl('/finance/audit/' . $id), 'PUT');
    }

    /**
     * 审核操作
     * @param int $id
     * @param $refund_price
     * @return mixed
     */
    public function audit_update(int $id, string $refund_price)
    {
        $UserRecharge = $this->getRecharge($id);
        $res = $this->rechargeSuccess($UserRecharge['order_id']);
        if ($res) {
            return true;
        } else {
            throw new AdminException('未知错误');
        }
    }

    /**
     * 删除
     * @param int $id
     * @return bool
     */
    public function delRecharge(int $id)
    {
        $rechargInfo = $this->getRecharge($id);
        if (!$rechargInfo) throw new AdminException('订单未找到');
        if ($rechargInfo->paid) {
            throw new AdminException('已支付的订单记录无法删除');
        }
        if ($this->dao->delete($id))
            return true;
        else
            throw new AdminException('删除失败');
    }

    /**
     * 生成充值订单号
     * @return bool|string
     */
    public function getOrderId()
    {
        return 'wx' . date('YmdHis', time()) . substr(implode(NULL, array_map('ord', str_split(substr(uniqid(), 7, 13), 1))), 0, 8);
    }

    /**
     * 导入佣金到余额
     * @param int $uid
     * @param $price
     * @return bool
     */
    public function importNowMoney(int $uid, $price)
    {
        /** @var UserServices $userServices */
        $userServices = app()->make(UserServices::class);
        $user = $userServices->getUserInfo($uid);
        if (!$user) {
            throw new ValidateException('数据不存在');
        }
        /** @var UserBrokerageFrozenServices $frozenPrices */
        $frozenPrices = app()->make(UserBrokerageFrozenServices::class);
        $broken_commission = array_bc_sum($frozenPrices->getUserFrozenPrice($uid));
        $commissionCount = bcsub($user['brokerage_price'], $broken_commission, 2);
        if ($price > $commissionCount) {
            throw new ValidateException('转入金额不能大于可提现佣金！');
        }
        $edit_data = [];
        $edit_data['now_money'] = bcadd((string)$user['now_money'], (string)$price, 2);
        $edit_data['brokerage_price'] = $user['brokerage_price'] > $price ? bcsub((string)$user['brokerage_price'], (string)$price, 2) : 0;
        if (!$userServices->update($uid, $edit_data, 'uid')) {
            throw new ValidateException('修改用户信息失败');
        }
        //写入充值记录
        $rechargeInfo = [
            'uid' => $uid,
            'order_id' => $this->getOrderId(),
            'recharge_type' => 'balance',
            'price' => $price,
            'give_price' => 0,
            'paid' => 1,
            'pay_time' => time(),
            'add_time' => time()
        ];
        if (!$re = $this->dao->save($rechargeInfo)) {
            throw new ValidateException('写入余额充值失败');
        }
        $bill_data = ['title' => '用户佣金转入余额', 'link_id' => $re['id'], 'number' => $price, 'balance' => bcadd((string)$user['now_money'], (string)$price, 2), 'mark' => '成功转入余额' . floatval($price) . '元'];
        /** @var UserBillServices $userBill */
        $userBill = app()->make(UserBillServices::class);
        //余额充值
        $userBill->incomeNowMoney($uid, 'recharge', $bill_data);

        //写入提现记录
        $extractInfo = [
            'uid' => $uid,
            'real_name' => $user['nickname'],
            'extract_type' => 'balance',
            'extract_price' => $price,
            'balance' => $user['brokerage_price'],
            'add_time' => time(),
            'status' => 1
        ];
        /** @var UserExtractServices $userExtract */
        $userExtract = app()->make(UserExtractServices::class);
        if (!$re = $userExtract->save($extractInfo)) {
            throw new ValidateException('写入佣金提现失败');
        }
        //佣金提现
        $userBill->income('brokerage_to_nowMoney', $uid, $price, $user['brokerage_price'], $re['id']);
        return true;
    }

    /**
     * 积分转零钱
     * @param int $uid
     * @param int $number
     * @return array
     * @throws \think\Exception
     */
    public function integralChange(int $uid, int $number)
    {
        /** @var UserServices $userServices */
        $userServices = app()->make(UserServices::class);
        $user = $userServices->getUserInfo($uid);
        if (!$user) {
            throw new ValidateException('数据不存在');
        }

        if($user['integral'] < $number){
            throw new ValidateException('你的积分不够');
        }

        $this->integralChangeTurnOut($user,$number);
        $this->integralChangeTurnInto($user,$number);

        return ['msg' => '转入零钱成功', 'data' => compact('user')];
    }

    /**
     * 零钱转入处理
     * @param $user
     * @param $mutualUser
     * @param $mutual_shopping
     * @return bool
     * @throws \think\Exception
     */
    public function integralChangeTurnInto($user, $number)
    {
        /** @var UserServices $userServices */
        $userServices = app()->make(UserServices::class);

        $proportion = (int)sys_config('integral_proportion', 1);
        $proportionBcdiv = $proportion / 100;
        $proportionBcmul = $proportionBcdiv * $number;

        $data['title'] = '积分转入零钱';
        $data['number'] = $proportionBcmul;
        $data['link_id'] = $user['uid'];
        $data['balance'] = $user['now_money'];
        $data['mark'] = '积分转入零钱' . floatval($proportionBcmul);

        /** @var UserBillServices $userBill */
        $userBill = app()->make(UserBillServices::class);
        $userBill->incomeNowMoney($user['uid'], 'now_money', $data);

        $now_money = bcadd((string)$user['now_money'], (string)$proportionBcmul, 2);
        if (!$userServices->update((int)$user['uid'], ['now_money' => $now_money], 'uid')) {
            throw new ValidateException('零钱转入失败');
        }
        return true;
    }

    /**
     * 积分转出处理
     * @param $user
     * @param $mutualUser
     * @param $mutual_shopping
     * @return bool
     * @throws \think\Exception
     */
    public function integralChangeTurnOut($user, $number)
    {
        /** @var UserServices $userServices */
        $userServices = app()->make(UserServices::class);
        /** @var UserBillServices $userBill */
        $userBill = app()->make(UserBillServices::class);

        $data['title'] = '积分转出';
        $data['number'] = $number;
        $data['link_id'] = $user['uid'];
        $data['balance'] = $user['integral'];
        $data['mark'] = '成功转出积分' . floatval($number);

        $userBill->expendIntegral($user['uid'], 'integral', $data);

        $integral = bcsub((string)$user['integral'], (string)$number, 2);
        if (!$userServices->update((int)$user['uid'], ['integral' => $integral], 'uid')) {
            throw new ValidateException('积分转出失败');
        }
        return true;
    }

    /**
     * 绿券转零钱
     * @param int $uid
     * @param int $number
     * @return array
     * @throws \think\Exception
     */
    public function greenCurrency(int $uid, int $number)
    {
        /** @var UserServices $userServices */
        $userServices = app()->make(UserServices::class);
        $user = $userServices->getUserInfo($uid);
        if (!$user) {
            throw new ValidateException('数据不存在');
        }

        if($user['coupon_green'] < $number){
            throw new ValidateException('你的绿券不够');
        }

        $this->greenCurrencyTurnOut($user,$number);
        $this->greenCurrencyTurnInto($user,$number);

        return ['msg' => '转入零钱成功', 'data' => compact('user')];
    }

    /**
     * 零钱转入处理
     * @param $user
     * @param $mutualUser
     * @param $mutual_shopping
     * @return bool
     * @throws \think\Exception
     */
    public function greenCurrencyTurnInto($user, $number)
    {
        /** @var UserServices $userServices */
        $userServices = app()->make(UserServices::class);

        $data['title'] = '绿券转入零钱';
        $data['number'] = $number;
        $data['link_id'] = $user['uid'];
        $data['balance'] = $user['now_money'];
        $data['mark'] = '绿券转入零钱' . floatval($number);

        /** @var UserBillServices $userBill */
        $userBill = app()->make(UserBillServices::class);
        $userBill->incomeNowMoney($user['uid'], 'now_money', $data);

        $now_money = bcadd((string)$user['now_money'], (string)$number, 2);
        if (!$userServices->update((int)$user['uid'], ['now_money' => $now_money], 'uid')) {
            throw new ValidateException('零钱转入失败');
        }
        return true;
    }

    /**
     * 绿券转出处理
     * @param $user
     * @param $mutualUser
     * @param $mutual_shopping
     * @return bool
     * @throws \think\Exception
     */
    public function greenCurrencyTurnOut($user, $number)
    {
        /** @var UserServices $userServices */
        $userServices = app()->make(UserServices::class);
        /** @var UserBillServices $userBill */
        $userBill = app()->make(UserBillServices::class);

        $data['title'] = '绿券转出';
        $data['number'] = $number;
        $data['link_id'] = $user['uid'];
        $data['balance'] = $user['coupon_green'];
        $data['mark'] = '成功转出绿券' . floatval($number);

        $userBill->expendGreen($user['uid'], 'coupon_green', $data);

        $coupon_green = bcsub((string)$user['coupon_green'], (string)$number, 2);
        if (!$userServices->update((int)$user['uid'], ['coupon_green' => $coupon_green], 'uid')) {
            throw new ValidateException('绿券转出失败');
        }
        return true;
    }

    /**
     * 红券转绿券
     * @param int $uid
     * @param int $number
     * @return array
     * @throws \think\Exception
     */
    public function turn(int $uid, int $number)
    {
        /** @var UserServices $userServices */
        $userServices = app()->make(UserServices::class);
        $user = $userServices->getUserInfo($uid);
        if (!$user) {
            throw new ValidateException('数据不存在');
        }

        if($user['coupon_red'] < $number){
            throw new ValidateException('你的红券不够');
        }

        if($user['quicken'] < $number){
            throw new ValidateException('你的加速分不够，本次只能转'.$user['quicken']);
        }

        $this->redTurnOut($user,$number);
        $this->greenTurnInto($user,$number);

        return ['msg' => '红券成功转入绿券', 'data' => compact('user')];
    }

    /**
     * 绿券转入处理
     * @param $user
     * @param $mutualUser
     * @param $mutual_shopping
     * @return bool
     * @throws \think\Exception
     */
    public function greenTurnInto($user, $number)
    {
        /** @var UserServices $userServices */
        $userServices = app()->make(UserServices::class);

        $data['title'] = '绿券转入';
        $data['number'] = $number;
        $data['link_id'] = $user['uid'];
        $data['balance'] = $user['coupon_green'];
        $data['mark'] = '成功转入绿券' . floatval($number);

        /** @var UserBillServices $userBill */
        $userBill = app()->make(UserBillServices::class);
        $userBill->incomeGreen($user['uid'], 'coupon_green', $data);

        $coupon_green = bcadd((string)$user['coupon_green'], (string)$number, 2);
        if (!$userServices->update((int)$user['uid'], ['coupon_green' => $coupon_green], 'uid')) {
            throw new ValidateException('绿券转入失败');
        }
        return true;
    }

    /**
     * 红券转出处理
     * @param $user
     * @param $mutualUser
     * @param $mutual_shopping
     * @return bool
     * @throws \think\Exception
     */
    public function redTurnOut($user, $number)
    {
        /** @var UserServices $userServices */
        $userServices = app()->make(UserServices::class);
        /** @var UserBillServices $userBill */
        $userBill = app()->make(UserBillServices::class);

        $data['title'] = '红券转出';
        $data['number'] = $number;
        $data['link_id'] = $user['uid'];
        $data['balance'] = $user['coupon_red'];
        $data['mark'] = '成功转出红券' . floatval($number);

        $userBill->expendRed($user['uid'], 'coupon_red', $data);

        $dataQuicken['title'] = '减加速分';
        $dataQuicken['number'] = $number;
        $dataQuicken['link_id'] = $user['uid'];
        $dataQuicken['balance'] = $user['quicken'];
        $dataQuicken['mark'] = '成功减加速分' . floatval($number);

        $userBill->expendQuicken($user['uid'], 'quicken', $dataQuicken);

        $coupon_red = bcsub((string)$user['coupon_red'], (string)$number, 2);
        $quicken = bcsub((string)$user['quicken'], (string)$number, 2);
        if (!$userServices->update((int)$user['uid'], ['coupon_red' => $coupon_red,'quicken' => $quicken], 'uid')) {
            throw new ValidateException('红券转出失败');
        }
        return true;
    }

    /**
     * 资金互转
     * @param int $uid
     * @param $mutual_uid
     * @param $mutual_coupon
     * @param $mutual_integral
     * @param $mutual_currency
     * @return array
     */
    public function mutual(int $uid, int $mutual_uid, $mutual_shopping = 0, $mutual_integral = 0, $mutual_currency = 0)
    {
        /** @var UserServices $userServices */
        $userServices = app()->make(UserServices::class);
        $user = $userServices->getUserInfo($uid);
        if (!$user) {
            throw new ValidateException('数据不存在');
        }

        $mutualUser = $userServices->getUserInfo($mutual_uid);

        if (!$mutualUser) {
            throw new ValidateException('转入用户不存在');
        }

        if($mutual_currency > 0){
            if($user['now_money'] < $mutual_currency){
                throw new ValidateException('你的零钱不够');
            }
            $this->currencyTurnOut($user,$mutualUser, $mutual_currency);
            $this->currencyTurnInto($user,$mutualUser, $mutual_currency);
        }

        if($mutual_integral > 0){
            if($user['integral'] < $mutual_integral){
                throw new ValidateException('你的积分不够');
            }
            $this->integralTurnOut($user,$mutualUser, $mutual_integral);
            $this->integralTurnInto($user,$mutualUser, $mutual_integral);
        }

        if($mutual_shopping > 0){
            if($user['shopping_card'] < $mutual_shopping){
                throw new ValidateException('你的购物卡不够');
            }
            $this->shoppingTurnOut($user,$mutualUser, $mutual_shopping);
            $this->shoppingTurnInto($user,$mutualUser, $mutual_shopping);
        }
        return ['msg' => '互转成功', 'data' => compact('user','mutualUser')];
    }

    /**
     * 购物卡转入处理
     * @param $user
     * @param $mutualUser
     * @param $mutual_shopping
     * @return bool
     * @throws \think\Exception
     */
    public function shoppingTurnInto($user, $mutualUser, $mutual_shopping)
    {
        /** @var UserServices $userServices */
        $userServices = app()->make(UserServices::class);

        $data['title'] = '购物卡互转';
        $data['number'] = $mutual_shopping;
        $data['link_id'] = $user['uid'];
        $data['balance'] = $mutualUser['shopping_card'];
        $data['mark'] = '成功转入购物卡' . floatval($mutual_shopping);

        /** @var UserBillServices $userBill */
        $userBill = app()->make(UserBillServices::class);
        $userBill->incomeShopping($mutualUser['uid'], 'mutual_into', $data);

        $shopping_card = bcadd((string)$mutualUser['shopping_card'], (string)$mutual_shopping, 2);
        if (!$userServices->update((int)$mutualUser['uid'], ['shopping_card' => $shopping_card], 'uid')) {
            throw new ValidateException('购物卡转入失败');
        }
        return true;
    }

    /**
     * 购物卡转出处理
     * @param $user
     * @param $mutualUser
     * @param $mutual_shopping
     * @return bool
     * @throws \think\Exception
     */
    public function shoppingTurnOut($user, $mutualUser, $mutual_shopping)
    {
        /** @var UserServices $userServices */
        $userServices = app()->make(UserServices::class);

        $data['title'] = '购物卡互转';
        $data['number'] = $mutual_shopping;
        $data['link_id'] = $mutualUser['uid'];
        $data['balance'] = $user['shopping_card'];
        $data['mark'] = '成功转出购物卡' . floatval($mutual_shopping);

        /** @var UserBillServices $userBill */
        $userBill = app()->make(UserBillServices::class);
        $userBill->expendShopping($user['uid'], 'mutual_out', $data);

        $shopping_card = bcsub((string)$user['shopping_card'], (string)$mutual_shopping, 2);
        if (!$userServices->update((int)$user['uid'], ['shopping_card' => $shopping_card], 'uid')) {
            throw new ValidateException('购物卡转出失败');
        }
        return true;
    }

    /**
     * 积分转入处理
     * @param $user
     * @param $mutualUser
     * @param $mutual_integral
     * @return bool
     * @throws \think\Exception
     */
    public function integralTurnInto($user, $mutualUser, $mutual_integral)
    {
        /** @var UserServices $userServices */
        $userServices = app()->make(UserServices::class);

        $data['title'] = '积分互转';
        $data['number'] = $mutual_integral;
        $data['link_id'] = $user['uid'];
        $data['balance'] = $mutualUser['integral'];
        $data['mark'] = '成功转入积分' . floatval($mutual_integral);

        /** @var UserBillServices $userBill */
        $userBill = app()->make(UserBillServices::class);
        $userBill->incomeIntegral($mutualUser['uid'], 'mutual_into', $data);

        $integral = bcadd((string)$mutualUser['integral'], (string)$mutual_integral, 2);
        if (!$userServices->update((int)$mutualUser['uid'], ['integral' => $integral], 'uid')) {
            throw new ValidateException('积分转入失败');
        }
        return true;
    }

    /**
     * 积分转出处理
     * @param $user
     * @param $mutualUser
     * @param $mutual_integral
     * @return bool
     * @throws \think\Exception
     */
    public function integralTurnOut($user, $mutualUser, $mutual_integral)
    {
        /** @var UserServices $userServices */
        $userServices = app()->make(UserServices::class);

        $data['title'] = '积分互转';
        $data['number'] = $mutual_integral;
        $data['link_id'] = $mutualUser['uid'];
        $data['balance'] = $user['integral'];
        $data['mark'] = '成功转出积分' . floatval($mutual_integral);

        /** @var UserBillServices $userBill */
        $userBill = app()->make(UserBillServices::class);
        $userBill->expendIntegral($user['uid'], 'mutual_out', $data);

        $integral = bcsub((string)$user['integral'], (string)$mutual_integral, 2);
        if (!$userServices->update((int)$user['uid'], ['integral' => $integral], 'uid')) {
            throw new ValidateException('积分转出失败');
        }
        return true;
    }

    /**
     * 零钱转入处理
     * @param $user
     * @param $mutualUser
     * @param $mutual_currency
     * @return bool
     * @throws \think\Exception
     */
    public function currencyTurnInto($user, $mutualUser, $mutual_currency)
    {
        /** @var UserServices $userServices */
        $userServices = app()->make(UserServices::class);

        $data['title'] = '零钱互转';
        $data['number'] = $mutual_currency;
        $data['link_id'] = $user['uid'];
        $data['balance'] = $mutualUser['now_money'];
        $data['mark'] = '成功转入零钱' . floatval($mutual_currency);

        /** @var UserBillServices $userBill */
        $userBill = app()->make(UserBillServices::class);
        $userBill->incomeNowMoney($mutualUser['uid'], 'mutual_into', $data);

        $now_money = bcadd((string)$mutualUser['now_money'], (string)$mutual_currency, 2);
        if (!$userServices->update((int)$mutualUser['uid'], ['now_money' => $now_money], 'uid')) {
            throw new ValidateException('零钱转入失败');
        }
        return true;
    }

    /**
     * 零钱转出处理
     * @param $user
     * @param $mutualUser
     * @param $mutual_currency
     * @return bool
     * @throws \think\Exception
     */
    public function currencyTurnOut($user, $mutualUser, $mutual_currency)
    {
        /** @var UserServices $userServices */
        $userServices = app()->make(UserServices::class);

        $data['title'] = '零钱互转';
        $data['number'] = $mutual_currency;
        $data['link_id'] = $mutualUser['uid'];
        $data['balance'] = $user['now_money'];
        $data['mark'] = '成功转出零钱' . floatval($mutual_currency);

        /** @var UserBillServices $userBill */
        $userBill = app()->make(UserBillServices::class);
        $userBill->expendNowMoney($user['uid'], 'mutual_out', $data);

        $now_money = bcsub((string)$user['now_money'], (string)$mutual_currency, 2);
        if (!$userServices->update((int)$user['uid'], ['now_money' => $now_money], 'uid')) {
            throw new ValidateException('零钱转出失败');
        }
        return true;
    }

    /**
     * 申请充值
     * @param int $uid
     * @param $price
     * @param $change_url
     * @param $type
     * @param $from
     * @return array
     */
    public function recharge(int $uid, $price, $change_url, $type, $from)
    {
        /** @var UserServices $userServices */
        $userServices = app()->make(UserServices::class);
        $user = $userServices->getUserInfo($uid);
        if (!$user) {
            throw new ValidateException('数据不存在');
        }

        $paid_price = 0;
        $recharge_data = [];
        $recharge_data['order_id'] = $this->getOrderId();
        $recharge_data['uid'] = $uid;
        $recharge_data['price'] = $price;
        $recharge_data['change_url'] = $change_url;
        $recharge_data['recharge_type'] = $from;
        $recharge_data['paid'] = 0;
        $recharge_data['add_time'] = time();
        $recharge_data['give_price'] = $paid_price;
        $recharge_data['channel_type'] = $user['user_type'];
        if (!$rechargeOrder = $this->dao->save($recharge_data)) {
            throw new ValidateException('充值订单生成失败');
        }
        try {
            /** @var RechargeServices $recharge */
            //$recharge = app()->make(RechargeServices::class);
            //$order_info = $recharge->recharge((int)$rechargeOrder->id);
            //$recharge = $this->getRecharge((int)$rechargeOrder->id);
            //$this->rechargeSuccess($recharge['order_id']);
        } catch (\Exception $e) {
            throw new ValidateException($e->getMessage());
        }
        return ['msg' => '', 'type' => $from, 'data' => (int)$rechargeOrder->id];
    }

    /**
     * //TODO用户充值成功后
     * @param $orderId
     */
    public function rechargeSuccess($orderId)
    {
        $order = $this->dao->getOne(['order_id' => $orderId, 'paid' => 0]);
        if (!$order) {
            throw new ValidateException('订单失效或者不存在');
        }
        /** @var UserServices $userServices */
        $userServices = app()->make(UserServices::class);
        $user = $userServices->getUserInfo((int)$order['uid']);
        if (!$user) {
            throw new ValidateException('数据不存在');
        }
        $price = bcadd((string)$order['price'], (string)$order['give_price'], 2);
        if (!$this->dao->update($order['id'], ['paid' => 1, 'pay_time' => time()], 'id')) {
            throw new ValidateException('修改订单失败');
        }
        $mark = '成功充值零钱' . floatval($order['price']) . '元' . ($order['give_price'] ? ',赠送' . $order['give_price'] . '元' : '');
        $bill_data = ['title' => '用户充值', 'number' => $price, 'link_id' => $order['id'], 'balance' => $user['now_money'], 'mark' => $mark];
        /** @var UserBillServices $userBill */
        $userBill = app()->make(UserBillServices::class);
        $userBill->incomeNowMoney($order['uid'], 'recharge', $bill_data);
        $now_money = bcadd((string)$user['now_money'], (string)$price, 2);
        if (!$userServices->update((int)$order['uid'], ['now_money' => $now_money], 'uid')) {
            throw new ValidateException('修改用户信息失败');
        }
        $wechatServices = app()->make(WechatUserServices::class);
        switch (strtolower($order['recharge_type'])) {
            case 'weixin':

                break;
            case 'routine':
                $openid = $wechatServices->uidToOpenid($order['uid'], 'routine');
                Queue::instance()->do('sendRechargeSuccess')->job(RoutineTemplateJob::class)->data($openid, $order, $now_money)->push();
                break;
        }
        return true;
    }

    /**根据查询用户充值金额
     * @param array $where
     * @return float|int
     */
    public function getRechargeMoneyByWhere(array $where, string $rechargeSumField, string $selectType, string $group = "")
    {
        switch ($selectType) {
            case "sum" :
                return $this->dao->getWhereSumField($where, $rechargeSumField);
            case "group" :
                return $this->dao->getGroupField($where, $rechargeSumField, $group);
        }
    }
}

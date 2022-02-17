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
use app\dao\user\UserExtractDao;
use app\services\order\StoreOrderCreateServices;
use app\services\system\admin\SystemAdminServices;
use app\services\wechat\WechatUserServices;
use crmeb\exceptions\AdminException;
use crmeb\jobs\RoutineTemplateJob;
use crmeb\jobs\WechatTemplateJob as TemplateJob;
use crmeb\services\WechatService;
use crmeb\services\workerman\ChannelService;
use crmeb\services\FormBuilder as Form;
use crmeb\utils\Queue;
use think\exception\ValidateException;
use think\facade\Route as Url;

/**
 *
 * Class UserExtractServices
 * @package app\services\user
 */
class UserExtractServices extends BaseServices
{

    /**
     * UserExtractServices constructor.
     * @param UserExtractDao $dao
     */
    public function __construct(UserExtractDao $dao)
    {
        $this->dao = $dao;
    }

    /**
     * 获取一条提现记录
     * @param int $id
     * @param array $field
     * @return array|\think\Model|null
     */
    public function getExtract(int $id, array $field = [])
    {
        return $this->dao->get($id, $field);
    }

    /**
     * 获取某个用户提现总数
     * @param int $uid
     * @return float
     */
    public function getUserExtract(int $uid)
    {
        return $this->dao->getWhereSum(['uid' => $uid, 'status' => 1]);
    }

    /**
     * 获取某些用户的提现总数列表
     * @param array $uids
     */
    public function getUsersSumList(array $uids)
    {
        return $this->dao->getWhereSumList(['uid' => $uids, 'status' => 1]);
    }

    public function getCount(array $where = [])
    {
        return $this->dao->getCount($where);
    }

    /**
     * 获取提现列表
     * @param array $where
     * @param string $field
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getUserExtractList(array $where, string $field = '*')
    {
        [$page, $limit] = $this->getPageValue();
        $list = $this->dao->getExtractList($where, $field, $page, $limit);
        foreach ($list as &$item) {
            $item['nickname'] = $item['user']['nickname'] ?? '';
        }
        $count = $this->dao->count($where);
        return compact('list', 'count');
    }

    /**
     * 获取提现总数
     * @param array $where
     */
    public function getExtractSum(array $where)
    {
        return $this->dao->getExtractMoneyByWhere($where, 'extract_price');
    }

    /**
     * 拒绝提现申请
     * @param $id
     * @param $fail_msg
     * @return bool
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
    public function changeFail(int $id, $userExtract, $message)
    {
        $fail_time = time();
        $extract_number = $userExtract['extract_price'];
        $mark = '提现失败,退回佣金' . $extract_number . '元';
        $uid = $userExtract['uid'];
        $status = -1;
        /** @var UserServices $userServices */
        $userServices = app()->make(UserServices::class);
        $user = $userServices->getUserInfo($uid);
        /** @var UserBillServices $userBill */
        $userBill = app()->make(UserBillServices::class);
        $bill_data = ['title' => '提现失败', 'link_id' => $userExtract['id'], 'number' => $extract_number, 'balance' => $user['now_money'], 'mark' => $mark];
        $this->transaction(function () use ($user, $bill_data, $userBill, $uid, $id, $extract_number, $message, $userServices, $status, $fail_time) {
            $userBill->incomeNowMoney($user['uid'], 'extract', $bill_data);
            $userServices->addBrokeragePrice($uid, $user['now_money'], $extract_number);
            if (!$this->dao->update($id, ['fail_time' => $fail_time, 'fail_msg' => $message, 'status' => $status])) {
                throw new AdminException('修改失败');
            }
        });
        /** @var WechatUserServices $wechatServices */
        $wechatServices = app()->make(WechatUserServices::class);
        if (strtolower($user['user_type']) == 'wechat') {
            $openid = $wechatServices->uidToOpenid($uid, 'wechat');
            Queue::instance()->do('sendUserBalanceChangeFial')->job(TemplateJob::class)->data($openid, $extract_number, $message)->push();
        } else if (strtolower($user['user_type']) == 'routine') {
            $openid = $wechatServices->uidToOpenid($uid, 'routine');
            Queue::instance()->do('sendExtractFail')->job(RoutineTemplateJob::class)->data($openid, $message, $extract_number, $user['nickname'])->push();
        }
        return true;
    }

    /**
     * 通过提现申请
     * @param $id
     * @return bool
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
    public function changeSuccess(int $id, $userExtract)
    {
        $extractNumber = $userExtract['extract_price'];
        /** @var WechatUserServices $wechatServices */
        $wechatServices = app()->make(WechatUserServices::class);
        /** @var UserServices $userServices */
        $userServices = app()->make(UserServices::class);
        $userType = $userServices->value(['uid' => $userExtract['uid']], 'user_type');
        if ($userType) {
            if (strtolower($userType) == 'routine') {
                $openid = $wechatServices->uidToOpenid($userExtract['uid'], 'routine');
                $nickname = $userServices->value(['uid' => $userExtract['uid']], 'nickname');
                Queue::instance()->do('sendExtractSuccess')->job(RoutineTemplateJob::class)->data($openid, $extractNumber, $nickname)->push();
            } else {
                $openid = $wechatServices->uidToOpenid($userExtract['uid'], 'wechat');
                Queue::instance()->do('sendUserBalanceChangeSuccess')->job(TemplateJob::class)->data($openid, $extractNumber)->push();
            }
        }

        if (!$this->dao->update($id, ['status' => 1])) {
            throw new AdminException('修改失败');
        }
        return true;
    }

    /**
     * 显示资源列表
     * @param array $where
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function index(array $where)
    {
        $list = $this->getUserExtractList($where);
        /** @var UserServices $userServices */
        $userServices = app()->make(UserServices::class);
        //待提现金额
        $where['status'] = 0;
        $extract_statistics['price'] = $this->getExtractSum($where);
        //已提现金额
        $where['status'] = 1;
        $extract_statistics['priced'] = $this->getExtractSum($where);
        //佣金总金额
        /** @var UserBillServices $userBillServices */
        $userBillServices = app()->make(UserBillServices::class);
        $extract_statistics['brokerage_count'] = $userBillServices->getUsersBokerageSum($where);
        //未提现金额
        $extract_statistics['brokerage_not'] = $extract_statistics['brokerage_count'] > $extract_statistics['priced'] ? bcsub((string)$extract_statistics['brokerage_count'], (string)$extract_statistics['priced'], 2) : 0.00;
        return compact('extract_statistics', 'list');
    }

    /**
     * 显示编辑资源表单页.
     *
     * @param int $id
     * @return \think\Response
     */
    public function edit(int $id)
    {
        $UserExtract = $this->getExtract($id);
        if (!$UserExtract) {
            throw new AdminException('数据不存在!');
        }
        $f = array();
        $f[] = Form::input('real_name', '姓名', $UserExtract['real_name']);
        $f[] = Form::number('extract_price', '提现金额', (float)$UserExtract['extract_price'])->precision(2);
        if ($UserExtract['extract_type'] == 'alipay') {
            $f[] = Form::input('alipay_code', '支付宝账号', $UserExtract['alipay_code']);
        } else if ($UserExtract['extract_type'] == 'weixin') {
            $f[] = Form::input('wechat', '微信号', $UserExtract['wechat']);
        } else {
            $f[] = Form::input('bank_code', '银行卡号', $UserExtract['bank_code']);
            $f[] = Form::input('bank_address', '开户行', $UserExtract['bank_address']);
        }
        $f[] = Form::input('mark', '备注', $UserExtract['mark'])->type('textarea');
        return create_form('编辑', $f, Url::buildUrl('/finance/extract/' . $id), 'PUT');
    }

    public function update(int $id, array $data)
    {
        if (!$this->dao->update($id, $data))
            throw new AdminException('修改失败');
        else
            return true;
    }

    /**
     * 拒绝
     * @param $id
     * @return mixed
     */
    public function refuse(int $id, string $message)
    {
        $extract = $this->getExtract($id);
        if (!$extract) {
            throw new AdminException('操作记录不存在!');
        }
        if ($extract->status == 1) {
            throw new AdminException('已经提现,错误操作');
        }
        if ($extract->status == -1) {
            throw new AdminException('您的提现申请已被拒绝,请勿重复操作!');
        }
        $res = $this->changeFail($id, $extract, $message);
        if ($res) {
            return true;
        } else {
            throw new AdminException('操作失败!');
        }
    }

    /**
     * 通过
     * @param $id
     * @return mixed
     */
    public function adopt(int $id)
    {
        $extract = $this->getExtract($id);
        if (!$extract) {
            throw new AdminException('操作记录不存!');
        }
        if ($extract->status == 1) {
            throw new AdminException('您已提现,请勿重复提现!');
        }
        if ($extract->status == -1) {
            throw new AdminException('您的提现申请已被拒绝!');
        }
        if ($this->changeSuccess($id, $extract)) {
            return true;
        } else {
            throw new AdminException('操作失败!');
        }
    }

    /**待提现的数量
     * @return int
     */
    public function userExtractCount()
    {
        return $this->dao->count(['status' => 0]);
    }

    /**
     * 银行卡提现
     * @param int $uid
     * @return mixed
     */
    public function bank(int $uid)
    {
        /** @var UserServices $userService */
        $userService = app()->make(UserServices::class);
        $user = $userService->getUserInfo($uid);
        if (!$user) {
            throw new ValidateException('数据不存在');
        }
        /** @var UserBrokerageFrozenServices $services */
        $services = app()->make(UserBrokerageFrozenServices::class);
        $data['broken_commission'] = array_bc_sum($services->getUserFrozenPrice($uid));
        if ($data['broken_commission'] < 0)
            $data['broken_commission'] = '0';
        $data['brokerage_price'] = $user['brokerage_price'];
        //可提现佣金
        $data['commissionCount'] = bcsub((string)$data['brokerage_price'], $data['broken_commission'], 2);
        $extractBank = sys_config('user_extract_bank') ?? []; //提现银行
        $extractBank = str_replace("\r\n", "\n", $extractBank);//防止不兼容
        $data['extractBank'] = explode("\n", is_array($extractBank) ? (isset($extractBank[0]) ? $extractBank[0] : $extractBank) : $extractBank);
        $data['minPrice'] = sys_config('user_extract_min_price');//提现最低金额
        return $data;
    }

    /**
     * 提现申请
     * @param int $uid
     * @param array $data
     */
    public function cash(int $uid, array $data)
    {
        /** @var UserServices $userService */
        $userService = app()->make(UserServices::class);
        $user = $userService->getUserInfo($uid);
        if (!$user) {
            throw new ValidateException('数据不存在');
        }
        /** @var UserBillServices $userBill */
        $userBill = app()->make(UserBillServices::class);

        /** @var UserBrokerageFrozenServices $services */
        $services = app()->make(UserBrokerageFrozenServices::class);
        $data['broken_commission'] = array_bc_sum($services->getUserFrozenPrice($uid));
        if ($data['broken_commission'] < 0)
            $data['broken_commission'] = 0;

        $data['brokerage_price'] = $user['now_money'];
        //可提现佣金
        $commissionCount = bcsub($data['brokerage_price'], $data['broken_commission'], 2);
        if ($data['money'] > $commissionCount) {
            throw new ValidateException('可提现零钱不足');
        }

        $extractPrice = $user['now_money'];
        $userExtractMinPrice = sys_config('user_extract_min_price');
        if ($data['money'] < $userExtractMinPrice) {
            throw new ValidateException('提现金额不能小于' . $userExtractMinPrice . '元');
        }
        if ($extractPrice < 0) {
            throw new ValidateException('提现零钱不足' . $data['money']);
        }
        if ($data['money'] > $extractPrice) {
            throw new ValidateException('提现零钱不足' . $data['money']);
        }
        if ($data['money'] <= 0) {
            throw new ValidateException('提现零钱大于0');
        }
        $openid = '';
        $insertData = [
            'uid' => $user['uid'],
            'extract_type' => $data['change_url'],
            'extract_price' => $data['money'],
            'add_time' => time(),
            'balance' => $user['now_money'],
            'status' => 0
        ];
        $insertData['real_name'] = $user['nickname'];
        $insertData['bank_code'] = '';
        $insertData['bank_address'] = '';
        $insertData['wechat'] = $user['nickname'];
        $mark = '发起提现' . $insertData['extract_price'];

        $res1 = $this->transaction(function () use ($insertData, $data, $uid, $userService, $user, $userBill, $mark, $openid) {
            if (!$res1 = $this->dao->save($insertData)) {
                throw new ValidateException('提现失败');
            }
            $balance = bcsub((string)$user['now_money'], (string)$data['money'], 2) ?? 0;
            if (!$userService->update($uid, ['now_money' => $balance], 'uid')) {
                throw new ValidateException('修改用户信息失败');
            }

            //TODO 团长手续费
            if($user['is_head'] == 1){
                $cash_premium_head = bcmul((string)$data['money'],sys_config('cash_premium_head'),2);
                $cash_premium_head = $cash_premium_head/100;
                $brokerage_price = bcadd((string)$user['brokerage_price'], (string)$cash_premium_head, 2) ?? 0;
                $userService->update($uid, ['brokerage_price' => $brokerage_price], 'uid');
            }

            //TODO 群主手续费
            if($user['is_promoter'] == 1){
                $cash_premium_head = bcmul((string)$data['money'],sys_config('cash_premium_group'),2);
                $cash_premium_head = $cash_premium_head/100;
                $brokerage_price = bcadd((string)$user['brokerage_price'], (string)$cash_premium_head, 2) ?? 0;
                $userService->update($uid, ['brokerage_price' => $brokerage_price], 'uid');
            }

            $bill_data = ['title' => '零钱提现', 'link_id' => $res1['id'], 'balance' => $user['now_money'], 'number' => $data['money'], 'mark' => $mark];
            if (!$userBill->expendNowMoney($uid, 'extract', $bill_data)) {
                throw new ValidateException('保存提现记录失败');
            }
            return $res1;
        });

        try {
            ChannelService::instance()->send('WITHDRAW', ['id' => $res1->id]);
        } catch (\Exception $e) {
        }
        /** @var SystemAdminServices $systemAdmin */
        $systemAdmin = app()->make(SystemAdminServices::class);
        $systemAdmin->adminNewPush();
        //发送模板消息
        return true;
    }

    /**
     * @param array $where
     * @param string $SumField
     * @param string $selectType
     * @param string $group
     * @return float|mixed
     */
    public function getOutMoneyByWhere(array $where, string $SumField, string $selectType, string $group = "")
    {
        switch ($selectType) {
            case "sum" :
                return $this->dao->getWhereSumField($where, $SumField);
            case "group" :
                return $this->dao->getGroupField($where, $SumField, $group);
        }
    }
}

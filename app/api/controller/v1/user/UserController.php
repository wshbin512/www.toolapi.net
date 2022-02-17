<?php

// TODO +----------------------------------------------------------------------
// TODO | NRLSE [ NRLSE赋能开发者，助力企业发展 ]
// TODO +----------------------------------------------------------------------
// TODO | Copyright (c) 2014~2021 https://www.nrlse.cn All rights reserved.
// TODO +----------------------------------------------------------------------
// TODO | Licensed NRLSE并不是自由软件，未经许可不能去掉NRLSE相关版权
// TODO +----------------------------------------------------------------------
// TODO | Author: NRLSE Team <admin@nrlse.cn>
// TODO +----------------------------------------------------------------------

namespace app\api\controller\v1\user;

use app\Request;
use app\services\user\UserServices;
use app\services\user\UserFeedbackServices;
use app\services\system\admin\SystemAreaServices;
use app\services\wechat\WechatUserServices;
use app\services\agent\AgentManageServices;
use app\services\app\AppServices;

/**
 * 用户类
 * Class UserController
 * @package app\api\controller\store
 */
class UserController
{
    protected $services = NUll;

    /**
     * UserController constructor.
     * @param UserServices $services
     */
    public function __construct(UserServices $services)
    {
        $this->services = $services;
    }

    /**
     * 获取用户信息
     * @param Request $request
     * @return mixed
     */
    public function userInfo(Request $request)
    {
        $info = $request->user()->toArray();
        return app('json')->success($this->services->userInfo($info));
    }

    /**
     * 用户资金统计
     * @param Request $request
     * @return mixed
     * @throws \think\Exception
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
    public function balance(Request $request)
    {
        $uid = (int)$request->uid();
        return app('json')->successful($this->services->balance($uid));
    }

    /**
     * 个人中心
     * @param Request $request
     * @return mixed
     */
    public function user(Request $request)
    {
        $user = $request->user()->toArray();
        $dataUser = $this->services->personalHome($user, $request->tokenData());
        $data['uid'] = $dataUser['uid'];
        $data['appId'] = $dataUser['appId'];
        $data['real_name'] = $dataUser['real_name'];
        $data['nickname'] = $dataUser['nickname'];
        $data['avatar'] = $dataUser['avatar'];
        $data['phone'] = $dataUser['phone'];
        $data['add_time'] = $dataUser['add_time'];
        $data['last_time'] = $dataUser['last_time'];
        $data['status'] = $dataUser['status'];
        $data['spread_uid'] = $dataUser['spread_uid'];
        $data['spread_time'] = $dataUser['spread_time'];
        $data['user_type'] = $dataUser['user_type'];
        $data['is_promoter'] = $dataUser['is_promoter'];
        $data['spread_open'] = $dataUser['spread_open'];
        $data['spread_count'] = $dataUser['spread_count'];
        $data['use_number'] = $dataUser['use_number'];
        return app('json')->successful($data);
    }

    /**
     * 注册用户
     * @param Request $request
     * @return mixed
     */
    public function getUserRegister(Request $request)
    {
        $where['status'] = 1;
        $count = $this->services->getUserRegister($where);
        return app('json')->successful(compact('count'));
    }

    /**
     * 个人二维码
     * @param Request $request
     * @return mixed
     */
    public function look_h5_code(Request $request)
    {
        $uid = (int)$request->uid();
        $where = $request->getMore([
            ['appId', '']
        ]);

        if(!$where['appId']){
            return app('json')->fail('缺失appId参数');
        }

        /** @var AppServices $appServices */
        $appServices = app()->make(AppServices::class);
        $appData = $appServices->getAppIdData($where['appId']);
        if(!$appData){
            return app('json')->fail('该APP未注册API接口，请联系管理员');
        }

        /** @var AgentManageServices $agentManageServices */
        $agentManageServices = app()->make(AgentManageServices::class);
        $data = $agentManageServices->lookH5Code((int)$uid,$where['appId']);
        return app('json')->successful($data);
    }

    /**
     * 用户修改信息
     * @param Request $request
     * @return mixed
     */
    public function edit(Request $request)
    {
        list($avatar, $nickname) = $request->postMore([
            ['avatar', ''],
            ['nickname', ''],
        ], true);
        if (!$avatar && $nickname == '') {
            return app('json')->fail('请输入昵称或者选择头像');
        }
        $return = self::imgUpload($avatar);
        if(count($return['data'])){
            $img = $return['data'][0]['url'];
        } else {
            $img = '';
        }
        $uid = (int)$request->uid();
        if ($this->services->eidtNickname($uid, ['avatar' => $img, 'nickname' => $nickname])) {
            return app('json')->successful('修改成功');
        }
        return app('json')->fail('修改失败');
    }

    /**
     * 推广人排行
     * @param Request $request
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
    public function rank(Request $request)
    {
        $data = $request->getMore([
            ['page', ''],
            ['limit', ''],
            ['type', '']
        ]);
        return app('json')->success($this->services->getRankList($data));
    }

    /**
     * 添加访问记录
     * @param Request $request
     * @return mixed
     */
    public function set_visit(Request $request)
    {
        $data = $request->postMore([
            ['url', ''],
            ['stay_time', 0]
        ]);
        if ($data['url'] == '') return app('json')->fail('未获取页面路径');
        $data['uid'] = (int)$request->uid();
        $data['ip'] = $request->ip();
        if ($this->services->setVisit($data)) {
            return app('json')->success('添加访问记录成功');
        } else {
            return app('json')->fail('添加访问记录失败');
        }
    }

    /**
     * 静默绑定推广人
     * @param Request $request
     * @return mixed
     */
    public function spread(Request $request)
    {
        [$spreadUid, $code] = $request->postMore([
            ['puid', 0],
            ['code', 0]
        ], true);
        $uid = (int)$request->uid();
        $this->services->spread($uid, (int)$spreadUid, $code);
        return app('json')->success();
    }

    /**
     * 推荐用户
     * @param Request $request
     * @return mixed
     * grade == 0  获取一级推荐人
     * grade == 1  获取二级推荐人
     * keyword 会员名称查询
     */
    public function spread_people(Request $request)
    {
        $spreadInfo = $request->postMore([
            ['grade', 0],
            ['keyword', ''],
            ['sort', ''],
        ]);
        if (!in_array($spreadInfo['grade'], [0, 1])) {
            return app('json')->fail('等级错误');
        }
        $uid = $request->uid();
        return app('json')->successful($this->services->getUserSpreadGrade($uid, $spreadInfo['grade'], $spreadInfo['sort'], $spreadInfo['keyword']));
    }

    /**
     * 是否关注
     * @param Request $request
     * @return mixed
     */
    public function subscribe(Request $request)
    {
        if ($request->uid()) {
            /** @var WechatUserServices $wechatUserService */
            $wechatUserService = app()->make(WechatUserServices::class);
            $subscribe = $wechatUserService->value(['uid' => $request->uid()], 'subscribe') ? true : false;
            return app('json')->success(['subscribe' => $subscribe]);
        } else {
            return app('json')->success(['subscribe' => true]);
        }
    }

    /**
     * 保存意见反馈
     * @param Request $request
     * @return mixed
     */
    public function saveFeedback(Request $request){
        $data = $request->postMore([
            ['described', ''],
            ['img_1', ''],
            ['img_2', ''],
            ['img_3', ''],
            ['img_4', ''],
            ['img_5', ''],
            ['img_6', ''],
            ['img_7', ''],
            ['img_8', ''],
            ['img_9', '']
        ]);

        $described = $data['described'];
        unset($data['described']);

        $return = self::multi_imgupload($data);

        $pics = [];
        if($return['code'] == 1){
            switch (count($return['data'])){
                case 1:
                    $pics[] = $return['data'][0]['url'];
                    break;
                case 2:
                    $pics[] = $return['data'][0]['url'];
                    $pics[] = $return['data'][1]['url'];
                    break;
                case 3:
                    $pics[] = $return['data'][0]['url'];
                    $pics[] = $return['data'][1]['url'];
                    $pics[] = $return['data'][2]['url'];
                    break;
                case 4:
                    $pics[] = $return['data'][0]['url'];
                    $pics[] = $return['data'][1]['url'];
                    $pics[] = $return['data'][2]['url'];
                    $pics[] = $return['data'][3]['url'];
                    break;
                case 5:
                    $pics[] = $return['data'][0]['url'];
                    $pics[] = $return['data'][1]['url'];
                    $pics[] = $return['data'][2]['url'];
                    $pics[] = $return['data'][3]['url'];
                    $pics[] = $return['data'][4]['url'];
                    break;
                case 6:
                    $pics[] = $return['data'][0]['url'];
                    $pics[] = $return['data'][1]['url'];
                    $pics[] = $return['data'][2]['url'];
                    $pics[] = $return['data'][3]['url'];
                    $pics[] = $return['data'][4]['url'];
                    $pics[] = $return['data'][5]['url'];
                    break;
                case 7:
                    $pics[] = $return['data'][0]['url'];
                    $pics[] = $return['data'][1]['url'];
                    $pics[] = $return['data'][2]['url'];
                    $pics[] = $return['data'][3]['url'];
                    $pics[] = $return['data'][4]['url'];
                    $pics[] = $return['data'][5]['url'];
                    $pics[] = $return['data'][6]['url'];
                    break;
                case 8:
                    $pics[] = $return['data'][0]['url'];
                    $pics[] = $return['data'][1]['url'];
                    $pics[] = $return['data'][2]['url'];
                    $pics[] = $return['data'][3]['url'];
                    $pics[] = $return['data'][4]['url'];
                    $pics[] = $return['data'][5]['url'];
                    $pics[] = $return['data'][6]['url'];
                    $pics[] = $return['data'][7]['url'];
                    break;
                case 9:
                    $pics[] = $return['data'][0]['url'];
                    $pics[] = $return['data'][1]['url'];
                    $pics[] = $return['data'][2]['url'];
                    $pics[] = $return['data'][3]['url'];
                    $pics[] = $return['data'][4]['url'];
                    $pics[] = $return['data'][5]['url'];
                    $pics[] = $return['data'][6]['url'];
                    $pics[] = $return['data'][7]['url'];
                    $pics[] = $return['data'][8]['url'];
                    break;
            }
        } else {
            return app('json')->fail('图片上传有误');
        }

        $group['uid'] = $request->uid();
        $userInfo = $request->user();

        if ($pics) $group['pics'] = json_encode(is_array($pics) ? $pics : explode(',', $pics));

        $group['comment'] = $described;
        $group['unique'] = rand(99999999,11111111);
        $group['nickname'] = $userInfo['nickname'];
        $group['avatar'] = $userInfo['avatar'];
        $group['add_time'] = time();

        /** @var UserFeedbackServices $userFeedback */
        $userFeedback = app()->make(UserFeedbackServices::class);
        $res = $userFeedback->save($group);
        if ($res) {
            return app('json')->success($res);
        } else {
            return app('json')->fail('存储失败');
        }
    }

    /**
     * 图片上传
     * @param $jsdata
     * @return array
     * ====================================================================
     * ||
     * || 文件上传 B
     * ||
     * ====================================================================
     */
    public function multi_imgupload($jsdata)
    {
        $siteUrl = 'http://'.$_SERVER['SERVER_NAME'].'/uploads/attach/'.date('Y').'/'.date('m').'/'.date('Ymd').'/';
        //TODO 定义上传文件的存放路径
        $uploadDir = './uploads/attach/'.date('Y').'/'.date('m').'/'.date('Ymd').'/';
        $data = array();
        if($jsdata) {
            $code   = 1;
            $msg    = "上传成功";
            foreach ($jsdata as $key => &$value) {
                //图片上传
                if (preg_match('/^(data:\s*image\/(\w+);base64,)/',$value,$result)){
                    $type = $result[2];//图片后缀

                    if (!file_exists($uploadDir)) {
                        //检查是否有该文件夹，如果没有就创建，并给予最高权限
                        mkdir($uploadDir, 0777,true);
                    }

                    $returnData = self::imageUpload($value,$siteUrl,$uploadDir,$result,$type);
                    $data[] = $returnData;
                }
            }
        } else {
            $code = 0;
            $msg = "上传失败，图片参数为空，请上传图片";
        }
        return array('data'=>$data,'code'=>$code,'msg'=>$msg);
    }

    public function imgUpload($value) {
        $siteUrl = 'http://'.$_SERVER['SERVER_NAME'].'/uploads/attach/'.date('Y').'/'.date('m').'/'.date('Ymd').'/';
        //TODO 定义上传文件的存放路径
        $uploadDir = './uploads/attach/'.date('Y').'/'.date('m').'/'.date('Ymd').'/';
        $data = array();
        if($value) {
            $code   = 1;
            $msg    = "上传成功";

            //图片上传
            if (preg_match('/^(data:\s*image\/(\w+);base64,)/',$value,$result)){
                $type = $result[2];//图片后缀

                if (!file_exists($uploadDir)) {
                    //检查是否有该文件夹，如果没有就创建，并给予最高权限
                    mkdir($uploadDir, 0777,true);
                }

                $returnData = self::imageUpload($value,$siteUrl,$uploadDir,$result,$type);
                $data[] = $returnData;
            }
        } else {
            $code = 0;
            $msg = "上传失败，图片参数为空，请上传图片";
        }
        return array('data'=>$data,'code'=>$code,'msg'=>$msg);
    }

    public function imageUpload($value,$siteUrl,$uploadDir,$result,$type)
    {
        $filename = time() . '_' . uniqid() . ".{$type}"; //文件名
        $uploadDir = $uploadDir . $filename;
        $url = $siteUrl . $filename;
        //写入操作
        if(file_put_contents($uploadDir, base64_decode(str_replace($result[1], '', $value)))) {
            return compact('filename','url');
        }
    }

    /**
     * 新增用户使用次数
     * @param Request $request
     * @return mixed
     */
    public function useNumber(Request $request)
    {
        $uid = (int)$request->uid();
        if ($this->services->useNumber($uid)) {
            return app('json')->successful('增加用户使用次数成功');
        }
        return app('json')->fail('增加用户使用次数失败');
    }
}

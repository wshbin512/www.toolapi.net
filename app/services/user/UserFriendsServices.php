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

namespace app\services\user;


use app\dao\user\UserFriendsDao;
use app\services\BaseServices;

/**
 * 获取好友列表
 * Class UserFriendsServices
 * @package app\services\user
 */
class UserFriendsServices extends BaseServices
{

    public function __construct(UserFriendsDao $dao)
    {
        $this->dao = $dao;
    }

    /**
     * 获取好友列表
     * @param array $where
     * @param array $with
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getFriendList(array $where, array $with = [])
    {
        [$page, $limit] = $this->getPageValue();
        $list = $this->dao->getFriendList($where, $page, $limit, $with);
        $count = $this->dao->count($where);
        return compact('list', 'count');
    }

    /**
     * 保存好友关系
     * @param array $data
     * @return bool|mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function saveFriend(array $data)
    {
        $userFriend = $this->dao->get(['uid' => $data['uid']]);
        if ($userFriend) {
            return true;
        } else {
            return $this->dao->save($data);
        }
    }

}

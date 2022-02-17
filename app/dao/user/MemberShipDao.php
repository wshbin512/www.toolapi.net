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

namespace app\dao\user;


use app\dao\BaseDao;
use app\model\user\MemberShip;

class MemberShipDao extends BaseDao
{
    /** 设置模型
     * @return string
     */
    protected function setModel(): string
    {
        // TODO: Implement setModel() method.
        return MemberShip::class;
    }

    /**后台获取会员卡类型接口
     * @param array $where
     * @param int $page
     * @param int $limit
     * @param array $field
     * @return \think\Collection
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getSearchList(array $where, int $page = 0, int $limit = 0, array $field = ['*'])
    {
        return $this->search($where)->order('sort desc,id desc')
            ->field($field)
            ->page($page, $limit)
            ->select();

    }

    /**获取会员类型api接口
     * @return mixed
     */
    public function getApiList(array $where)
    {
        return $this->search()->where($where)->order('sort desc')->select()->toArray();
    }


}

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
use app\model\user\MemberCard;

class MemberCardDao extends BaseDao
{
    /** 设置模型
     * @return string
     */
    protected function setModel(): string
    {
        // TODO: Implement setModel() method.
        return MemberCard::class;
    }

    public function getSearchList(array $where, int $page = 0, int $limit = 0, array $field = ['*'])
    {
        return $this->search($where)->order('use_time desc,id desc')
            ->field($field)
            ->when($page > 0 || $limit > 0, function ($query) use ($page, $limit) {
                $query->page($page, $limit);
            })
            ->select();
    }

    /**获取当条会员卡信息
     * @param array $where
     * @return array|\think\Model|null
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getOneByWhere(array $where)
    {
        return $this->getModel()->where($where)->find();
    }


}

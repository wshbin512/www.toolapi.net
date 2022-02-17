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
use app\model\user\MemberCardBatch;

class MemberCardBatchDao extends BaseDao
{
    /** 设置模型
     * @return string
     */
    protected function setModel(): string
    {
        // TODO: Implement setModel() method.
        return MemberCardBatch::class;
    }


    /**
     * 获取会员卡批次列表
     * @param array $where
     * @param int $page
     * @param int $limit
     * @param string $order
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getList(array $where, int $page = 0, int $limit = 0, string $order = '')
    {
        foreach($where as $k => $v) {
            if ($v == "") unset($where[$k]);
        }
        return $this->search($where)
            ->order(($order ? $order . ' ,' : '') . 'sort desc,id desc')
            ->page($page, $limit)->select()->toArray();
    }


}

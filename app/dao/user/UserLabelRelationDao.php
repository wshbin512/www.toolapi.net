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

namespace app\dao\user;

use app\dao\BaseDao;
use app\model\user\UserLabelRelation;

/**
 *
 * Class UserLabelRelationDao
 * @package app\dao\user
 */
class UserLabelRelationDao extends BaseDao
{

    /**
     * 设置模型
     * @return string
     */
    protected function setModel(): string
    {
        return UserLabelRelation::class;
    }

    /**
     * 获取用户个标签列表按照用户id进行分组
     * @param array $uids
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getLabelList(array $uids)
    {
        return $this->search(['uid' => $uids])->with('label')->select()->toArray();
    }

}

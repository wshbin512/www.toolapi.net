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

namespace app\dao\system\attachment;

use app\dao\BaseDao;
use app\model\system\attachment\SystemAttachmentCategory;

/**
 *
 * Class SystemAttachmentCategoryDao
 * @package app\dao\attachment
 */
class SystemAttachmentCategoryDao extends BaseDao
{

    /**
     * 设置模型
     * @return string
     */
    protected function setModel(): string
    {
        return SystemAttachmentCategory::class;
    }

    /**
     * 获取列表
     * @param array $where
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getList(array $where)
    {
        return $this->search($where)->select()->toArray();
    }

    /**
     * 获取数量
     * @param array $where
     * @return int
     */
    public function getCount(array $where)
    {
        return $this->search($where)->count();
    }

    /**
     * 搜索附件分类search
     * @param array $where
     * @return \crmeb\basic\BaseModel|mixed|\think\Model
     */
    public function search(array $where = [])
    {
        return parent::search($where)->when(isset($where['id']), function ($query) use ($where) {
            $query->whereIn('id', $where['id']);
        });
    }
}

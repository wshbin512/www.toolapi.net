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

namespace app\dao\wechat;

use app\dao\BaseDao;
use app\model\wechat\WechatNewsCategory;

/**
 *
 * Class UserWechatUserDao
 * @package app\dao\user
 */
class WechatNewsCategoryDao extends BaseDao
{
    /**
     * @return string
     */
    protected function setModel(): string
    {
        return WechatNewsCategory::class;
    }

    /**新闻分类 $model
     * @param array $where
     * @return \crmeb\basic\BaseModel
     */
    public function getNewCtae(array $where)
    {
        return parent::getModel()->when(isset($where['cate_name']), function ($query) use ($where) {
            $query->where('cate_name', 'LIKE', "%$where[cate_name]%");
        })->where('status', 1)->order('add_time desc');
    }


}

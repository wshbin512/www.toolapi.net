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

namespace app\dao\advertise;


use app\dao\BaseDao;
use app\model\advertise\AdvertiseContent;

/**
 * 广告详情
 * Class AdvertiseContentDao
 * @package app\dao\advertise
 */
class AdvertiseContentDao extends BaseDao
{
    /**
     * 设置模型
     * @return string
     */
    protected function setModel(): string
    {
        return AdvertiseContent::class;
    }

    /**
     * 根据id删除数据
     * @param int $id
     * @return bool
     * @throws \Exception
     */
    public function del(int $id)
    {
        return $this->getModel()->where('nid',$id)->delete();
    }
}

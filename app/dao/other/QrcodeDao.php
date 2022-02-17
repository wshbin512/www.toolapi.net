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

namespace app\dao\other;

use app\dao\BaseDao;
use app\model\other\Qrcode;

/**
 *
 * Class QrcodeDao
 * @package app\dao\other
 */
class QrcodeDao extends BaseDao
{

    /**
     * 设置模型
     * @return string
     */
    protected function setModel(): string
    {
        return Qrcode::class;
    }

    /**
     * 获取一条二维码
     * @param $id
     * @param string $type
     * @return array|\think\Model|null
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getQrcode($id, $type = 'id')
    {
        return $this->getModel()->where($type, $id)->find();
    }

    /**
     * 修改二维码使用状态
     * @param $id
     * @param string $type
     * @return mixed
     */
    public function scanQrcode($id, $type = 'id')
    {
        return $this->getModel()->where($type, $id)->inc('scan')->update();
    }
}

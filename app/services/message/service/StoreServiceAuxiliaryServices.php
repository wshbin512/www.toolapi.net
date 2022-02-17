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

namespace app\services\message\service;


use app\dao\service\StoreServiceAuxiliaryDao;
use app\services\BaseServices;

/**
 * Class StoreServiceAuxiliaryServices
 * @package app\services\message\service
 */
class StoreServiceAuxiliaryServices extends BaseServices
{
    /**
     * StoreServiceAuxiliaryServices constructor.
     * @param StoreServiceAuxiliaryDao $dao
     */
    public function __construct(StoreServiceAuxiliaryDao $dao)
    {
        $this->dao = $dao;
    }

    /**
     * 保存转接信息
     * @param array $data
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function saveAuxliary(array $data)
    {
        $auxliaryInfo = $this->dao->get(['type' => 0, 'binding_id' => $data['binding_id'], 'relation_id' => $data['relation_id']]);
        if ($auxliaryInfo) {
            $auxliaryInfo->update_time = time();
            return $auxliaryInfo->save();
        } else {
            return $this->dao->save([
                'type' => 0,
                'binding_id' => $data['binding_id'],
                'relation_id' => $data['relation_id'],
                'update_time' => time(),
                'add_time' => time(),
            ]);
        }
    }

}

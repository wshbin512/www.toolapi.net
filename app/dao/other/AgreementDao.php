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

namespace app\dao\other;


use app\dao\BaseDao;
use app\model\other\Agreement;

/**
 * Class AgreementDao
 * @package app\dao\other
 */
class AgreementDao extends BaseDao
{

    /**
     * @return string
     */
    public function setModel(): string
    {
        return Agreement::class;
    }

    /**修改协议内容
     * @param array $where
     * @param $agreement
     * @return bool|\crmeb\basic\BaseModel
     */
    public function saveAgreement(array $agreement, $id = 0)
    {
        if (!$agreement) return false;
        $agreement['add_time'] = time();
        if($id){
            return $this->getModel()->update($agreement,['id' => $id]);
        }
        return $this->getModel()->save($agreement);
    }

}

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

namespace app\services\advertise;

use app\dao\advertise\AdvertiseCategoryDao;
use app\services\BaseServices;
use crmeb\exceptions\AdminException;
use crmeb\services\FormBuilder as Form;
use think\facade\Route as Url;

/**
 * Class AdvertiseCategoryServices
 * @package app\services\advertise
 * @method getAdvertiseCategory()
 */
class AdvertiseCategoryServices extends BaseServices
{
    /**
     * AdvertiseCategoryServices constructor.
     * @param AdvertiseCategoryDao $dao
     */
    public function __construct(AdvertiseCategoryDao $dao)
    {
        $this->dao = $dao;
    }

    /**
     * 获取广告分类列表
     * @param array $where
     * @return array
     */
    public function getList(array $where)
    {
        [$page, $limit] = $this->getPageValue();
        $list = $this->dao->getList($where, $page, $limit);
        $count = $this->dao->count($where);
        return compact('list', 'count');
    }

    /**
     * 别名查询详情
     * @param $where
     * @return array
     */
    public function getAliasDetails($where){
        return $this->dao->getAliasDetails($where);
    }

    /**
     * 生成创建修改表单
     * @param int $id
     * @return array
     * @throws \FormBuilder\Exception\FormBuilderException
     */
    public function createForm(int $id)
    {
        $method = 'POST';
        $url = '/advertise/category';
        if ($id) {
            $info = $this->dao->get($id);
            $method = 'PUT';
            $url = $url . '/' . $id;
        }
        $f = array();
        $f[] = Form::hidden('id', $info['id'] ?? 0);
        $f[] = Form::input('title', '分类名称', $info['title'] ?? '')->maxlength(20)->required();
        $f[] = Form::input('alias', '分类别名', $info['alias'] ?? '')->maxlength(20)->required();
        $f[] = Form::input('intr', '分类简介', $info['intr'] ?? '')->type('textarea')->required();
        $f[] = Form::frameImage('image', '分类图片', Url::buildUrl('admin/widget.images/index', array('fodder' => 'image')), $info['image'] ?? '')->icon('ios-add')->width('950px')->height('420px');
        $f[] = Form::number('sort', '分类排序', (int)($info['sort'] ?? 0));
        $f[] = Form::radio('status', '分类状态', $info['status'] ?? 1)->options([['value' => 1, 'label' => '显示'], ['value' => 0, 'label' => '隐藏']]);
        return create_form('添加分类', $f, Url::buildUrl($url), $method);
    }

    /**
     * 保存
     * @param array $data
     */
    public function save(array $data)
    {
        $this->dao->save($data);
    }

    /**
     * 修改
     * @param array $data
     */
    public function update(array $data)
    {
        $this->dao->update($data['id'], $data);
    }

    /**
     * 删除
     * @param int $id
     */
    public function del(int $id)
    {
        /** @var AdvertiseServices $advertiseService */
        $advertiseService = app()->make(AdvertiseServices::class);
        $count = $advertiseService->count(['cid' => $id]);
        if ($count > 0) {
            throw new AdminException('该分类下有广告，无法删除！');
        } else {
            $this->dao->delete($id);
        }
    }

    /**
     * 修改状态
     * @param int $id
     * @param int $status
     */
    public function setStatus(int $id, int $status)
    {
        $this->dao->update($id, ['status' => $status]);
    }
}

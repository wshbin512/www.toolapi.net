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

namespace app\services\app;

use app\dao\app\AppDao;
use app\services\BaseServices;
use crmeb\exceptions\AdminException;
use crmeb\services\FormBuilder as Form;
use think\facade\Route as Url;

/**
 * Class AppServices
 * @package app\services\app
 * @method getApp()
 */
class AppServices extends BaseServices
{
    /**
     * ArticleCategoryServices constructor.
     * @param AppDao $dao
     */
    public function __construct(AppDao $dao)
    {
        $this->dao = $dao;
    }

    /**
     * 获取列表
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
     * 生成创建修改表单
     * @param int $id
     * @return array
     * @throws \FormBuilder\Exception\FormBuilderException
     */
    public function createForm(int $id)
    {
        $method = 'POST';
        $url = '/app/app';
        if ($id) {
            $info = $this->dao->get($id);
            $method = 'PUT';
            $url = $url . '/' . $id;
        }
        $f = array();
        $f[] = Form::hidden('id', $info['id'] ?? 0);
        $f[] = Form::input('title', 'APP名称', $info['title'] ?? '')->maxlength(20)->required();
        $f[] = Form::input('intr', 'APP简介', $info['intr'] ?? '')->type('textarea')->required();
        $f[] = Form::input('appUrl', 'APP-URL', $info['appUrl'] ?? '')->maxlength(255)->required();
        $f[] = Form::input('webUrl', 'WEB-URL', $info['webUrl'] ?? '')->maxlength(255)->required();
        $f[] = Form::frameImage('posters', 'APP海报', Url::buildUrl('admin/widget.images/index', array('fodder' => 'posters')), $info['posters'] ?? '')->icon('ios-add')->width('950px')->height('420px');
        $f[] = Form::frameImage('image', 'APP图标', Url::buildUrl('admin/widget.images/index', array('fodder' => 'image')), $info['image'] ?? '')->icon('ios-add')->width('950px')->height('420px');

        $f[] = Form::input('android_version', 'Android版本编号', $info['android_version'] ?? '')->maxlength(255)->required();
        $f[] = Form::input('android_version_code', 'Android版本标识', $info['android_version_code'] ?? '')->maxlength(255)->required();
        $f[] = Form::frameImage('android_logo', 'Android更新图标', Url::buildUrl('admin/widget.images/index', array('fodder' => 'android_logo')), $info['android_logo'] ?? '')->icon('ios-add')->width('950px')->height('420px');
        $f[] = Form::input('android_link', 'Android下载地址', $info['android_link'] ?? '')->maxlength(255)->required();
        $f[] = Form::input('android_news', 'Android更新描述', $info['android_news'] ?? '')->type('textarea')->required();

        $f[] = Form::input('ios_version', 'IOS版本编号', $info['ios_version'] ?? '')->maxlength(255)->required();
        $f[] = Form::input('ios_version_code', 'IOS版本标识', $info['ios_version_code'] ?? '')->maxlength(255)->required();
        $f[] = Form::frameImage('ios_logo', 'IOS更新图标', Url::buildUrl('admin/widget.images/index', array('fodder' => 'ios_logo')), $info['ios_logo'] ?? '')->icon('ios-add')->width('950px')->height('420px');
        $f[] = Form::input('ios_link', 'IOS下载地址', $info['ios_link'] ?? '')->maxlength(255)->required();
        $f[] = Form::input('ios_news', 'IOS更新描述', $info['ios_news'] ?? '')->type('textarea')->required();;

        $f[] = Form::radio('is_update', 'APP是否升级', $info['is_update'] ?? 1)->options([['value' => 1, 'label' => '是'], ['value' => 0, 'label' => '否']]);

        $f[] = Form::number('sort', '排序', (int)($info['sort'] ?? 0));
        $f[] = Form::radio('status', '状态', $info['status'] ?? 1)->options([['value' => 1, 'label' => '显示'], ['value' => 0, 'label' => '隐藏']]);
        return create_form('注册APP', $f, Url::buildUrl($url), $method);
    }

    /**
     * 生成随机数
     * @return string
     */
    public function createInvitecode()
    {
        // 生成字母和数字组成的15位字符串
        $str = range('A', 'Z');
        // 去除大写的O，以防止与0混淆 
        unset($str[array_search('O', $str)]);
        $arr = array_merge(range(0, 9), $str);
        shuffle($arr);
        $invitecode = '';
        $arr_len = count($arr);
        for ($i = 0; $i < 15; $i++) {
            $rand = mt_rand(0, $arr_len - 1);
            $invitecode .= $arr[$rand];
        }
        return $invitecode;
    }

    /**
     * 保存
     * @param array $data
     */
    public function save(array $data)
    {
        $data['appId'] = 'APP'.$this->createInvitecode();
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
        /** @var ArticleServices $articleService */
        $articleService = app()->make(ArticleServices::class);
        $count = $articleService->count(['cid' => $id]);
        if ($count > 0) {
            throw new AdminException('该APP下有内容，无法删除');
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

    public function getAppIdData(string $appId = '')
    {
        return $this->dao->getAppIdData($appId);
    }
}

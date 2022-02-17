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

namespace app\adminapi\controller\v1\application\app;

use app\adminapi\controller\AuthController;
use app\services\app\AppServices;
use crmeb\services\CacheService;
use think\facade\App;

/**
 * APP
 * Class AppService
 * @package app\adminapi\controller\v1\application\app
 */
class AppService extends AuthController
{
    protected $service;

    public function __construct(App $app, AppServices $service)
    {
        parent::__construct($app);
        $this->service = $service;
    }

    /**
     * 获取列表
     * @return mixed
     */
    public function index()
    {
        $where = $this->request->getMore([
            ['status', ''],
            ['title', ''],
            ['type', 0]
        ]);
        $type = $where['type'];
        unset($where['type']);
        $data = $this->service->getList($where);
        if ($type == 1) $data = $data['list'];
        return $this->success($data);
    }

    /**
     * 创建新增表单
     * @return mixed
     * @throws \FormBuilder\Exception\FormBuilderException
     */
    public function create()
    {
        return $this->success($this->service->createForm(0));
    }

    /**
     * 保存新建
     * @return mixed
     */
    public function save()
    {
        $data = $this->request->postMore([
            ['title', ''],
            ['intr', ''],
            ['image', ''],
            ['posters',''],
            ['appUrl',''],
            ['webUrl',''],

            ['android_version', ''],
            ['android_version_code', ''],
            ['android_logo',''],
            ['android_link',''],
            ['android_news',''],

            ['ios_version', ''],
            ['ios_version_code', ''],
            ['ios_logo',''],
            ['ios_link',''],
            ['ios_news',''],

            ['is_update', 0],

            ['sort', 0],
            ['status', 0]
        ]);
        if (!$data['title']) {
            return $this->fail('请填写APP名称');
        }
        $data['add_time'] = time();
        $this->service->save($data);
        CacheService::delete('ARTICLE_CATEGORY');
        return $this->success('注册成功');
    }

    /**
     * 创建修改表单
     * @param $id
     * @return mixed
     * @throws \FormBuilder\Exception\FormBuilderException
     */
    public function edit($id)
    {
        return $this->success($this->service->createForm($id));
    }

    /**
     * 保存修改
     * @param $id
     * @return mixed
     */
    public function update($id)
    {
        $data = $this->request->postMore([
            ['id', 0],
            ['title', ''],
            ['intr', ''],
            ['image', ''],
            ['posters',''],
            ['appUrl',''],
            ['webUrl',''],

            ['android_version', ''],
            ['android_version_code', ''],
            ['android_logo',''],
            ['android_link',''],
            ['android_news',''],

            ['ios_version', ''],
            ['ios_version_code', ''],
            ['ios_logo',''],
            ['ios_link',''],
            ['ios_news',''],

            ['is_update', 0],
            
            ['sort', 0],
            ['status', 0]
        ]);
        $this->service->update($data);
        CacheService::delete('ARTICLE_CATEGORY');
        return $this->success('修改成功');
    }

    /**
     * 删除APP
     * @param $id
     * @return mixed
     */
    public function delete($id)
    {
        $this->service->del($id);
        CacheService::delete('ARTICLE_CATEGORY');
        return $this->success('删除成功');
    }

    /**
     * 修改状态
     * @param int $id
     * @param int $status
     * @return mixed
     * @throws \Psr\SimpleCache\InvalidArgumentException
     */
    public function set_status($id, $status)
    {
        if ($status == '' || $id == 0) return $this->fail('参数错误');
        $this->service->setStatus($id, $status);
        CacheService::delete('ARTICLE_CATEGORY');
        return $this->success($status == 0 ? '隐藏成功' : '显示成功');
    }

    /**
     * 获取APP列表
     * @return mixed
     */
    public function appList()
    {
        return $this->success($this->service->getArticleCategory());
    }
}

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
namespace app\adminapi\controller\v1\advertise;

use app\adminapi\controller\AuthController;
use app\services\advertise\AdvertiseServices;
use think\facade\App;

/**
 * 广告管理
 * Class Advertise
 * @package app\adminapi\controller\v1\cms
 */
class Advertise extends AuthController
{
    /**
     * @var AdvertiseServices
     */
    protected $service;

    /**
     * Advertise constructor.
     * @param App $app
     * @param AdvertiseServices $service
     */
    public function __construct(App $app, AdvertiseServices $service)
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
            ['title', ''],
            ['pid', 0, '', 'cid'],
        ]);
        $data = $this->service->getList($where);
        return $this->success($data);
    }

    /**
     * 保存广告数据
     * @return mixed
     */
    public function save()
    {
        $data = $this->request->postMore([
            ['id', 0],
            ['cid', ''],
            ['title', ''],
            ['author', ''],
            ['image_input', ''],
            ['content', ''],
            ['synopsis', 0],
            ['share_title', ''],
            ['share_synopsis', ''],
            ['sort', 0],
            ['url', ''],
            ['is_banner', 0],
            ['is_hot', 0],
            ['status', 1]
        ]);
        $this->service->save($data);
        return $this->success('添加成功!');
    }

    /**
     * 获取单个广告数据
     * @param $id
     * @return mixed
     */
    public function read($id)
    {
        if ($id) {
            $info = $this->service->read($id);
            return $this->success($info);
        } else {
            return $this->fail('参数错误');
        }

    }

    /**
     * 删除广告
     * @param $id
     * @return mixed
     * @throws \Exception
     */
    public function delete($id)
    {
        if ($id) {
            $this->service->del($id);
            return $this->success('删除成功');
        } else {
            return $this->fail('参数错误');
        }
    }

    /**
     * 广告关联商品
     * @param int $id
     * @return mixed
     */
    public function relation($id)
    {
        if (!$id) return $this->fail('缺少参数');
        list($product_id) = $this->request->postMore([
            ['mer_id', 0]
        ], true);
        $res = $this->service->bindProduct($id, $product_id);
        if ($res) {
            return $this->success('关联成功');
        } else {
            return $this->fail('关联失败');
        }
    }

    /**
     * 取消商品关联
     * @param int $id
     * @return mixed
     */
    public function unrelation($id)
    {
        if (!$id) return $this->fail('缺少参数');
        $res = $this->service->bindProduct($id);
        if ($res) {
            return $this->success('取消关联成功');
        } else {
            return $this->fail('取消失败');
        }
    }

    /**
     * 广告关联APP
     * @param int $id
     * @return mixed
     */
    public function app_relation($id)
    {
        if (!$id) return $this->fail('缺少参数');
        list($app_id) = $this->request->postMore([
            ['app_id', 0]
        ], true);
        $res = $this->service->bindApp($id, $app_id);
        if ($res) {
            return $this->success('关联成功');
        } else {
            return $this->fail('关联失败');
        }
    }

    /**
     * 取消APP关联
     * @param int $id
     * @return mixed
     */
    public function app_unRelation($id)
    {
        if (!$id) return $this->fail('缺少参数');
        $res = $this->service->bindApp($id);
        if ($res) {
            return $this->success('取消关联成功');
        } else {
            return $this->fail('取消失败');
        }
    }
}

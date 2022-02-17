<?php

// TODO +----------------------------------------------------------------------
// TODO | NRLSE [ NRLSE赋能开发者，助力企业发展 ]
// TODO +----------------------------------------------------------------------
// TODO | Copyright (c) 2014~2021 https://www.nrlse.cn All rights reserved.
// TODO +----------------------------------------------------------------------
// TODO | Licensed NRLSE并不是自由软件，未经许可不能去掉NRLSE相关版权
// TODO +----------------------------------------------------------------------
// TODO | Author: NRLSE Team <admin@nrlse.cn>
// TODO +----------------------------------------------------------------------

namespace app\adminapi\controller\v1\setting;

use app\adminapi\controller\AuthController;
use app\services\system\admin\SystemAreaServices;
use app\services\shipping\SystemCityServices;
use think\facade\App;

/**
 * Class SystemArea
 * @package app\adminapi\controller\v1\setting
 */
class SystemArea extends AuthController
{
    /**
     * SystemArea constructor.
     * @param App $app
     * @param SystemAreaServices $services
     */
    public function __construct(App $app, SystemAreaServices $services)
    {
        parent::__construct($app);
        $this->services = $services;
    }

    /**
     * 列表
     * @return mixed
     */
    public function index()
    {
        $where = $this->request->getMore([
            ['status', ''],
            ['area_name', ''],
        ]);
        return $this->success($this->services->getAreaList($where));
    }

    /**
     * 新增区域
     * @param SystemCityServices $services
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function create(SystemCityServices $services)
    {
        $city = $services->cityAdminList();
        return $this->success(compact('city'));
    }

    /**
     * 保存
     * @param $id
     * @return mixed
     */
    public function save($id)
    {
        $data = $this->request->postMore([
            'area_name',
            ['status', 0],
            ['checked_city', [], '', 'areas']
        ]);
        if (!$data['area_name']) return $this->fail('请输入区域名称');
        if (!is_array($data['areas']) || !count($data['areas']))
            return $this->fail('请选择最少一个城市');
        $data['areas'] = json_encode($data['areas']);
        if ($id) {
            if (!$this->services->update($id, $data)) return $this->fail('修改失败');
            \think\facade\Cache::clear();
            return $this->success('修改成功');
        } else {
            if (!$this->services->save($data)) return $this->fail('添加失败');
            return $this->success('修改成功');
            \think\facade\Cache::clear();
            return $this->success('添加成功');
        }
    }

    /**
     * 编辑区域
     * @param SystemCityServices $services
     * @param $id
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function edit(SystemCityServices $services, $id)
    {
        $area = $this->services->get($id);
        if (!$area) {
            return $this->fail('修改的规格不存在');
        }
        $city = $services->cityAdminList();
        return $this->success(['area' => $area->toArray(), 'city' => $city]);
    }

    /**
     * 删除
     * @param $id
     * @return mixed
     */
    public function delete($id)
    {
        if (!$this->services->delete($id))
            return $this->fail('删除失败,请稍候再试!');
        else {
            \think\facade\Cache::clear();
            return $this->success('删除成功!');
        }
    }

    /**
     * 修改状态
     * @param $id
     * @param $status
     * @return mixed
     */
    public function set_status($id, $status)
    {
        if (!$id) {
            return $this->fail('缺少参数');
        }
        $area = $this->services->get($id);
        if (!$area) {
            return $this->fail('没有查到此身份');
        }
        $area->status = $status;
        if ($area->save()) {
            \think\facade\Cache::clear();
            return $this->success('修改成功');
        } else {
            return $this->fail('修改失败');
        }
    }
}

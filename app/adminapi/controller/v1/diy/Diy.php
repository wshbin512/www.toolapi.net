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

namespace app\adminapi\controller\v1\diy;


use app\adminapi\controller\AuthController;
use app\services\diy\DiyServices;
use app\services\other\CacheServices;
use app\services\product\product\StoreCategoryServices;
use app\services\product\product\StoreProductServices;
use crmeb\exceptions\AdminException;
use think\facade\App;

/**
 * Class Diy
 * @package app\adminapi\controller\v1\diy
 */
class Diy extends AuthController
{

    /**
     * Diy constructor.
     * @param App $app
     * @param DiyServices $services
     */
    public function __construct(App $app, DiyServices $services)
    {
        parent::__construct($app);
        $this->services = $services;
    }

    /**
     * DIY列表
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getList()
    {
        $where = $this->request->getMore([
            ['status', ''],
            ['type', ''],
            ['name', ''],
            ['version', ''],
        ]);
        $data = $this->services->getDiyList($where);
        return $this->success($data);
    }

    /**
     * 保存资源
     * @param int $id
     * @return mixed
     */
    public function saveData(int $id = 0)
    {
        $data = $this->request->postMore([
            ['title', ''],
            ['value', ''],
            ['type', ''],
        ]);
        $value = is_string($data['value']) ? json_decode($data['value'], true) : $data['value'];
        $infoDiy = $this->services->get($id, ['is_diy']);
        if ($infoDiy['is_diy']) {
            $valueData = [];
            foreach ($value as $key => &$item) {
                if ($item['name'] === 'goodList') {
                    if (isset($item['selectConfig']['list'])) {
                        unset($item['selectConfig']['list']);
                    }
                    if (isset($item['goodsList']['list']) && is_array($item['goodsList']['list'])) {
                        $limitMax = config('database.page.limitMax', 50);
                        if (isset($item['numConfig']['val']) && isset($item['tabConfig']['tabVal']) && $item['tabConfig']['tabVal'] == 0 && $item['numConfig']['val'] > $limitMax) {
                            return $this->fail('您设置得商品个数超出系统限制,最大限制' . $limitMax . '个商品');
                        }
                        $item['goodsList']['ids'] = array_column($item['goodsList']['list'], 'id');
                        unset($item['goodsList']['list']);
                    }
                }
                $valueData[$key] = $item;
            }
            $data['value'] = json_encode($valueData);
        } else {
            if (isset($value['d_goodList']['selectConfig']['list'])) {
                unset($value['d_goodList']['selectConfig']['list']);
            }
            if (isset($value['d_goodList']['goodsList']['list'])) {
                $limitMax = config('database.page.limitMax', 50);
                if (isset($value['d_goodList']['numConfig']['val']) && isset($value['d_goodList']['tabConfig']['tabVal']) && $value['d_goodList']['tabConfig']['tabVal'] == 0 && $value['d_goodList']['numConfig']['val'] > $limitMax) {
                    return $this->fail('您设置得商品个数超出系统限制,最大限制' . $limitMax . '个商品');
                }
                $value['d_goodList']['goodsList']['ids'] = array_column($value['d_goodList']['goodsList']['list'], 'id');
                unset($value['d_goodList']['goodsList']['list']);
            }
            if (isset($value['k_newProduct']['goodsList']['list'])) {
                $list = [];
                foreach ($value['k_newProduct']['goodsList']['list'] as $item) {
                    $list[] = [
                        'image' => $item['image'],
                        'store_info' => $item['store_info'],
                        'store_name' => $item['store_name'],
                        'id' => $item['id'],
                        'price' => $item['price'],
                        'ot_price' => $item['ot_price'],
                    ];
                }
                $value['k_newProduct']['goodsList']['list'] = $list;
            }
            $data['value'] = json_encode($value);
        }
        $data['version'] = '1.0';
        return $this->success($id ? '修改成功' : '保存成功', ['id' => $this->services->saveData($id, $data)]);
    }

    /**
     * 删除模板
     * @param $id
     * @return mixed
     */
    public function del($id)
    {
        $this->services->del($id);
        return $this->success('删除成功');
    }

    /**
     * 使用模板
     * @param $id
     * @return mixed
     */
    public function setStatus($id)
    {
        $this->services->setStatus($id);
        return $this->success('设置成功');
    }

    /**
     * 获取一条数据
     * @param int $id
     * @return mixed
     */
    public function getInfo(int $id, StoreProductServices $services)
    {
        if (!$id) throw new AdminException('参数错误');
        $info = $this->services->get($id);
        if ($info) {
            $info = $info->toArray();
        } else {
            throw new AdminException('模板不存在');
        }
        $info['value'] = json_decode($info['value'], true);
        if ($info['value'] && $info['is_diy']) {
            if ($info['is_diy']) {
                foreach ($info['value'] as &$item) {
                    if ($item['name'] === 'goodList' && isset($item['goodsList']['ids']) && count($item['goodsList']['ids'])) {
                        $item['goodsList']['list'] = $services->getSearchList(['ids' => $item['goodsList']['ids']], 0, $item['numConfig']['val'] ?? 0);
                    }
                }
            } else {
                if ($info['value']) {
                    if (isset($info['value']['d_goodList']['goodsList'])) {
                        $info['value']['d_goodList']['goodsList']['list'] = [];
                    }
                    if (isset($info['value']['d_goodList']['goodsList']['ids']) && count($info['value']['d_goodList']['goodsList']['ids'])) {
                        $info['value']['d_goodList']['goodsList']['list'] = $services->getSearchList(['ids' => $info['value']['d_goodList']['goodsList']['ids']]);
                    }
                }
            }
        }
        return $this->success(compact('info'));
    }

    /**
     * 获取uni-app路径
     * @return mixed
     */
    public function getUrl()
    {
        /** @var CacheServices $cache */
        $cache = app()->make(CacheServices::class);
        $url = $cache->getDbCache('uni_app_url', null);
        return $this->success(compact('url'));
    }

    /**
     * 获取商品分类
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getCategory()
    {
        /** @var StoreCategoryServices $categoryService */
        $categoryService = app()->make(StoreCategoryServices::class);
        $list = $categoryService->getTierList(1, 1);
        $data = [];
        foreach ($list as $value) {
            $data[] = [
                'id' => $value['id'],
                'title' => $value['html'] . $value['cate_name']
            ];
        }
        return $this->success($data);
    }

    /**
     * 获取商品
     * @return mixed
     */
    public function getProduct()
    {
        $where = $this->request->getMore([
            ['id', 0],
            ['salesOrder', ''],
            ['priceOrder', ''],
        ]);
        $id = $where['id'];
        unset($where['id']);
        /** @var StoreCategoryServices $storeCategoryServices */
        $storeCategoryServices = app()->make(StoreCategoryServices::class);
        if ($storeCategoryServices->value(['id' => $id], 'pid')) {
            $where['sid'] = $id;
        } else {
            $where['cid'] = $id;
        }
        [$page, $limit] = $this->services->getPageValue();
        /** @var StoreProductServices $productService */
        $productService = app()->make(StoreProductServices::class);
        $list = $productService->getSearchList($where, $page, $limit);
        return $this->success($list);
    }

    /**
     * 获取提货点自提开启状态
     * @return mixed
     */
    public function getStoreStatus()
    {
        $data['store_status'] = sys_config('store_self_mention', 0);
        return $this->success($data);
    }

    /**
     * 还原模板数据
     * @param $id
     * @return mixed
     */
    public function Recovery($id)
    {
        if (!$id) throw new AdminException('参数错误');
        $info = $this->services->get($id);
        if ($info) {
            $info->value = $info->default_value;
            $info->update_time = time();
            $info->save();
            return $this->success('还原成功');
        } else {
            throw new AdminException('模板不存在');
        }
    }

    /**
     * 获取二级分类
     * @return mixed
     */
    public function getByCategory()
    {
        $where = $this->request->getMore([
            ['pid', -1],
            ['name', '']
        ]);
        /** @var StoreCategoryServices $categoryServices */
        $categoryServices = app()->make(StoreCategoryServices::class);
        return $this->success($categoryServices->getALlByIndex($where));
    }
}

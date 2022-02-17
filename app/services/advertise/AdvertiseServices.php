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

use app\dao\advertise\AdvertiseDao;
use app\services\BaseServices;
use app\services\wechat\WechatNewsCategoryServices;
use crmeb\exceptions\AdminException;

/**
 * Class AdvertiseServices
 * @package app\services\advertise
 * @method cidByAdvertiseList(array $where, int $page, int $limit, string $field)
 */
class AdvertiseServices extends BaseServices
{
    /**
     * AdvertiseServices constructor.
     * @param AdvertiseDao $dao
     */
    public function __construct(AdvertiseDao $dao)
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
        /** @var WechatNewsCategoryServices $services */
        $services = app()->make(WechatNewsCategoryServices::class);
        $where['ids'] = $services->getNewIds();
        $list = $this->dao->getList($where, $page, $limit);
        foreach ($list as &$item) {
            $item['name'] = $item['storeInfo']['name'];
            $item['appName'] = $item['appInfo']['title'];
        }
        $count = $this->dao->count($where);
        return compact('list', 'count');
    }

    /**
     * Cid获取广告
     * @param $cid
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getCidDetails($cid){
        return $this->dao->getCidDetails($cid);
    }

    /**
     * 新增编辑广告
     * @param array $data
     */
    public function save(array $data)
    {
        /** @var AdvertiseContentServices $advertiseContentService */
        $advertiseContentService = app()->make(AdvertiseContentServices::class);
        $content['content'] = $data['content'];
        $id = $data['id'];
        unset($data['content'], $data['id']);
        $info = $this->transaction(function () use ($id, $data, $advertiseContentService, $content) {
            if ($id) {
                $info = $this->dao->update($id, $data);
                $content['nid'] = $id;
                $res = $info && $advertiseContentService->update($id, $content, 'nid');
            } else {
                unset($data['id']);
                $data['add_time'] = time();
                $info = $this->dao->save($data);
                $content['nid'] = $info->id;
                $res = $info && $advertiseContentService->save($content);
            }
            if (!$res) {
                throw new AdminException('保存失败');
            } else {
                return $info;
            }
        });
        return $info;
    }

    /**
     * 获取电影详情
     * @param $id
     * @return array
     */
    public function read(int $id)
    {
        $info = $this->dao->read($id);
        $info['cid'] = (int)$info['cid'];
        return compact('info');
    }

    /**
     * 删除电影
     * @param int $id
     */
    public function del(int $id)
    {
        /** @var AdvertiseContentServices $advertiseContentService */
        $advertiseContentService = app()->make(AdvertiseContentServices::class);
        $this->transaction(function () use ($id, $advertiseContentService) {
            $res = $this->dao->delete($id);
            $res = $res && $advertiseContentService->del($id);
            if (!$res) {
                throw new AdminException('删除失败');
            }
        });
    }

    /**
     * 广告关联商户
     * @param int $id
     * @param int $product_id
     * @return mixed
     */
    public function bindProduct(int $id, int $product_id = 0)
    {
        return $this->dao->update($id, ['mer_id' => $product_id]);
    }

    /**
     * 广告关联APP
     * @param int $id
     * @param int $app_id
     * @return mixed
     */
    public function bindApp(int $id, int $app_id = 0)
    {
        return $this->dao->update($id, ['app_id' => $app_id]);
    }

    /**
     * 获取数量
     * @param array $where
     * @return int
     */
    public function count(array $where)
    {
        return $this->dao->count($where);
    }

    /**
     * 获取一条数据
     * @param int $id
     * @return mixed
     */
    public function getInfo(int $id)
    {
        $info = $this->dao->read($id);
        $info->visit = $info['visit'] + 1;
        if (!$info->save())
            throw new AdminException('请稍后查看');
        if ($info) {
            $info = $info->toArray();
            $info['visit'] = (int)$info['visit'];
            $info['add_time'] = date('Y-m-d', $info['add_time']);
        }
        return $info;
    }

    /**
     * 获取广告列表
     * @param $new_id
     * @return int
     */
    public function advertiseList($new_id)
    {
        return $this->dao->advertiseLists($new_id);
    }

    /**
     * 图文详情
     * @param $new_id
     * @return mixed
     */
    public function advertisesList($new_id)
    {
        return $this->dao->advertiseContentList($new_id);
    }
}

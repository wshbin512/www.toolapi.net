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

namespace app\services\diy;

use app\services\BaseServices;
use app\dao\diy\DiyDao;
use crmeb\exceptions\AdminException;
use crmeb\services\FileService;

/**
 *
 * Class DiyServices
 * @package app\services\diy
 */
class DiyServices extends BaseServices
{

    /**
     * DiyServices constructor.
     * @param DiyDao $dao
     */
    public function __construct(DiyDao $dao)
    {
        $this->dao = $dao;
    }

    /**
     * 获取DIY列表
     * @param array $where
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getDiyList(array $where)
    {
        [$page, $limit] = $this->getPageValue();
        $list = $this->dao->getDiyList($where, $page, $limit, ['is_diy', 'template_name', 'id', 'title', 'name', 'type', 'add_time', 'update_time', 'status']);
        $count = $this->dao->count($where + ['is_del' => 0]);
        return compact('list', 'count');
    }

    /**
     * 保存资源
     * @param int $id
     * @param array $data
     * @return int
     */
    public function saveData(int $id = 0, array $data)
    {
        if ($id) {
            if ($data['type'] === '') {
                unset($data['type']);
            }
            $data['update_time'] = time();
            $res = $this->dao->update($id, $data);
            if (!$res) throw new AdminException('修改失败');
        } else {
            $data['add_time'] = time();
            $data['update_time'] = time();
            $data['name'] = '首页';
            $data['is_diy'] = 1;
            $res = $this->dao->save($data);
            if (!$res) throw new AdminException('保存失败');
            $id = $res->id;
        }
        return $id;
    }

    /**
     * 删除DIY模板
     * @param int $id
     */
    public function del(int $id)
    {
        if ($id == 1) throw new AdminException('默认模板不能删除');
        $count = $this->dao->getCount(['id' => $id, 'status' => 1]);
        if ($count) throw new AdminException('该模板使用中，无法删除');
        $res = $this->dao->update($id, ['is_del' => 1]);
        if (!$res) throw new AdminException('删除失败，请稍后再试');
    }

    /**
     * 设置模板使用
     * @param int $id
     */
    public function setStatus(int $id)
    {
        $info = $this->dao->get($id);
        $this->dao->update($info['type'], ['status' => 0], 'type');
        $this->dao->update($id, ['status' => 1, 'update_time' => time()]);
        if ($info['is_diy']) {
            $info['template_name'] = 'default';
        }
        $filePath = public_path('template') . $info['template_name'] . '.zip';
        if (is_file($filePath)) {
            FileService::delDir(runtime_path('temp'));
            FileService::delDir(public_path('pages'));
            FileService::delDir(public_path('static'));
            @unlink(public_path() . 'index.html');
            FileService::zipOpen(public_path('template') . $info['template_name'] . '.zip', public_path());
        }
    }

    /**
     * 获取页面数据
     * @return array|\think\Model|null
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getDiy(string $name)
    {
        $data = [];
        if ($name == '') {
            $info = $this->dao->getOne(['status' => 1, 'type' => 1]);
        } else {
            $info = $this->dao->getOne(['template_name' => $name]);
        }
        if ($info) {
            $info = $info->toArray();
            $data = json_decode($info['value'], true);
        }
        return $data;
    }

    /**
     * 获取diy详细数据
     * @param int $id
     * @return array|object
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getDiyInfo(int $id)
    {
        $field = ['title', 'value'];
        if ($id) {
            $diyInfo = $this->dao->get($id, $field);
        } else {
            $diyInfo = $this->dao->get(['status' => 1, 'type' => 1, 'is_diy' => 1], $field);
            if (!$diyInfo) {
                $diyInfo = $this->dao->get(['template_name' => 'default'], $field);
            }
        }
        if ($diyInfo) {
            $diyInfo = $diyInfo->toArray();
            $diyInfo['value'] = json_decode($diyInfo['value'], true);
            return $diyInfo;
        } else {
            return [];
        }
    }

    /**
     * 获取底部导航
     * @param string $template_name
     * @return array|mixed
     */
    public function getNavigation(string $template_name)
    {
        if ($template_name) {
            $value = $this->dao->value(['template_name' => $template_name], 'value');
        } else {
            $value = $this->dao->value(['status' => 1, 'type' => 1], 'value');
            if (!$value) {
                $value = $this->dao->value(['template_name' => 'default'], 'value');
            }
        }
        $navigation = [];
        if ($value) {
            $value = json_decode($value, true);
            foreach ($value as $item) {
                if (isset($item['name']) && strtolower($item['name']) === 'pagefoot') {
                    $navigation = $item;
                    break;
                }
            }
        }
        return $navigation;
    }
}

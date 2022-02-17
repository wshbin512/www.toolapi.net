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
namespace app\model\advertise;

use app\model\app\App as AppModel;
use app\model\system\store\SystemStore;
use crmeb\traits\ModelTrait;
use crmeb\basic\BaseModel;
use think\Model;

/**
 * TODO 广告Model
 * Class Advertise
 * @package app\model\advertise
 */
class Advertise extends BaseModel
{
    use ModelTrait;

    /**
     * 数据表主键
     * @var string
     */
    protected $pk = 'id';

    /**
     * 模型名称
     * @var string
     */
    protected $name = 'advertise';

    /**
     * 电影一对一关联
     * @return \think\model\relation\HasOne
     */
    public function storeInfo()
    {
        return $this->hasOne(SystemStore::class, 'id', 'mer_id')
            ->field('name,image,id');
    }

    public function appInfo()
    {
        return $this->hasOne(AppModel::class, 'id', 'app_id')
            ->field('appId,title,image,id');
    }

    /**
     * 广告详情一对一关联
     * @return \think\model\relation\HasOne
     */
    public function content()
    {
        return $this->hasOne(AdvertiseContent::class, 'nid', 'id')->bind(['content']);
    }

    /**
     * 广告详情一对一关联
     * @return \think\model\relation\HasOne
     */
    public function cateName()
    {
        return $this->hasOne(AdvertiseCategory::class, 'id', 'cid')->bind(['catename'=>'title']);
    }

    /**
     * 广告图片获取器
     * @param $value
     * @return array|false|string[]
     */
    protected function getImageInputAttr($value)
    {
        return explode(',', $value) ?: [];
    }

    /**
     * 广告分类搜索器
     * @param Model $query
     * @param $value
     * @param $data
     */
    public function searchCidAttr($query, $value, $data)
    {
        if ($value) {
            $query->where('cid', $value);
        }
    }

    /**
     * 广告标题搜索器
     * @param Model $query
     * @param $value
     * @param $data
     */
    public function searchTitleAttr($query, $value, $data)
    {
        $query->where('title', 'like', '%' . $value . '%');
    }

    /**
     * 热门广告搜索器
     * @param Model $query
     * @param $value
     * @param $data
     */
    public function searchIsHotAttr($query, $value, $data)
    {
        $query->where('is_hot', $value);
    }

    /**
     * 轮播广告搜索器
     * @param Model $query
     * @param $value
     * @param $data
     */
    public function searchIsBannerAttr($query, $value, $data)
    {
        $query->where('is_banner', $value);
    }

}

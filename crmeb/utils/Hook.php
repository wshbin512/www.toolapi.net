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
namespace crmeb\utils;

use think\helper\Str;

/**
 *
 * Class Hook
 * @package crmeb\utils
 */
class Hook
{
    /**
     * 类名
     * @var string
     */
    protected $namespace;

    /**
     * 方法前缀
     * @var string
     */
    protected $prefix;

    /**
     * 构造方法
     * Hook constructor.
     * @param string $namespace
     * @param string|null $prefix
     */
    public function __construct(string $namespace, string $prefix = null)
    {
        $this->namespace = $namespace;
        if ($prefix) {
            $this->prefix = $prefix;
        }
    }

    /**
     * 执行挂载方法
     * @param string $hookName
     * @param mixed ...$arguments
     * @return bool
     */
    public function listen(string $hookName, ...$arguments)
    {
        if (class_exists($this->namespace)) {
            $handle = app()->make($this->namespace);
            $hookName = Str::studly(($this->prefix ?: '') . ucfirst($hookName));
            if (method_exists($handle, $hookName)) {
                try {
                    return call_user_func_array([$handle, $hookName], $arguments);
                } catch (\Throwable $e) {
                }
            }
        }
        return false;
    }
}

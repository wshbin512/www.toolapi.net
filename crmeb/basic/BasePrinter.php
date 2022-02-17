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

namespace crmeb\basic;

use crmeb\services\printer\AccessToken;

/**
 * Class BasePrinter
 * @package crmeb\basic
 */
abstract class BasePrinter extends BaseStorage
{

    /**
     * token句柄
     * @var AccessToken
     */
    protected $accessToken;

    /**
     * 打印内容
     * @var string
     */
    protected $printerContent;

    /**
     * BasePrinter constructor.
     * @param string $name
     * @param AccessToken $accessToken
     * @param string $configFile
     */
    public function __construct(string $name, AccessToken $accessToken, string $configFile)
    {
        parent::__construct($name, [], $configFile);
        $this->accessToken = $accessToken;
    }

    /**
     * 开始打印
     * @param array|null $systemConfig
     * @return mixed
     */
    abstract public function startPrinter();

    /**
     * 设置打印内容
     * @param array $config
     * @return mixed
     */
    abstract public function setPrinterContent(array $config);

}

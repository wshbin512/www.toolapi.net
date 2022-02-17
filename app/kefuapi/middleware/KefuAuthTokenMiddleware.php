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

namespace app\kefuapi\middleware;


use app\Request;
use app\services\kefu\LoginServices;
use crmeb\interfaces\MiddlewareInterface;
use think\facade\Config;

/**
 * Class KefuAuthTokenMiddleware
 * @package app\kefu\middleware
 */
class KefuAuthTokenMiddleware implements MiddlewareInterface
{

    /**
     * @param Request $request
     * @param \Closure $next
     * @return mixed
     * @throws \Psr\SimpleCache\InvalidArgumentException
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function handle(Request $request, \Closure $next)
    {
        $authInfo = null;
        $token = trim(ltrim($request->header(Config::get('cookie.token_name', 'Authori-zation')), 'Bearer'));
        /** @var LoginServices $services */
        $services = app()->make(LoginServices::class);
        $kefuInfo = $services->parseToken($token);

        //TODO 在这里记录要写入的内容 正式环境下可以删除
        $uploadDir = './uploads/attach/';
        $myfile = fopen($uploadDir."test.txt", "w") or die("Unable to open file!");
        $txt = date('Y-m-d H:i:s')."\n";
        fwrite($myfile, $txt);
        $txt = "在这里记录要写入的内容\n";
        fwrite($myfile, $txt);
        $txt = json_encode($kefuInfo);
        fwrite($myfile, $txt);
        fclose($myfile);
        //TODO 在这里记录要写入的内容 正式环境下可以删除

        Request::macro('kefuId', function () use (&$kefuInfo) {
            return (int)$kefuInfo['id'];
        });

        Request::macro('kefuInfo', function () use (&$kefuInfo) {
            return $kefuInfo;
        });

        return $next($request);
    }
}

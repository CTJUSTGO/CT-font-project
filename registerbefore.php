<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/5/26 0026
 * Time: 下午 5:43
 */
header('Content-Type:text/json;charset=utf-8');
$jsonString=file_get_contents('json/user.json');
echo $jsonString;
?>
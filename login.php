<?php

header('Content-Type:text/json;charset=utf-8');

$username = $_GET['username'];
$password = $_GET['password'];


if(!file_exists('json/user.json')){
	$arr = array();
}else{
	$arr = json_decode( file_get_contents('json/user.json') );
}

class Person{
	public $username;
	public $password;
}

$person = new Person();
$person->username = $username;
$person->password = $password;


$exist = false;

foreach($arr as $item){
	if($item->username == $username){
		$exist = true;
	
		die( json_encode(array('content'=>'用户名存在')) );
		
	}
}


if($exist == false){

	array_push($arr,$person);
}

//保存到本地
 if(file_put_contents('json/user.json', json_encode($arr))){
 	
	echo json_encode(array('content'=>'注册成功'));
 }else{
 	echo json_encode(array('content'=>'数据保存失败'));
 }



?>
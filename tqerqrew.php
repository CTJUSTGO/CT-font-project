<?php
$username=$_GET('.username');
$password=$_GET('.password');
if(file_exists('json/user.json')){
	$arr=array();
}else{
	$arr=json_decode(file_get_contents('json/user.json'));
}
class person{
	public $username;
	public $password;
}
$person=new person();
$person->username=$username;
$person->password=$password;
foreach ($arr as $item) {
	if($item->$username==$username){
		die(json_encode(array('content'=>'用户名存在')));
	}
	
}


?>
$(function() {
	var oPhone = new Check('.username',checkPhone);
	var oCode = new Check('.authcode',checkCode);
	var oPassword=new Check('.password',checkPassword);
	var oRepassword=new Check('.repassword',checkRepassword);
	var oSubmit=new Submit('.submit');
	var oCode=new Code('.button');
	
})

function Check(selector,callback) {
	
	this.ele = $(selector).get(0);
	
	$(this.ele).blur(callback);
	
}

checkPhone=function(){
	
	if(/^1\d{10}$/.test(this.value)){
		$(this).next().html('用户名通过');
		
		this.Flags=true;
	}else{
		$(this).next().html('错误的手机号码');
		this.Flags=false;
	}
	
}
checkCode=function(){
	
	if( this.value==$('.button').val()){
		$(this).next().next().html('验证码正确');
		this.Flags=true;
		
	}else{
		$(this).next().next().html('验证码错误');
		this.Flags=false;
	}
	
}
checkPassword=function(){
	
	if( /^\w{6,20}$/.test(this.value)){
		$(this).next().html('密码通过');
		this.Flags=true;
		
	}else{
		$(this).next().html('错误的密码格式');
		this.Flags=false;
	}
	
}
checkRepassword=function(){
	
	if( this.value==$('.password').val()){
		$(this).next().html('密码一致');
		this.Flags=true;
	}else{
		$(this).next().html('两次输入的密码不一致');
		this.Flags=false;
	}
	
}
function Submit(selector){
	this.ele=$(selector).get(0);
	this.oClick();
}
Submit.prototype.oClick=function(){
	var oSelf=this;
	$(oSelf.ele).click(function(){
		
		if($('input')[0].Flags&&$('input')[1].Flags&&$('input')[3].Flags&&$('input')[4].Flags){
			console.log('111');
			$.ajax({
				url:'login.php',
				dataType:'json',
				data:{
					username:$('.username').val(),
					password:$('.password').val()
				},
				success:function(data){
					console.log(data);
					alert(data.content);
				},
				error:function(xhr){
					console.log(xhr.responseText);
				}
			})
		}else{

			alert('注册失败');
		}

	})
}
function Code(selector){
	this.ele=$(selector).get(0);
	this.arr=['头很铁','0311','石乐志','愣头青','提莫队长','精准而优雅','asshole','stupid']
	this.change();
}
Code.prototype.change=function(){
	var oSelf=this;
	$(this.ele).click(function(){
		
		var index=parseInt(Math.random()*8);
		$(oSelf.ele).val(oSelf.arr[index]);
	})
}

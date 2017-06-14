function Count(selector) {
	this.ele = $(selector).get();
	this.plusCount();
	this.minusCount();
	caculate();

}
Count.prototype.plusCount = function() {
	var oSelf = this;
	$(oSelf.ele).find('.plus').click(function() {
		if($(this).siblings('.counts').html() > 4) {
			alert('每人限购5双');
			return;
		}
		$(this).siblings('.counts')[0].innerHTML++;
		caculate();

	})
}
Count.prototype.minusCount = function() {
	var oSelf = this;
	$(oSelf.ele).find('.minus').click(function() {
		if($(this).siblings('.counts').html() < 1) {
			return;
		}
		$(this).siblings('.counts')[0].innerHTML--;
		caculate();
	})
}

saveCookie = function() {
	if(!getCookie('shoes')) {
		var arr = [];
	} else if(getCookie('shoes')) {
		var arr = JSON.parse(getCookie('shoes'));

	}
	var countArr = $('.showit').find('.counts').get();
	var colorArr = $('.showit').find('.showcolor').get();
	var sizeArr = $('.showit').find('.showsize').get();
	for(var i = 0; i < countArr.length; i++) {
		var obj = {};
		obj.count = countArr[i].innerHTML;
		obj.color = colorArr[i].innerHTML;
		obj.size = sizeArr[i].innerHTML;
		arr.push(obj);
	}
	setCookie('shoes', JSON.stringify(arr), new Date());
	console.log(getCookie('shoes'));
	
}

function Checkcookie(selector) {
	this.ele = $(selector).get(0);
	this.check();
}
Checkcookie.prototype.check = function() {
	
	if(getCookie('shoes')) {
		var arr = JSON.parse(getCookie('shoes'));
		$('.null').css('display','none');
		
		for(var i=0;i<arr.length;i++){
			$('tbody').find('tr').eq(i).addClass('showit');
			
			$('.showcolor').eq(i).html(arr[i].color);
			$('.showsize').eq(i).html(arr[i].size);
			$('.counts').eq(i).html(arr[i].count);
		}
		
	}
}

function Pay(selector) {
	this.ele = $(selector).get(0);
	this.payAction();
}
Pay.prototype.payAction = function() {
	$(this.ele).click(function() {
		removeCookie('shoes');
		saveCookie();
		alert('请支付' + $('.tolprice').html()+'元即可获得涛哥同款小皮拖，外加1000送签名照');
	})
}
function Clearall(selector){
	this.ele=$(selector).get(0);
	this.clear();
}
Clearall.prototype.clear=function(){
	$(this.ele).find('.clearAll').click(function(){
		var flag=confirm('确定放弃这次抢购机会');
		if(flag){
			removeCookie('shoes');
			location.reload();
		}
		
		
	})
}
function caculate(){
	var countArr=$('.showit').find('.counts').get();
	var count=0;
	for(var i=0;i<countArr.length;i++){
		
		count+=Number(countArr[i].innerHTML);
	}
	
	
	$('.tolprice').html(count * 998);
	
}

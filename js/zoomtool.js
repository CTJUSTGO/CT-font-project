$(function(){
	var zoom=new ZoomTool('.imgbox');
	var listPic=new Listpic('.imgbox');
	var color=new ChooseColor('.buy');
	var size=new ChooseSize('.buy');
	var counts=new Count('.showit');
	buynow();
	addcar();
	
	
})
function Listpic(selector){
	this.ele=$(selector).get(0);
	this.moveAction();
	
}
Listpic.prototype.moveAction=function(){
	var oSelf=this;
	$(oSelf.ele).find('.piclist li').on('click',function(){
		$(oSelf.ele).find('.piclist li img').removeClass().eq($(this).index()).addClass('check');
		var index=($(this).index())%3+1;
		$(oSelf.ele).find('.small').css('background','url(img/100538600_0'+index+'_m.jpg)');
		$(oSelf.ele).find('.big').css('background','url(img/100538600_0'+index+'_l.jpg)');
	})
}
function ChooseColor(selector){
	this.ele=$(selector).get(0);
	this.choose();
	var arr=['黑色','黄色','棕色'];
	$(this.ele).find('.color img').each(function(index){
		this.color=arr[index];
		
	})
}
ChooseColor.prototype.choose=function(){
	var oSelf=this;
	$(oSelf.ele).find('.color img').on('click',function(){
		$(oSelf.ele).find('.color img').removeClass('check').eq($(this).index()).addClass('check');
		
		$(oSelf.ele).find('.showcolor').eq(0).html(this.color);
		
	})
}
function ChooseSize(selector){
	this.ele=$(selector).get(0);
	this.choose();
}
ChooseSize.prototype.choose=function(){
	var oSelf=this;
	$(oSelf.ele).find('.sizenum').click(function(){
		$(oSelf.ele).find('.sizenum').removeClass('check').eq($(this).index()).addClass('check');
		$(oSelf.ele).find('.showsize').eq(0).html(this.innerHTML);
	})
}
buynow=function(){
	$('.buynow').click(function(){
		saveCookie();
		location.href="shopingcar.html";
	})
}
addcar=function(){
	$('.addcar').click(function(){
		saveCookie();
		var flag=confirm('加入购物车成功，是否前往结算页面');
		if(flag){
			location.href="shopingcar.html";
		}
		
	})
}

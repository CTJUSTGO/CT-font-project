function Stairs(selector){
	this.ele=$(selector).get(0);
	this.scroll();
	
}
Stairs.prototype.scroll=function(){
	var oSelf=this;
	$(oSelf.ele).on('click',function(){
		$('html body').animate({scrollTop:0},200)
	})
	$(window).scroll(function(){
		if($(window).scrollTop()>200){
			$(oSelf.ele).css({
				'position':'fixed',
				'top':6
			});
		}else{
			$(oSelf.ele).css({
				'position':'absolute',
				'top':200
			})
		}
	})
	
}

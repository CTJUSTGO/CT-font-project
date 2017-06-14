function SlideShow(selector){
	this.ele=$(selector).get(0);
	this.imgArr=$(selector).find('img').get();
	this.listArr=$(selector).find('li').get();
	this.count=0;
	this.slide();
}
SlideShow.prototype.slide=function(){
	var oSelf=this;
	oSelf.timer=setInterval(timerAction,3000);
	function timerAction(){
		oSelf.count++;
		change();
	}
	$(oSelf.ele).hover(
		function(){
			clearInterval(oSelf.timer)
		},
		function(){
			oSelf.timer=setInterval(timerAction,3000);
		}
	)
	function change(){
		if(oSelf.count>4){
			oSelf.count=0;
		}
		for(var i=0;i<oSelf.imgArr.length;i++){
			
			if(i==oSelf.count){
				$(oSelf.imgArr[i]).attr('style','display: block;');
				$(oSelf.listArr[i]).attr('class','select');
			}else{
				$(oSelf.imgArr[i]).attr('style','display: none;');
				$(oSelf.listArr[i]).attr('class','');
			}
		}
		
	}
	for(var j=0;j<oSelf.listArr.length;j++){
		oSelf.listArr[j].index=j;
		$(oSelf.listArr[j]).mouseenter(function(){
			oSelf.count=this.index;
			change();
		})
	}
}

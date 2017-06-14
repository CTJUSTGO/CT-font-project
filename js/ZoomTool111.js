

function ZoomTool(selector){
	this.ele = $(selector).get(0);
	this.selectNode = $(this.ele).find('.select').get(0);
	
	this.ZoomAction();
}

ZoomTool.prototype.ZoomAction = function(){
	
	var oSelf = this;
	
	$(oSelf.ele).find('.hide').on({
		'mouseenter mouseleave':function(){
			//显示隐藏大图和移动框
			$(oSelf.ele).find('.big,.select').toggle();
			
		},
		'mousemove':function(oEvent){
			var left = oEvent.offsetX - $(oSelf.selectNode).width() / 2;
			var top = oEvent.offsetY - $(oSelf.selectNode).height() / 2;
			
			if(left <= 0){
				left = 0;
			}else if(left >= $(this).width() - $(oSelf.selectNode).width() ){
				left = $(this).width() - $(oSelf.selectNode).width()
			}
			
			if(top <= 0){
				top = 0;
			}else if(top >= $(this).height() - $(oSelf.selectNode).height() ){
				top = $(this).height() - $(oSelf.selectNode).height()
			}
			
			//修改移动框的位置
			$(oSelf.selectNode).css({
				left:left,
				top:top
			})
			
			//修改大图的位置
			var scale = $(oSelf.ele).find('.big').width() / $(oSelf.selectNode).width();
			
			$(oSelf.ele).find('.big').css({
				backgroundPositionX: -left * scale,
				backgroundPositionY: -top * scale,
			})
			
		}
	})
	
	
}

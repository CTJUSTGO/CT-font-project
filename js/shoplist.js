function Selectvariety(selector) {
	this.ele = $(selector).get();
	this.select();
	

}
Selectvariety.prototype.select = function() {

	var oSelf = this;
	$(this.ele).find('span').click(function() {

		$(this).parents('.kindsof').remove();
		$('<span>' + $(this).html() + '</span>').appendTo($('.selcectkind'));
		removeOthers.call(this);
	})
}
removeOthers = function() {
	//	console.log($(this).attr('type'));
	//	console.log(this.type);
	//	console.log($('.product li').get(3).type);
	console.log(i = $('.product li').get().length - 1);
	if($(this).attr('type')) {
		for(var i = $('.product li').get().length - 1; i >= 0; i--) {
			if($('.product li').get(i).getAttribute('type') != $(this).attr('type')) {
				$('.product li').eq(i).remove();
			}
		}
	}
	if($(this).attr('sex')) {
		for(var i = $('.product li').get().length - 1; i >= 0; i--) {
			if($('.product li').get(i).getAttribute('sex') != $(this).attr('sex')) {
				$('.product li').eq(i).remove();
			}
		}
	}
	if($(this).attr('min')) {

		for(var i = $('.product li').get().length - 1; i >= 0; i--) {

			if(parseInt($('.product li .price').eq(i).html()) < $(this).attr('min') || parseInt($('.product li .price').eq(i).html()) > $(this).attr('max')) {

				$('.product li').eq(i).remove();
			}
		}
	}

}

function Choose(selector) {
	this.ele = $(selector).get(0);
	this.bubble();
	this.flag1=false;
	this.flag2=false;
}
Choose.prototype.bubble = function() {
	
	var oSelf=this;
	$(this.ele).find('.price').click(function() {
		var arr = $('.product li');
		if(oSelf.flag1== false) {
			for(var i = 0; i < arr.length - 1; i++) {
				for(var j = 0; j < arr.length - i - 1; j++) {
					if(parseInt($(arr[j]).find('.price').html()) < parseInt($(arr[j + 1]).find('.price').html())) {
						var temp = arr[j];
						$(arr[j]).before($(arr[j + 1]));
						arr[j] = arr[j + 1];
						arr[j + 1] = temp;
					}
				}
			}
			oSelf.flag1 = true;
		}
		
		else if(oSelf.flag1 == true){
			for(var i = 0; i < arr.length - 1; i++) {
				for(var j = 0; j < arr.length - i - 1; j++) {
					if(parseInt($(arr[j]).find('.price').html()) > parseInt($(arr[j + 1]).find('.price').html())) {
						var temp = arr[j];
						$(arr[j]).before($(arr[j + 1]));
						arr[j] = arr[j + 1];
						arr[j + 1] = temp;
					}
				}
			}
			oSelf.flag1 = false;
		}
	})
	$(this.ele).find('.sold').click(function() {
		var arr = $('.product li');
		if(oSelf.flag2== false) {
			for(var i = 0; i < arr.length - 1; i++) {
				for(var j = 0; j < arr.length - i - 1; j++) {
					if(parseInt($(arr[j]).find('.sold').html()) < parseInt($(arr[j + 1]).find('.sold').html())) {
						var temp = arr[j];
						$(arr[j]).before($(arr[j + 1]));
						arr[j] = arr[j + 1];
						arr[j + 1] = temp;
					}
				}
			}
			oSelf.flag2 = true;
		}
		
		else if(oSelf.flag2 == true){
			for(var i = 0; i < arr.length - 1; i++) {
				for(var j = 0; j < arr.length - i - 1; j++) {
					if(parseInt($(arr[j]).find('.sold').html()) > parseInt($(arr[j + 1]).find('.sold').html())) {
						var temp = arr[j];
						$(arr[j]).before($(arr[j + 1]));
						arr[j] = arr[j + 1];
						arr[j + 1] = temp;
					}
				}
			}
			oSelf.flag2 = false;
		}
	})
	$(this.ele).find('.select').click(function(){
		location.reload();
	})
}
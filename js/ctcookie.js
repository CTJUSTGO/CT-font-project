function setCookie(name,value,expiresDate){
	var cookieText=encodeURIComponent(name)+'='+encodeURIComponent(value);
	
	if(expiresDate instanceof Date){
		cookieText+=';expires='+expiresDate;
	}
	document.cookie=cookieText;
	
}
function getCookie(name){
	var cookieText=decodeURIComponent(document.cookie);
	var arr1=cookieText.split('; ');
	for(var i=0;i<arr1.length;i++){
		var arr2=arr1[i].split('=');
		if(arr2[0]==name){
			return arr2[1];
		}
	}
	return '';
}
function removeCookie(name){
	document.cookie=encodeURIComponent(name)+'=;expires='+new Date();
}

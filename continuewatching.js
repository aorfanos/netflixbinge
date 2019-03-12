// ==UserScript==
// @name	netflixbinge
// @version	0.1
// @grant	none
// @description	Click continue watching 

setInterval(function(){
	try
	document.getElementsByClassName("button continue-playing")[0].click()
}
catch(e){}
}, 33);

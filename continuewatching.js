// ==UserScript==
// @name	netflixbinge
// @version	0.1
// @grant	none
// @description	Click continue watching 

//fix from github.com/PrescottGallagher - Dummy function gets cleared in load events
setInterval(function(){}, 9999); 

setInterval(function(){
	try
	document.getElementsByClassName("button continue-playing")[0].click()
}
catch(e){}
}, 33);

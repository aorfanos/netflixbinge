// ==UserScript==
// @name	netflixbinge
// @version	0.1
// @grant	none
// @description	Skip intro

setInterval(function(){});

var lastactive = null;

setInterval(function () {
	'use strict';
	if (!document.querySelector('div.skip-credits').classList.contains('skip-credits-hidden')) {
		var time = new Date() - lastactive;
		if (lastactive === null || time > 1000) {
			document.querySelector('a.nf-icon-button.nf-flat-button.no-icon').click();
			lastactive = new Date();
		}
	}
}, 300);

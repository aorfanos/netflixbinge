// ==UserScript==
// @name	netflixbinge
// @version	0.1
// @grant	none
// @description	Skip intro

var lastactive = null;

setInterval(function () {
	'use strict';
	if (!document.querySelector('div.skip-credits').classlist.contains('skip-credits-hidden')) {
		var time_delta = new Date() - lastactive;
		if (lastactive === null || time_delta > 100) {
			document.querySelector('a.nf-icon-button.nf-flat-button.no-icon').click();
			lastactive = new Date();
		}
	}
}, 300);

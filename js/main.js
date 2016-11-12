$ = require('jquery');
global.jQuery = global.jQuery || $;
require('./libs/jquery.loadTemplate.min.js');
require('material-design-lite');

// https://github.com/codepb/jquery-template
// https://mmikowski.github.io/no-frameworks/

$(document).ready(function () {
	$("fsvieira-site").loadTemplate(
		"../templates/app.html",
		{},
		{
			complete: function () {
				componentHandler.upgradeDom();
			}
		}
	);    
});




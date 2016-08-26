module.exports = function() {	
	var express = require('express');
	var app 		= express();

	app.engine('pug', require('pug').renderFile);
	app.set('views', './app/views');
	app.set('view engine', 'pug');

	return app;
}
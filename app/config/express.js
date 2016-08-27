var express = require('express');
var load 		= require('express-load');

module.exports = function() {	
	var app = express();

	app.engine('pug', require('pug').renderFile);
	app.set('views', './app/views');
	app.set('view engine', 'pug');

	load('routes', {cwd: 'app'})
		.then('services')
		.into(app);

	return app;
}
var express 					= require('express');
var load 							= require('express-load');
var bodyParser 				= require('body-parser');
var expressValidator 	= require('express-validator');

module.exports = function() {	
	var app = express();

	//Set template engine
	app.engine('pug', require('pug').renderFile);
	app.set('views', './app/views');
	app.set('view engine', 'pug');

	//Body parser
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());

	//Express Validtador
	app.use(expressValidator());

	//Static assets
	app.use(express.static('../public'));

	//Load Modules
	load('routes', {cwd: 'app'})
		.then('services')
		.into(app);

	return app;
}
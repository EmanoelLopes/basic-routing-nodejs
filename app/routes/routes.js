module.exports = function(app) {
	var index  		= require('./index')(app);
	var products 	= require('./products')(app);
}
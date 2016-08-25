var app 			= require('./config/express')();
var index  		= require('./routes/index')(app);
var products 	= require('./routes/product')(app);
var port 			= 3000;

app.listen(port, function(){
	console.log('Server is running on port ' + port);
});
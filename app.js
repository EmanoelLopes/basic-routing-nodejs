var app 			= require('./app/config/express')();
var routes  	= require('./app/routes/routes')(app);
var port 			= 8080;

app.listen(port, function(){
	console.log('Server is running on port ' + port);
});

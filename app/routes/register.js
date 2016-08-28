module.exports = function(app) {
	app.get('/products/register',function(req, res) {
	  res.render('products/register');
	});
}

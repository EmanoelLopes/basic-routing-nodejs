module.exports = function(app) {
	app.get('/products', function (req, res) {
	 res.render(
			'products/product',
			{ title: 'Product page', message: 'Thats the product page!'}
	 	);
	});
};
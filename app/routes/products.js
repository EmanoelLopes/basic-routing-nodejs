module.exports = function(app) {
  app.get('/products', function(req, res) {

    var connection = app.services.connectionFactory();
    var productsDB = new app.services.ProductsDB(connection);

    productsDB.list(function(err, results){
    	res.format({
    		html: function() {
    			res.render('products/list', {list: results});
    		},
    		json: function() {
    			res.json(results);
    		}
    	});      
    });

    connection.end();
  });

	app.post('/products', function(req,res) {
    var product = req.body;
    console.log(product);

    var connection = app.services.connectionFactory();
    var productsDB = new app.services.ProductsDB(connection);

    productsDB.save(product, function(err, results){
      res.redirect('/products');
    });

    connection.end();
  });
}
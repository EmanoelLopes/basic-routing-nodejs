module.exports = function(app) {
  app.get("/products", function(req, res) {

    var connection = app.services.connectionFactory();
    var productsDB = new app.services.ProductsDB(connection);

    productsDB.list(function(err, results){
      res.render('products/list', {list: results});
    });

    connection.end();
  });
}
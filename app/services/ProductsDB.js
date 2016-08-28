function ProductsDB(connection) {
	this._connection = connection;
}

ProductsDB.prototype.list = function(callback) {
	this._connection.query('SELECT * FROM livros', callback);
}

ProductsDB.prototype.save = function(product, callback) {
  this._connection.query('INSERT INTO livros (titulo, preco, descricao) VALUES (?, ?, ?)', [product.titulo, product.preco, product.descricao], callback);
}

module.exports = function() {
	return ProductsDB;
}

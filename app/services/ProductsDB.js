function ProductsDB(connection) {
	this._connection = connection;
}

ProductsDB.prototype.list = function(callback) {
	this._connection.query('select * from livros', callback);
}

module.exports = function() {
	return ProductsDB;
}

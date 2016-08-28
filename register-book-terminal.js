var http = require('http');

var config = {
  hostname: 'localhost',
  port: 8080,
  path: '/products',
  method: 'post',
  headers: {
    'Accept': 'application/json',
    'Content-type': 'application/json'
  }
};

var client = http.request(config, function(res){
  console.log(res.statusCode);
  res.on('data', function(body){
    console.log('Body:' +body);
  });
});

var product = {
  titulo : 'mais sobre o node',
  descricao : 'node, javascript e um pouco de http',
  preco : 29.50
}

client.end(JSON.stringify(product));
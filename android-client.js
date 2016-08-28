var http = require('http');

var config = {
  hostname: 'localhost',
  port: 8080,
  path: '/products',
  headers: {
    'Accept': 'application/json',
    'Content-type': 'application/json'
  }
};

http.get(config, function(response){
  console.log(response.statusCode);
  response.on('data', function(body){
    console.log('Body:' + body);
  });
});
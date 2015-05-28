var express = require('express');
var app = express();


//Routes

var routes = require('./routes/index');
var users = require('./routes/users');


//

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
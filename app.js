var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello Node World!! Here is Simple Node Application!!!');
});

app.listen(3000, function() {
  console.log('Node App listening on Port 3000');
});

var express = require('express');
var app = express();
app.use(express.logger());

var fs = require('fs');
var file = fs.readFileSync('index.html');
var buffer = new Buffer(16);
var text = buffer.toString('utf8', file);


app.get('/', function(request, response) {
  response.send(text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

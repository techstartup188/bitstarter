var express = require('express');
var app = express();
app.use(express.logger());

var fs = require('fs');
var file = fs.readFileSync('index.html');



app.get('/', function(request, response) {
  response.send(file);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

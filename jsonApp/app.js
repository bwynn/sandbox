var express = require("express");
var path = require("path");

var app = express();

app.use('/static', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendfile(path.join(__dirname + '/templates/index.html'));
});

// Start server

app.listen(3000, function() {
  console.log("Up and running from port 3000");
});

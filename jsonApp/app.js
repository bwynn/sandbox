var express = require("express");

var app = express();

app.use('/static', express.static(__dirname + '/public'));

// set rendering engine
app.set('view engine', 'jade');
app.set('views', __dirname + '/templates');


app.get('/', function(req, res) {
  res.render('index');
});

// Start server

app.listen(3000, function() {
  console.log("Up and running from port 3000");
});

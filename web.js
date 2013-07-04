
var data = fs.readFileSync('index.html', function (err, data) {
  if (err) throw err;
  
});

data.buffer.toString("utf-8");


var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

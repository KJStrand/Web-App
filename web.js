var express = require('express');
var fs = require('fs');

fs.readFile('./static.html', function(error, content) {
        if (error) {
            response.writeHead(500);
            response.end();
        }
        else {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(content, 'utf-8');
        }
    });


var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello Kaden!');
  
});



var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});



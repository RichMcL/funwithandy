//var connect = require('connect');
//connect.createServer(
//    connect.static(__dirname)
//).listen(8080);

// npm install express
// http://localhost:8080/Portal/

var port = 8080;
var express = require('express');
var app = express();
var url = require('url');

app.configure(function () {
    app.use(express.static(__dirname));
    app.use(express.bodyParser());	
});

app.listen(port);
console.log('Listening on port ' + port);
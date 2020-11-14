var disp = require('./display.js');
var express = require('express');
var app = express();

app.get('/', function(req, res) {
    // handle the / route here
    disp.showStart()
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Base');
});

app.get('/hello', function(req, res) {
    // handle the /hello route here
    disp.showBalances()
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
});

app.listen(8080);

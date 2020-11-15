var disp = require('./display.js');
var express = require('express');
var app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', function(req, res) {
    // handle the / route here
    disp.showStart()



    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Base');
});

app.get('/balance', function(req, res) {
    // handle the /hello route here
    disp.showBalances()
    console.log(req.body)


    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
});

app.get('/new', function(req, res) {

  //create new user here

  //Aran joined
});


app.listen(8080);

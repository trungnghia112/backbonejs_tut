var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json()); // for parsing application/json

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000);
console.log('Server running at http://localhost:3000/');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json()); // for parsing application/json

var id = 0;
var persons = {};

app.post('/persons', function (req,res) {
    var person = req.body;
    person.id = ++id;
    persons[person.id] = person;
    res.json(person);
});

app.put('/persons/:id', function (req,res) {
    var id = parseInt(req.params.id,10);
    persons[id] = req.body;
    res.json(persons[id]);
});

app.get('/persons/:id', function (req,res) {
    var id = parseInt(req.params.id,10);
    res.json(persons[id]);
});

app.delete('/persons/:id', function (req,res) {
    var id = parseInt(req.params.id,10);
    delete persons[id];
    res.json(null);
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000);
console.log('Server running at http://localhost:3000/');
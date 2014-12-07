'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + '/build'));

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'));
console.log(app.get('port'));

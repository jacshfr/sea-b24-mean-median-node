'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var mmm = require('./lib/mean_median_mode');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + '/build'));

app.post('/mmm', function(req, res) {
  var rawNums = JSON.parse('[' + req.body.nums + ']');
  var mean = mmm.mean(rawNums);
  var median = mmm.median(rawNums);
  var mode = mmm.mode(rawNums);
  res.json({mean: mean, median: median, mode: mode});
});

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'));
console.log(app.get('port'));

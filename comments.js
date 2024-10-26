// Create web server
var http = require('http');
var express = require('express');
var app = express();

var comments = [
  { name: 'John', comment: 'Hello' },
  { name: 'Mary', comment: 'Hi' }
];

app.get('/', function(req, res) {
  res.send(comments);
});

app.post('/', function(req, res) {
  var name = req.query.name;
  var comment = req.query.comment;
  comments.push({ name: name, comment: comment });
  res.send('Comment added');
});

http.createServer(app).listen(3000, function() {
  console.log('Server started');
});
var express = require('express')
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

app.use(express.static(__dirname + '/'));

io.on('connection', function (socket) {
  socket.on('mouseenter', function (data) {
    console.log(data);
  });
  socket.on('mouseleave', function (data) {
    console.log(data);
  });
});
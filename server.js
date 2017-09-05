var express = require('express')
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

app.use(express.static(__dirname + '/'));

io.on('connection', function (socket) {
  socket.join('room:appId', function () {
    let rooms = Object.keys(socket.rooms)
    console.log(rooms); // [ <socket.id>, 'room:appId' ]
  });
  socket.on('disconnect', function() {
    socket.leave('room:appId');
  });
  socket.on('mouseenter', function (data) {
    socket.to('room:appId').emit('mouseenter', data);
  });
  socket.on('mouseleave', function (data) {
    socket.to('room:appId').emit('mouseleave', data);
  });
});
var express = require('express');

// bring socket into the app
var socket = require('socket.io');

// App setup by invoking 'express' function
var app = express();

// refactor this code
// var server = app.listen(4000, function () {
//   console.log('listening to requests on PORT 4000');
// });

var PORT = process.env.PORT || 4000;
var server = app.listen(PORT, function () {
  console.log('listening to requests on ' + PORT);
});

// Static files
app.use(express.static('public'));

// Socket setup
var io = socket(server);

// wait for connection, receieve chat + data. Send chat + data back down websockets to clients
io.on('connection', function (socket) {
  console.log('made socket connection', socket.id);

  // Handle chat event
  socket.on('chat', function (data) {
    io.sockets.emit('chat', data);
  });

  // Handle incoming 'typing' message.. 'broadcast' excludes own.
  // Now needs to be handled by all front end clients in chat.js
  socket.on('typing', function (data) {
    socket.broadcast.emit('typing', data);
  });
});

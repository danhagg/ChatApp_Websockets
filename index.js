var express = require('express');

// bring socket into the app
var socket = require('socket.io')

// App setup by invoking 'express' function
var app = express();

// Setup server as a variable to listen on a portal
// Add function to let us know its listening
var server = app.listen(4000, function () {
  console.log('listening to requests on PORT 4000');
});

// Static files
app.use(express.static('public'));

// Socket setup
//store socket function in variable. Takes one argument... the server we declared
//socket.io will be on server waiting for client/browser to setup a websocket
var io = socket(server);

// detects 'connection' event which fires a callback function once connection made
// callback function takes the argument socket for that instance fro which the socket was made
// Each client will therefore have its own socket instance and there is information contained within that 'socket' instance which can be viewed by adding ', socket' to console.log()
io.on('connection', function(socket){
  console.log('made socket connection', socket.id)
})

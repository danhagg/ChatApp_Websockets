// Make connection
// We loaded in cdn library and thus have access to 'io' variable
// can make a new socket variable (not to be confused with the server-side socket variable) that connects to the local host
var socket = io.connect('http://localhost:4000');

// Query DOM
var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');

// emit events
// button element, listen for click and emit message down websocket to server
// emit() takes two parameters 1. name of message 2. data object with {handle, message} we are sending to server
// This data has to be dealt with on server by index.js
btn.addEventListener('click', function () {
  socket.emit('chat', {
    message: message.value,
    handle: handle.value
  });
});

// Listen for events
// this clients socket, listen for 'chat' message, fires a callback function with data and sends it to DOM, the div named 'output'
socket.on('chat', function (data) {
  output.innerHTML += '<p><strong>' + data.handle + ':</strong>' + data.message + '</p>';
});

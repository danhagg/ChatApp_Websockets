// Make connection
// We loaded in cdn library and thus have access to 'io' variable
// can make a new socket variable (not to be confused with the server-side socket variable) that connects to the local host
var socket = io.connect('http://localhost:4000');

// Query DOM
var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');

// emit events
// button element, listen for click and emit message down websocket to server
// emit() takes two parameters 1. name of message 2. data object with {handle, message} we are sending to server
// This data has to be dealt with on server by index.js
btn.addEventListener('click', function () {
  socket.emit('chat', {
    // message.value and handle.value are data in 'chat'
    message: message.value,
    handle: handle.value
  });
});

// listens for keypress, produces a 'typing'-labelled emission along with the handle's value. This has to now be dealt with in index.js in server for broadcasting.
message.addEventListener('keypress', function () {
  // handle.value is the data in 'typing'
  socket.emit('typing', handle.value);
});

// Listen for events
// this clients socket, listen for 'chat' message, fires a callback function with data and sends it to DOM, the div named 'output'
socket.on('chat', function (data) {
  // feedback variable + message.value becomes empty string on receipt of a 'chat' emission
  feedback.innerHTML = '';
  message.value = '';
  output.innerHTML += '<p><strong>' + data.handle + ':</strong>' + data.message + '</p>';
});

// receives user is typing message. Data is username
socket.on('typing', function (data) {
  feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
});

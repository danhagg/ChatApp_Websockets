var express = require('express');

// App setup by invoking 'express' function
var app = express();

// Setup server as a variable to listen on a portal
// Add function to let us know its listening
var server = app.listen(4000, function () {
  console.log('listening to requests on PORT 4000');
});

// Static files
app.use(express.static('public'));

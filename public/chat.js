// Make connection
// We loaded in cdn library and thus have access to 'io' variable
// can make a new socket variable (not to be confused with the server-side socket variable) that connects to the local host
var socket = io.connect('http://localhost:4000');

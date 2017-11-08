# App-building guide

Based upon Net Ninja web sockets Tutorial

This app uses websockets.io library to communicate between the client and browser.

The server-side code will be run on node.js in an Express app.

Made a github repository with a node `.gitignore` (hides the node_modules folder) and cloned repository to local machine

#### v0.1
Initialize the project in the local folder with the terminal command `npm init`.
- This installs a package.json file, (accept all prompts)

Install two dependencies
- `npm install express --save`
- `npm install nodemon --save-dev`

nodemon is for convenience
- restarts server automatically as we change our server-side code... activated later with `nodemon index`

Create new file `index.js`

```javascript
var express = require('express');

// App setup by invoking 'express' function
var app = express();

// Setup server as a variable to listen on a portal
// Add function to let us know its listening
var server = app.listen(4000, function () {
  console.log('listening to requests on PORT 4000');
});
```

In app_directory, terminal run nodemon for first time with
`nodemon index`


```
$ nodemon index
[nodemon] 1.12.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node index index.js`
listening to requests on PORT 4000
```

At the moment, localhost:4000 displays a blank page
![image](images/readme/v0.1_1.png)

We need to use some 'middleware' to 'serve' some static/public files.

Add to `index.js`

```javascript
// Static files
app.use(express.static('public'));
```

Make a new folder in websocket_app called 'public' and add an `index.html` and `styles.css` file

Anytime the app 'looks' for a static file (html or css) it will search in the public folder and serve it up (if found).

Add this code to `index.html`
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>WebScockets 101</title>
        <link href="/styles.css" rel="stylesheet" />
    </head>
    <body>
        <h1>Woo, you see me!</h1>
    </body>
</html>
```
Add this code to `styles.css`
```css
body{
    font-family: 'Nunito';
}

h2{
    font-size: 18px;
    padding: 10px 20px;
    color: #575ed8;
}

#mario-chat{
    max-width: 600px;
    margin: 30px auto;
    border: 1px solid #ddd;
    box-shadow: 1px 3px 5px rgba(0,0,0,0.05);
    border-radius: 2px;
}

#chat-window{
    height: 400px;
    overflow: auto;
    background: #f9f9f9;
}

#output p{
    padding: 14px 0px;
    margin: 0 20px;
    border-bottom: 1px solid #e9e9e9;
    color: #555;
}

#feedback p{
    color: #aaa;
    padding: 14px 0px;
    margin: 0 20px;
}

#output strong{
    color: #575ed8;
}

label{
    box-sizing: border-box;
    display: block;
    padding: 10px 20px;
}

input{
    padding: 10px 20px;
    box-sizing: border-box;
    background: #eee;
    border: 0;
    display: block;
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #eee;
    font-family: Nunito;
    font-size: 16px;
}

button{
    background: #575ed8;
    color: #fff;
    font-size: 18px;
    border: 0;
    padding: 12px 0;
    width: 100%;
    border-radius: 0 0 2px 2px;
}
```
#### v0.2

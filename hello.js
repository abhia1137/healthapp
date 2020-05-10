const http = require("http");
// const hostname = '18.218.140.217';
const express = require('express');
var router = express.Router();
//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {

    //Set the response HTTP header with HTTP status and Content type
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

router.get('/', function(req, res) {
    res.send('good working')
})

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(3000, () => {
    console.log(`Server running at `);
});
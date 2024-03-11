'Use strict'

const http = require('http');

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/pain' });
    res.end('Hola mundo');

});
server.listen(5000)
// сервер
const http = require('http');
const port = process.env.port || 1337;

const server = http.createServer().listen(port);

server.on('error', (err, res) => {
    res.end('bad request');
});

server.on('request', function (req, res) {
    console.log('request');
    res.end('request');
})

server.on('connection', function () {
    console.log('client connected');
}); 

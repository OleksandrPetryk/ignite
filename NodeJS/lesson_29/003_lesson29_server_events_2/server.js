// сервер
const http = require('http');
const port = process.env.port || 1337;

const server = http.createServer().listen(port);

server.on('error', (err, res) => {
    res.end('bad request');
});

server.on('request', function () {
    console.log('request')
})

server.on('connection', function () {
    console.log('client connected');
}); 

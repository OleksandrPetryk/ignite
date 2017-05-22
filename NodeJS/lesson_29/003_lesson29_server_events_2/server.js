// сервер
const http = require('http');
const port = process.env.port || 1337;

const server = http.createServer().listen(port); 

server.on('clientError', (err, socket) => {
    socket.end('bad request');
});

server.on('request', function () {
    console.log('request')
})

server.on('connection', function () {
    console.log('client connected'); 
}); 

// клиент 
const net = require('net');
// Модуль net предоставляет асинхронные методы для работы с сетью. 
// Он включает методы для создания как серверов, так и клиентов (называемых потоками).  

const client = net.connect({ port: port }, () => {
    // 'connect' listener
    console.log('connected to server!');
    client.write('world!\r\n');
});
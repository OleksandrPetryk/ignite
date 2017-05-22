var restify = require('restify'); 
var server = restify.createServer({
    name: 'myApp'
});

var apiHandler = require('./api_handler'); 

var port = process.env.port || 1337; 

server.use(function (req, res, next) {
    console.time(req.method + ' ' + req.url);
    next(); 
}) 

server.get('/api/', apiHandler.loadItems); 

server.post('/api/new', apiHandler.createItem);  

server.del('/api/:id', apiHandler.removeItem);  

server.get('/', function (req, res) {
    res.send('test get request'); 
    console.timeEnd(req.method + ' ' + req.url); 
}); 

server.listen(port, function () {
    console.log('server running on port ' + port);
});
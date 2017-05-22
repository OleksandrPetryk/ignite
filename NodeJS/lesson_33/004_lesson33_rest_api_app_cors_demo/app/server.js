var express = require('express');
var app = express();  

var http = require('http'); 
var path = require('path'); 

var bodyParser = require('body-parser'); 

app.use(bodyParser.json()); 

var port = process.env.port || 3000; 

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html')); 
}); 



// HTTP запросы к REST api 

// callback-функция для обработки результатов запросов 
var cb = function (response, res) {
    response.on('data', function (chunk) {
       
        res.write(chunk.toString());
    });

    response.on('end', function () {
        res.end();
    })
}

// просмотреть все элементы
app.get('/all', function (req, res) {

    // GET-запрос
    var options = {
        host: 'localhost', 
        port: 1337, 
        method: 'GET', 
        path: '/todos/'

    } 

    var request = http.request(options, function (response) {
        cb(response, res)
    }); 
    request.end(); 
}) 

// просмотреть элемент по id 
app.get('/view/:id', function (req, res) {

     // GET-запрос
     var options = {
        host: 'localhost',
        port: 1337, 
        method: 'GET',
        path: '/todos/' + req.params.id
    }

     var request = http.request(options, function (response) {
         cb(response, res)
     });
     request.end(); 
}) 

// создать новый элемент 
app.post('/new', function (req, res) {

    // POST-запрос
     var options = {
        host: 'localhost',
        port: 1337, 
        method: 'POST',
		path: '/todos/new' ,
		headers: {
            'Content-Type': 'application/json'
        }
    }

     var request = http.request(options, function (response) {
         cb(response, res)
     });
     request.write(JSON.stringify(req.body));
     request.end();     
}) 

// редактировать элемент по id 
app.post('/edit/:id', function (req, res) {

     // PUT-запрос
     var options = {
        host: 'localhost',
        port: 1337, 
        method: 'PUT',
        path: '/todos/' + req.params.id, 
        headers: {
            'Content-Type': 'application/json'
        }
    }

     var request = http.request(options, function (response) {
         cb(response, res)
     }); 

     request.write(JSON.stringify(req.body));
     request.end();     
})

// удалить элемент по id 
app.get('/delete/:id', function (req, res) {

    // DELETE-запрос
     var options = {
        host: 'localhost',
        port: 1337, 
        method: 'DELETE', 
        path: '/todos/' + req.params.id 
    }

     var request = http.request(options, function (response) {
         cb(response, res)
     });
     request.end(); 
}) 

app.listen(port, function() {
	
	console.log('app running on port ' + port); 
})
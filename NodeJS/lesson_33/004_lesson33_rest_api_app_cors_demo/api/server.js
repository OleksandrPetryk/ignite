var express = require('express');
var app = express();
var path = require('path'); 

var port = process.env.port || 1337; 
 
var bodyParser = require('body-parser'); 

// request handler
var apiHandler = require('./api_handler');

// a middleware function, for processing query data in JSON format
app.use(bodyParser.json()); 

// middleware function for CORS 
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
	res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 

    next();
});

var router = express.Router(); 

// upload all elements from DB 
router.get('/', apiHandler.loadItems) 

// select element
router.get('/:id', apiHandler.getItemById);

// create elemet  
router.post('/new', apiHandler.createItem);

// update element
router.put('/:id', apiHandler.updateItem);

// delete element 
router.delete('/:id', apiHandler.removeItem); 

app.use('/todos', router); 

app.listen(port, function () {
    console.log('app running on port ' + port); 
})
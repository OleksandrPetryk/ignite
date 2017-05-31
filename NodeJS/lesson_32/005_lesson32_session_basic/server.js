var express = require('express');
var app = express();
var port = process.env.port || 1337;  

var session = require('express-session');

// middleware для работы с сессиями 
app.use(session({
    // ключ для подписи cookie текущей сессии 
    secret: 'secret',
    // Заставляет сеанс, который неинициализирован, быть сохраненным в хранилище. Сеанс не инициализируется, если он является новым, но не изменен.
    saveUninitialized: true,
     
}));

app.get('/', function (req, res) {

    // доступ к объекту сессии хранится в свостве req.session 
    console.log(req.session.id);

    // объекту req.session можно задавать свойства, которые будут доступны в текущей сессии 
    req.session.numberOfRequests = req.session.numberOfRequests + 1;

    var requestCount = () => {
        return isNaN(req.session.numberOfRequests) ? 0 : req.session.numberOfRequests; 
    }

    res.end('Number of reguests: ' + requestCount() + 
        ' \n\r Refresh the page to increase count');
})

app.listen(port, function () {
    console.log('app running on port ' + port); 
})
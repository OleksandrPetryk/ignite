// встроенные модули nodejs импортируются без символов './' или '../'
var fs = require('fs');

fs.writeFileSync('test.txt', 'Built-in module example! 23.05.2017');

fs.readFile('test.txt', function (err, rez) {
    console.log(rez.toString()); 
}); 
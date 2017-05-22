// setTimeout(callback, delay[, ...arg]) 
// callback - функция, которая будет вызвана через указанный интервал времени
// delay - задержка (в миллисекундах) 
// ...arg - аргументы, которые будут использованы при вызове callback 
var timeout = setTimeout(function () {
    console.log('timeout example'); 
}, 2000)

// clearTimeout(timeout); // отмена setTimeout 

// setInterval(callback, delay[, ...arg]) 
// callback - функция, которая будет вызвана через указанный интервал времени
// delay - задержка (в миллисекундах) 
// ...arg - аргументы, которые будут использованы при вызове callback 
var counter = 0;
var interval = setInterval(function () {
    console.log('interval ' + counter); 
    counter++; 

    if (counter == 10) {
        clearInterval(interval); // отмена setInterval
    }

}, 100)

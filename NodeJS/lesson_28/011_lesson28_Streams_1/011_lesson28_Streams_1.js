// Потоки(Streams) - объекты, которые позволяют считывать данные или записывать данные в источник в непрерывном режиме. 
// 
// В NodeJS есть 2 основных вида потоков: 
// Readable - поток, который используется для операций чтения
// Writable - поток, который используется для операци записи 

// Методы потоков асинхронны


// В данном примере проводится сравнение работы с потоками данных с работой с методами read/write
// Как методы потоков, так и методы read/write 


var fs = require('fs');

// поток для записи данных
var writerStream = fs.createWriteStream('output1.txt');

writerStream.write('Sample Data 1 ', function (err) {
    if (err) console.log(err);
    else console.log('write stream finish')

    var readerStream = fs.createReadStream('output1.txt');

    readerStream.on('data', function (data) {
        console.log('data read: ' + data);
    });

    readerStream.on('end', function () {
        console.log('read stream end');
    });
});


fs.open('output2.txt', 'w+', function (err, fd) {

    fs.write(fd, 'Sample Data 2', function (err) {
        if (err) console.log(err);
        console.log('write end')
    });

    fs.read(fd, 100, function () {
        console.log(data)
    });
})


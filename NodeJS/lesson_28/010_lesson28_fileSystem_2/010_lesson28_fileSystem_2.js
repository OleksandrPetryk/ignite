﻿var fs = require('fs');

console.log("Going to open file!");

// Метод fs.open принимает такие аргументы: 

// path - путь к файлу 
// flags - опции метода: 

//      'r'   - Открыть файл для чтения. Ошибка в случае отсутствия файла.
//      'r+'  - Открыть файл для чтения и записи. Ошибка в случае отсутствия файла.
//      'rs+' - Открыть файл для чтения и записи в синхронном режиме. 
//      'w'   - Открыть файл для записи. Файл будет создан в случае его отсутствия и перезаписан в противном случае.
//      'wx'  - Открыть файл для записи. Файл будет создан в случае его отсутствия. В противном случае произойдет ошибка. 
//      'w+'  - Открыть файл для чтения и записи. Файл будет создан в случае его отсутствия и перезаписан в противном случае.
//      'wx+' - Открыть файл для чтения и записи. Файл будет создан в случае его отсутствия. В противном случае произойдет ошибка. 
//      'a'   - Открыть файл для записи(добавления данных). В случае отсутствия файла он будет создан. В противном случае, данные будут добавлены в уже существующий файл.
//      'ax'  - Открыть файл для записи(добавления данных). В случае отсутствия файла он будет создан. В противном случае произойдет ошибка. 
//      'a+'  - Открыть файл для чтения и записи(добавления данных).В случае отсутствия файла он будет создан. В противном случае, данные будут добавлены в уже существующий файл.
//      'ax+' - Открыть файл для чтения и записи(добавления данных). В случае отсутствия файла он будет создан. В противном случае произойдет ошибка. 

// callback - функция, которая принимает в качестве аргументов:  

//      1. Объект ошибки. Null в случае отсутствия ошибки. 
//      2. Дескриптор файла - число, ссылка на текущий файл 

fs.open('demofile.txt', 'a+', function (err, fd) {
    console.log('opening file!');
    if (err) {
        console.log(err);
    }
    else {

        // Метод write - альтернатива методу writeFile; позволяет записать данные в файл и принимает такие аргументы: 
        // fd - число, дескриптор файла (то есть, ссылка на текущий файл, используемый данной функцией)
        // buffer - данные в виде буфера или строки, 
        // offset, length - определяют часть буфера, которую следует записать в файл 
        // position - отступ от начала файла, куда будут записаны данные 
        // callback - функция, принимающая аргументы err, written, string 


        fs.write(fd, 'This is the file content!', { encoding: 'utf-8' }, function (err, written, string) {

            console.log('writing to file!');

            if (err) throw err;

            console.log(written); // written - количество байтов, которое потребовалось для записи данных 
            console.log(string);  // строка, записанная в файл 

        });


        var arr = new Uint16Array(1024);
        var buf = Buffer.from(arr.buffer);

        // Метод read позволяет читать данные из файла, принимает аргументы: 
        // fd - число, дескриптор файла (то есть, ссылка на текущий файл, используемый данной функцией)
        // buffer - буфер, в который будут помещены прочитанные данные 
        // offset, length - определяют часть буфера в которую следует записать в файл 
        // position - отступ от начала файла, данные которого считываются 
        // callback - функция, принимающая аргументы err, bytesRead, buffer
        fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {

            console.log('reading from file!');

            if (err) throw err;

            console.log(bytes);


        });

        // закрыть файл 
        fs.close(fd, function (err) {
            if (err) throw err;
            console.log('file closed!');
        })
    }
}); 
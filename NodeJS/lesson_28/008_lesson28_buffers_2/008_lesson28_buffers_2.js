var arr1 = new Uint16Array(4);
const buf1 = Buffer.from(arr1.buffer);
var arr2 = new Uint16Array(4);
const buf2 = Buffer.from(arr2.buffer);

var arr4 = new Uint16Array(10);
const buf4 = Buffer.from(arr4.buffer);


// Метод buf.write(string[, offset][, length][, encoding]) - запись данных в буфер, аргументы: 
// string - данные в строковом виде 
// offset - индекс буфера, с которого начнется запись 
// length - количество байтов для записи  
// encoding - кодировка; по умолчанию utf-8 
buf1.write('12', 2, 3);
buf2.write('12', 2, 3);

// buf.toString([encoding][, start][, end]) - чтение данных из буфера, аргументы: 
// encoding - кодировка; по умолчанию utf-8 
// start - индекс, с которого начать чтение данных буфера 
// end - индекс, до которого читать данные буфера
var bufData = buf1.toString('utf-8', 2, 3);
console.log(bufData); // 1

// конкатенация буферов: Buffer.concat(list[, totalLength]), аргументы:  
// list - список буферов для конкатенации 
// totalLength - длина буфера, получаемого в результате конкатенации 
var buf3 = Buffer.concat([buf1, buf2], 28);
console.log(buf3.toString()); // 12 12

// сравнение буферов: buf1.compare(buf2);
// при условии, что буферы, который сравниваются, имеют одинаковый начальный индекс, 
// с которого была начата запись данных и одинаковые данные, 
// метод  возвращает 0 если длина буферов одинакова, -1, если buf1 короче buf2 и 1, если наоборот
var res = buf1.compare(buf2);
console.log(res); // 0



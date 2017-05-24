var util = require('util');

var obj = {
    a: 1,
    b: 2,
    // свойство inspect будет использоваться методом util.inspect для отображения объекта
    // (работает похоже на метод объектов toString)
    inspect: function () {
        return 123;
    }
}

// Метод util.inspect возвращает строковое представление объекта. 
// Метод принимает 2 аргумента: 
//  1. object to inspect - примитивное значение или объект    
//  2. options - дополнительные параметры: 
//      2.1 showHidden <boolean> - Если значение true, свойства объекта, не доступные для перечилсения (non-enumerable) будут выведены в результат
//      2.2 depth <number> - "Глубина" объекта при форматировании строки результата. По умолчанию 2. 
//      2.3 colors <boolean> - если true, результат будет отображен с использованием цветовых кодов ANSI 
//      2.4 breakLength <number> - длина строки, при достижении которой будет выполнен переход на новую строку при форматировании. Для отображения результата
//          на одной строке установите значение свойства Infinity. 

var options = {
    showHidden: true,
    depth: 4,
    colors: true,
    breakLength: 50
}

console.log(util.inspect(obj, options));
console.log(util.inspect(util, options));

// метод util.format(format[, ...]) возвращает отформатированную строку 
// первый аргумент - строка, содержащая специальные символы
// каждый специальный символ будет заменен соответствующим аргументом метода

// %s - Строка
// %d - Число (целое или число с плавающей запятой) 
// %j - JSON
// %% - символ '%'

var str1 = util.format('%s:%d', 'Hello world', 28);
console.log(str1); // Hello world:28 

var str2 = util.format('%d:%d', 12345, 'some string');
// если в функцию format не передано аргументов, соответствующих специальным символам, 
// форматирующая строка будет заменена аргументами
console.log(str2);  // 12345 some string 

var test_obj = {
    a: 1,
    b: 'hello'
}

// альтернативой метода util.format для отображения данных в формате JSON является 
// метод JSON.stringify 
var str3 = util.format('%j', test_obj);

console.log(str3);

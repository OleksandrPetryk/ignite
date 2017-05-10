'use strict';

//Деструктуризация (destructuring assignment) – это особый синтаксис присваивания, 
//при котором можно присвоить массив или объект сразу нескольким переменным, разбив его на части.

let options = {
    title: "a new web site",
    width: 100,
    height: 200
};
  

let {width, height, title} = options;
  
alert(title);  // a new web site
alert(width);  // 100
alert(height); // 200

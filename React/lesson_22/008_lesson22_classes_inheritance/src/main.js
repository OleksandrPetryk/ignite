'use strict';

//Наследование. Синтаксис:
//class Child extends Parent {
//    ...
//    }

class Animal {
    constructor(name) {
        this.name = name;
    }

    walk() {
        alert("I walk: " + this.name);
    }

    //get value() { return "val" };
}

class Rabbit extends Animal {
    walk() {
        //обращение к родителю т.е Animal 
        super.walk();
        //console.log(super.value);
        //console.log("I walk: " + this.name);
    }

    constructor() {
        let father = super("father"); //Вызвать конструктор родителя можно только изнутри конструктора потомка. 
        father.walk();
    }
}

new Rabbit("Rabbit").walk();


function letTest() {

    var x = 1;
    if (true) {
        let x = 2;  // другая переменная
        alert(x);  // 2
    }

    // let x = 3  //==> Ошибка. Нельзя использовать let с одним и тем же именем в пределах одного блока
    alert(x);  // 1
}

letTest();

let x = 3  //==> let переменная x в другой функции
alert(x);

var arr = []
for (let i = 0; i < 10; i++) {
    arr.push(function () { alert(i) });
}

arr[5]();



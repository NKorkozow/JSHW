//Задание 1
// Сделайте функцию, которая отнимает от первого числа второе и делит на
// третье. Числа передаются параметром.
console.log("Задание 1");

function  calcExpressions(a, b, c) {
    return (a - b) / c;
}

console.log(calcExpressions(50  ,5,5));


//Задание 2
// Сделайте функцию, которая возвращает куб числа и его квадрат. Число
// передается параметром.
console.log("Задание 2");


function calcSquareAndCube (a) {
    return `Квадрат числа равен: ${a ** 2}, а куб: ${a ** 3}.`;
}

console.log(calcSquareAndCube(6));


//Задание 3
// Напишите функции min и max, которые возвращают меньшее и большее из
// чисел a и b.
console.log("Задание 3");


function showMinNumber (a, b) {
    if (a > b) return b;
    else return a;
}

function showMaxNumber (a, b) {
    if (a > b) return a;
    else return b;
}


console.log(showMinNumber(-422, -455));
console.log(showMaxNumber(422, 455));


//Задание 4
// Напишите две функции: первая ф-ция должна возвращать массив с
// числовыми значениями, диапазон которых должен вводиться пользователем
// с клавиатуры; вторая – выводить полученный массив.
console.log("Задание 4");


function calcArr (a, b) { 
    let arr = [];

    for(; +a <= +b; a++) arr.push(+a);

    return arr;
}

function showArr () {
    let startArr = prompt("Введите с какого числа начинать массив");
    let endArr = prompt("Введите последнее число массива");
    return console.log(calcArr(startArr, endArr));
}


showArr();

//Задание 5
// Сделайте функцию isEven() (even - это четный), которая параметром
// принимает целое число и проверяет: четное оно или нет. Если четное - пусть
// функция возвращает true, если нечетное — false.
console.log("Задание 5");

function isEven (number) {
    if (number % 2 == 0) return true;
    return false;
}


console.log(isEven(7));


//Задание 6
// Напишите ф-цию, в которую передается массив с целыми числами.
// Верните новый массив, где останутся лежать только четные из этих чисел.
// Для этого используйте вспомогательную функцию isEven из предыдущей
// задачи.
console.log("Задание 6");



function showEvenArr (arr) {
    let evenNumbersArr = [];
    for (let i = 0; i < arr.length; i++){
        if (isEven(arr[i])) evenNumbersArr.push(arr[i]);
    }

    return evenNumbersArr;
}

console.log(showEvenArr([2,5,6,3,21, -20,43,42,50]));

//Задание 7
// Напишите ф-цию, которая рисует следующую пирамидку
// Кол-во рядов должно вводиться параметром. Если пользователь ввел доп.
// параметр, непредусмотренный ф-цией по умолчанию - один любой символ,
// кроме пробела, то пирамида должна быть нарисована этим символом
console.log("Задание 7");

function showPyramid (rows) {
    if (arguments.length > 1) {
        for (let i = 1, row = ""; i <= rows; i++) {
            for (let j = 1; j <=i; j++) {
                row += arguments[1];
                document.write(arguments[1]);
            }
            console.log(row);
            row = "";

            document.write(`<br/>`)
        }
    }
    else {
        for (let i = 1, row = ""; i <= rows; i++) {
            for (let j = 1; j <=i; j++) {
                row += i;
                document.write(i);
            }
            console.log(row);
            row = "";

            document.write(`<br/>`)
        }
    }
   
}

showPyramid(5, 4);


//Задание 8
// Напишите ф-цию, которая рисует равнобедренный треугольник из
// звездочек:
// Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же ф-
// цию, но которая выведет перевернутый треугольник.
console.log("Задание 8");


function drawTriangle (rows) {
    let arr = [];
  
    for (let i = 0; i < 2 * rows - 1; i++){
        arr[i] = " ";
    }

    arr.length = 2 * rows;    
    arr[Math.floor((2 * rows - 1) / 2)] = "*";
    console.log(arr.join(' '));

    for (let i = 0; i < rows - 1; i++) {
        arr[arr.indexOf("*") - 1] = "*";
        arr[arr.lastIndexOf("*") + 1] = "*";

        console.log(arr.join(' '));
    }
}


function drawReverseTriangle (rows) {
    console.log("")
    let arr = [];
    for (let i = 0; i < 2 * rows - 1; i++){
        arr.push("*");
    }
    console.log(arr.join(' '))
    for (let i = 0; i < rows; i++){
        arr[i] = " ";
        arr[arr.length - 1 - i] = " ";
        console.log(arr.join(' '))
    }
}

drawTriangle(5);
drawReverseTriangle(5);


//Задание 9
// Напишите ф-цию, которая возвращает массив заполненный числами
// Фибоначи от 0 до 1000.
console.log("Задание 9");


function getArrFib (arr) {
    while (arr[arr.length - 1] < 1000) arr.push(arr[(arr.length - 1)] + arr[(arr.length - 2)]);
  
    if (arr[arr.length - 1] > 1000) arr.pop() ;
    return arr;
}

console.log(getArrFib([0, 1]));

//Задание 10
// Дано число. Сложите его цифры. Если сумма получилась более 9-ти,
// опять сложите его цифры. И так, пока сумма не станет однозначным числом
// (9 и менее). Исп. Рекурсию.
console.log("Задание 10");


function calcSummNumber (number) {
    let summ = 0;
    number = String(number);
    
    for(let i = 0; i < number.length; i++) {
        summ += +number[i];
    
    }

    if (summ > 9) calcSummNumber (summ);
    else return summ;
}

calcSummNumber(322431);


//Задание 11
// Дан массив с числами (передается параметром). Выведите
// последовательно его элементы, используя рекурсию и не используя цикл.
console.log("Задание 11");

function getElementArr (arr) {
    console.log(arr[0]);
    arr.shift();

    if (arr.length > 0) getElementArr(arr);
}

getElementArr ([1, 2, 5 ,6, 7, 4, 5, 5]);


//Задание 12
// Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер
// группы студента и выводящую введённые данные в следующем виде:
// *****************************
// * Домашняя работа: «Функции» *
// * Выполнил: студент гр. W4017 *
// * Иванов Иван Иванович *
// *****************************
// Размер рамки должен определятся автоматически по самой длинной строке.
// Рамку вывести в консоль.
console.log("Задание 12");


function getInfo () {
    let border = "";
    let homeWork = "Домашняя работа: «Функции»"
    let group  = prompt("Введите вашу группу");
    let groupStr  = `Выполнил: студент гр. ${group}`;
    let name = prompt("Введите ваше Фио");
    let maxStr;

    if (homeWork.length >groupStr.length && homeWork.length > name.length) maxStr = homeWork.length;
    else if (groupStr.length > homeWork.length  && groupStr.length > name.length) maxStr = groupStr.length;
    else maxStr = name.length;

    for (let i = 0; i < maxStr; i++){
        border += "*";
    }

    console.log(border);
    console.log(homeWork);
    console.log(groupStr);
    console.log(name);
    console.log(border);
}


getInfo ()


//Задание 13
// Напишите ф-цию, которая должна проверить правильность ввода адреса
// эл. почты, неиспользуя регулярные выражения. Почта верна при условии:
// a. весь адрес не должен содержать русские буквы и спецсимволы, кроме
// одной «собачки», знака подчеркивания, дефиса и точки, причем они не могут
// быть первыми и последними в адресе, и идти подряд, например: «..», «@.»,
// «.@» или «@@», «_@», «@-», «--» и т.п.
// b. имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
// имя может содержать только буквы, цифры, но не быть первыми и
// единственными в имени, и точку;
// c. после последней точки и после @, домен верхнего уровня (ru, by, com и
// т.п.) не может быть длиной менее 2 и более 11 символов.
console.log("Задание 13");
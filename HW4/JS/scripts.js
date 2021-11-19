// 1
// Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти
// элементы на экран.
console.log("Задание 1");

let arr1 = [1,2,3,4,5    ];

for (let i = 0; i < arr1.length; i++) console.log(arr1[i]);

// 2
// Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут
// быть положительными и отрицательными. Выведите на экран только отрицательные
// числа, которые больше -10, но меньше -3.
console.log("Задание 2");

let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for(let i = 0; i < arr2.length; i++) { 
    if (arr2[i] > -10 && arr2[i] < -3 ) console.log(arr2[i]);
}

// 3
// Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и
// while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого
// массива. Запишите ее в переменную result и выведите.
console.log("Задание 3");

let arr31 = [];
let arr32 = [];
let result = 0;
let counter = 23;

for (let i = 23; i < 57; i++) {
    arr31.push(i);
    result += i;
}    
while (counter < 57) {
    arr32.push(counter);
    counter++;
}


console.log(arr31);
console.log(arr32);
console.log(result);


// 4
// Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’].
// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5
console.log("Задание 4");

let arr4 = ["10", "20", "30", "50", "235", "3000"];

for (let i = 0; i < arr4.length; i++) {
    if ( arr4[i][0] == "1" || arr4[i][0] == "2" || arr4[i][0] == "5") {
        document.write(`${arr4[i]} </br>`);
    }    
}


// 5
// Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все
// дни недели, а выходные дни выведите жирным.
console.log("Задание 5");

let daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

for (let i =0; i < daysOfWeek.length; i++) {
    if(i == (daysOfWeek.length -1) || i == (daysOfWeek.length - 2) ){
        document.write(`<b> ${daysOfWeek[i]} </b> </br>`);
        continue
    }
    
    document.write(`${daysOfWeek[i]} </br>`);
}

// 6
// Создайте массив с произвольными данными. Добавьте в конец массива любой элемент,
// и получите последний элемент массива, используя свойство length.
console.log("Задание 6");


let arr6 = [ 1, 2, 3, 4, 5, 6, 7];

arr6.push(8);

console.log(arr6.length);


// 7
// Запросите у пользователя по очереди числовые значения при помощи prompt и
// сохраните их в массив. Собирайте числа до тез пор пока пользователь не введет пустое
// значение. Выведите получившийся массив на экран. Выполните сортировку чисел
// массива, и выведите его на экран.
console.log("Задание 7");


let arr7 = [];

while (true) {
    let arrElement = prompt("Введите элемент который необходимо добавить в массив (для выхода оставьте пустое знаечие)");
    if (arrElement == "") break;

    arr7.push(arrElement);
}


console.log(arr7);

// 8
// Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке),
// используя цикл while и метод reverse.
console.log("Задание 8");

let arr8 = [12, false, "Текст", 4, 2, -5, 0];
let arr8Reverse = [];
counter = arr8.length - 1;


while( counter >= 0){
    arr8Reverse.push(arr8[counter]);
    counter--;
}


console.log(arr8Reverse);
console.log(arr8.reverse());

// 9
// Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном
// целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6].
console.log("Задание 9");

let arr9 = [5, 9, 21, , , 9, 78, , , , 6];
let zeroElemens = 0;

for (let i = 0; i < arr9.length; i++) {
    if (arr9[i] == undefined) zeroElemens++;
}


console.log(zeroElemens);


// 10
// Найдите сумму элементов массива между двумя нулями (первым и последним нулями
// в массиве). Если двух нулей нет в массиве, то выведите ноль. В массиве может быть
// более 2х нулей. Пример массива: [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] или
// [1,8,0,13,76,8,7,0,22,0,2,3,2].
console.log("Задание 10");

let arr10 = [1,8,0,13,76,8,7,0,22,0,2,3,2];
let arr101;
let summArr101 = 0;


if ((arr10.indexOf(0) == arr10.lastIndexOf(0)) || (arr10.indexOf(0) == "-1") || (arr10.lastIndexOf(0) == "-1") ){
    console.log(0);
} else{
    arr10.length = arr10.lastIndexOf(0);
    arr101 = arr10.slice(arr10.indexOf(0) + 1,);

    for ( let i = 0; i < arr101.length; i++){
        summArr101 += arr101[i];
    }

    console.log(summArr101);
}

// 11
// Нарисовать равнобедренный треугольник из символов ^. Высоту выбирает
// пользователь. Например: высота = 5, на экране:
console.log("Задание 11");

let height = prompt("Введите высоту ");
let arr11 = [];

for (let i = 0; i < 2 * height - 1; i++){
    arr11[i] = " ";
}

arr11.length = 2 * height - 1;    
arr11[Math.floor(2 * (height - 1) / 2)] = "^";
console.log(arr11.join(' '));



for (let i = 0; i < height - 1; i++) {
    arr11[arr11.indexOf("^") - 1] = "^";
    arr11[arr11.lastIndexOf("^") + 1] = "^";

    console.log(arr11.join(' '));
}
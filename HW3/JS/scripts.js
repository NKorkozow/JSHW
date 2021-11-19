// Задание 1 
//Выведите числа от 1 до 50 и от 35 до 8.
console.log("Задание 1");
 
for (let i = 1; i <= 50; i++) {
    console.log(i);
}

for (let i = 35; i >= 8; i--) {
    console.log(i);
}

// Задание 2 
// Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите числа
// тегом <br /> друг от друга, чтобы получить столбец, а не строку.
console.log("Задание 2");

let current = 89;

while (current >= 11) {
    document.write(current + `</br>`);
    current--;
}

// Задание 3 
//С помощью цикла найдите сумму чисел от 0 до 100.
console.log("Задание 3");

let summ = 0;

for(let i = 0; i <= 100; i++){
    summ+=i;
}

console.log("Сумма первых ста чисел равна: " + summ);

// Задание 4 
//Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6
//(1+2+3).
console.log("Задание 4");

let numberSumm = 0;

for (let i = 1; i <= 5; i++) {
    for (let j = 0; j <= i; j++) {
        numberSumm += j;
    }

    console.log("Сумма числа " + i + " равна: " + numberSumm);
    numberSumm = 0;
}

// Задание 5
//Выведите чётные числа от 8 до 56. Решить задание через while и for.
console.log("Задание 5");

let smallerNumber = 8,
    largerNumber = 56;

while (smallerNumber <= largerNumber) {
    console.log(smallerNumber);
    smallerNumber += 2;
}

for ( ;smallerNumber <= largerNumber; smallerNumber += 2) {
    console.log(smallerNumber);
}


// Задание 6 
//Необходимо вывести на экран полную таблицу умножения (от 2 до 10).

for (let i = 2; i < 10 ; i++){
    document.write(`<hr>`);
    for (let j = 2; j < 10; j++){
        document.write(`${i} * ${j} = ${i * j} </br>`)
    }
}

// Задание 7 
//Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет
// меньше 50. Какое число получится? Посчитайте количество итераций, необходимых
// для этого (итерация - это проход цикла), и запишите его в переменную num.
console.log("Задание 7");

let num = 0;

for (let n = 1000; n > 50; n /= 2) {
    num++;
}    

console.log(num);


// Задание 8 
// Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до
// тех пор, пока не будет введена пустая строка или 0. После выхода из цикла выведите
// общую сумму и среднее арифметическое введённых чисел. Если пользователь ввел не
// число, то вывести сообщение об ошибке ввода. При подсчете учесть, что пользователь
// может ввести отрицательное значение.
console.log("Задание 8");


while(true){
    let numberEntered = prompt(`Введите число(для выхода введите 0 или оставть пустую строку)`, "0");

    if(numberEntered == null || numberEntered == 0) break;
}

// Задание 9 
// Дана строка с числами разделенными пробелами «4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36
// 8 57». Найдите самое большое и самое маленькое число в строке, используя цикл.
console.log("Задание 9");

let startString = "4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57";
let activeNumber = '';
largerNumber = -Infinity;
smallerNumber = +Infinity;


for( let i = 0; i < startString.length; i++) {
    activeNumber += startString[i];
    
    if ( +activeNumber > +largerNumber ) largerNumber = activeNumber;  
    if ( +activeNumber < +smallerNumber ) smallerNumber = activeNumber;
    
    if (startString[i] == ' ') activeNumber = '';
}


console.log(largerNumber);
console.log(smallerNumber);

// Задание 10
// Дано произвольное целое число n. Написать программу, которая:
// a. разбивает число n на цифры и выводит их на экран;
// b. подсчитывает сколько цифр в числе n;
// c. находит сумму цифр числа n;
// d. меняет порядок цифр числа n на обратный.
console.log("Задание 10");


n = prompt('Введите число');
currentNumber = 0;
let summNumber = 0;
let newNumber = '';

for (let i = 0; i < n.length; i++) {
  document.write(n[i] + `</br>`)

  summNumber += +n[i];
  currentNumber++;
}

console.log(summNumber);
console.log(currentNumber);

for (let i = (n.length - 1); i >= 0; i--) {
    newNumber += n[i];
}

console.log(newNumber);
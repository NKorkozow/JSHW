// Создайте переменные: name, age, city, phone, email, company; и получите через ф-цию
// prompt() соответствующие значения: ваше имя, возраст, город проживания и т.д.
// Выведите на экран фразу: «Меня зовут %Имя%. Мне %Возраст% лет. Я проживаю в
// городе %Город% и работаю в компании %Компания%. Мои контактные данные:
// %Телефон%, %Почта%.».

let name = prompt("Введите ваше имя: ");
let age = prompt("Введите ваш возраст: ");
let city = prompt("Введите ваш город проживания: ", "Минск");
let phone = prompt("Введите ваш номер телефона: ");
let email = prompt("Введите вашу почту: ");
let company = prompt("Введите где вы работаете: ");

// document.write(`Меня зовут ${name} Мне ${age} лет. Я проживаю вгороде ${city} и работаю в компании ${company}. Мои контактные данные:${phone}, ${email}`);

// Задание 2 
// Определите по введенному возрасту (исп. значение из задания 1) год рождения.
// Выведите на экран «%Имя% родился в %Год% году.».

let userYearBirth = 2021 - age;

document.write(`<p>${name} родился в ${userYearBirth} году.</p>`);

// Задание 3
// Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме
// вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.

let str = prompt("Введите 6-значное число: ");

let str1 = +str[0] + str[1] + str[2],
    str2 = +str[3] + +str[4] + +str[5];
 
if(str1 == str2){
    console.log('Да');
}else{
    console.log('Нет');
}


// Задание 4
// Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'.
// Проверьте работу скрипта при a, равном 1, 0, -3.
console.log("Задание 4");

let a = 1;

if(a > 0){
    console.log('Верно');
}else{
    console.log('Неверно');
}

// Задание 5
// Создайте переменные a=10 и b=2. Выведите их сумму, разность, произведение,
// частное, а также, если сумма этих чисел больше 1, то возведите полученную сумму в
// квадрат.
console.log("Задание 5");

a = 10;
let b = 2;
let summa = a + b;
console.log(summa);
console.log(a - b);
console.log(a * b);
console.log(a / b);

if(summa > 1){
    console.log(summa**2)
}


// Задание 6
// Если переменная a (из задания 5) больше 2 и меньше 11, или переменная b (из задания
// 5) больше или равна 6 и меньше 14, то выведите 'Верно', в противном случае выведите
// 'Неверно'.
console.log("Задание 6");

if((a >2 && a < 11) || (b >= 6 && b < 14)){
    console.log('Верно');
}else{
    console.log('Неверно');
}

// Задание 7
// В переменной n лежит число от 0 до 59. Определите в какую четверть часа попадает
// это число (в первую, вторую, третью или четвертую).
console.log("Задание 7");

let n = 32;

if(n < 15){
    console.log("Первая четверть");
}else if( n < 30){
    console.log("Вторая четверть");
}else if( n < 45){
    console.log("Третья четверть");
}else if( n < 60){
    console.log("Четвертая четверть");
}else{
    console.log("Число введено не верно");
}

// Задание 8
// В переменной day лежит число из интервала от 1 до 31. Определите в какую декаду
// месяца попадает это число (в первую, вторую или третью).
console.log("Задание 8");

let day = 16;

if(day < 10){
    console.log("Первая декада");
}else if( day < 20){
    console.log("Вторая декада");
}else if( day < 30){
    console.log("Третья декада");
}else{
    console.log("Число введено не верно");
} 

// Задание 9
// Напишите скрипт, который переводит дни в года (условно 1г = 365дн), в месяцы
// (условно 1м = 31день), в недели, в часы, в минуты и в секунды. Дробные результаты
// вычислений принимаются. Если кол-ва дней не хватает до полного года, месяца,
// недели, вывести сообщение «Меньше года», «Меньше месяца» и «Меньше недели»,
// соответственно.
console.log("Задание 9");

let days = 628;


if(days > 365){
    console.log(+days / 365 + " лет");
}else{
    console.log("Меньше года");
}


if(days > 31){
    console.log(+days / 31 + " месяцев");
}else{
    console.log("Меньше месяца");
}


if(days >> 7){
    console.log(+days / 7 + " недель");
}else{
    console.log("Меньше недели");
}


if(days >> 1/24){
    console.log(+days * 24 + " часов");
}else{
    console.log("Меньше часа");
}

console.log(+days * 24 * 60 + " минут");
console.log(+days * 24 * 60 * 60 + " секунд");

// Задание 10
// Напишите скрипт, который по введенному дню (исп. значение переменной из 8
// задания) в году (например, 256) определит месяц (от 1 до 12) и пору года (зима, лето и
// т.д.). Скрипт определение поры года написать через switch.
console.log("Задание 10");

days = 45;

let month = Math.floor(days / 31) + 1;

switch(month){
    case 1:
        console.log("January");
        console.log("Winter");
        break
    case 2:
        console.log("February");
        console.log("Winter");
        break
    case 3:
        console.log("March");
        console.log("Spring");
        break
    case 4:
        console.log("April");
        console.log("Spring");
        break
    case 5:
        console.log("May");
        console.log("Spring");
        break
    case 6:
        console.log("June");
        console.log("Summer");
        break
    case 7:
        console.log("Jule");
        console.log("Summer");
        break
    case 8:
        console.log("August");
        console.log("Summer");
        break
    case 9:
        console.log("September");
        console.log("Autumn");
        break
    case 10:
        console.log("October");
        console.log("Autumn");
        break
    case 11:
        console.log("November");
        console.log("Autumn");
        break
    case 12:
        console.log("December");
        console.log("Winter");
        break
}
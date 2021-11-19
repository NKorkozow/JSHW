//Task 1
/* Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального
поиска и замены.
*/

let strForReplace = 'aaa@bbb@ccc';

console.log(strForReplace.replace(/@/g, '!'));

//Task 2
/* В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
дату в формат 31/12/2025. 
 */

let date = '2025-12-31';

let newFormatDate = date.split('-').reverse().join('/');

console.log(newFormatDate);

// Task 3
/* Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
«javascript» тремя разными способами (через substr, substring, slice).
*/
let strForSlice = 'Я учу javascript!';
let indexLearn = strForSlice.indexOf('учу');
let indexJS = strForSlice.indexOf('java');

console.log(strForSlice.slice(indexLearn, -strForSlice.slice(indexJS).length-1), strForSlice.substring(indexJS)) 
console.log(strForSlice.substring(indexLearn, indexLearn + 3), strForSlice.substring(indexJS));
console.log(strForSlice.substr(indexLearn,  3), strForSlice.substr(indexJS));


//Task 4
/* Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
из суммы кубов его элементов. Для решения воспользуйтесь циклом for.
 */

let arrayForCalc = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;

for (let item of arrayForCalc) {
    sum += Math.pow(item, 3);
}

let result = Math.sqrt(sum);

console.log(result);

//Task 5
/* Даны переменные a и b. Отнимите от a переменную b и результат
присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
c записалось положительное значение. Проверьте работу скрипта при a и b,
равных соответственно 3 и 5, 6 и 1.
*/
 
function getPositiveResult(a, b) {
    let c = a - b;
    return Math.abs(c);
}

console.log(getPositiveResult(3, 5));
console.log(getPositiveResult(6, 1));

//Task 6
/* Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
Для решения этой задачи напишите функцию, которая будет добавлять 0
перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
сделает 01.09.2014).
 */

let currentDate = new Date();
// currentDate.setDate(3);
// currentDate.setMonth(3);


function getTwoDistrDay(days) {
    days = String(days);

    if (days.length < 2 ) {
        days = "0" + days; 
    }

    return days;
}

function getTwoDistrMonth(month) {
    month +=1;
    month = String(month);

    if (month.length < 2) {
        month = "0" + month; 
    }

    return month;
}

console.log(`${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`,
            `${getTwoDistrDay(currentDate.getDate())}.${getTwoDistrMonth(currentDate.getMonth())}.${currentDate.getFullYear()}`);

console.log(`${currentDate.toLocaleTimeString()} ${currentDate.toLocaleDateString()}`);

//Task 7
/*Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая
найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое
количество раз, буква 'a'.
 */

let str = 'aa aba abba abbba abca abea';
let regexp = /[a]{1}b+[a]{1}/g;

console.log(str.match(regexp));


//Task 8
/*Напишите ф-цию строгой проверки ввода номер телефона в
международном формате (<код страны> <код города или сети> <номер
телефона>). Функция должна возвращать true или false. Используйте
регулярные выражения.
 */

function checkPhoneNumber(number) {
    let regexpPhone = /^[+]{1}[\d]{1,3}[\(\ ][\d]{2,4}[\)\ ][\d]{2,3}-?[\d]{2,3}-?[\d]{2,3}$/g;

    if (regexpPhone.test(number)) {
        return true;
    } 
    
    return false;
}

console.log(checkPhoneNumber('+375(29)181-58-16'));

//Task 9
/* Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих
условия:
- весь адрес не должен содержать русские буквы и спецсимволы, кроме
одной «собачки», знака подчеркивания, дефиса и точки;
- имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
имя может содержать только буквы, цифры, но не быть первыми и
единственными в имени;
- после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.)
не может быть длиной менее 2 и более 11 символов.
Функция должна возвращать true или false. Используйте регулярные
выражения.
*/

function checkEmail(email) {
    let regexEmail = /^[a-zA-Z]{1}[\w\-\.]+@[\w]{2,11}\.[a-z]{2,11}$/g;

    if (regexEmail.test(email)) {
        return true;
    } 

    return false;
}

console.log(checkEmail('3info@info.com'))

//Task 10
/*  Напишите ф-цию, которая из полного адреса с параметрами и без,
например: https://tech.onliner.by/2018/04/26/smart-do-200/?
utm_source=main_tile&utm_medium=smartdo200#zag3 , получит адрес
доменного имени (https://tech.onliner.by), остальную часть адреса без
параметров (/2018/04/26/smart-do-200/), параметры
(utm_source=main_tile&utm_medium=smartdo200) и хеш (#zag3). В адресе
может и не быть каких-либо составляющих. Ф-ция должна возвращать
массив.
*/

let string = 'https://tech.onliner.by/?utm_source=main_tile&utm_medium=smartdo200#zag3'

function getElementsOfAddress(address) {
	let array = [];
	let temp = address.split('?');
    let domainAddress = temp[0].match(/^https\:\/\/[\w-\.]+\.[a-z]{2,11}/).toString();
    array.push(domainAddress);

    if (address.length > domainAddress.length) {
        let address2 = temp[0].split(/^https\:\/\/[\w-\.]+\.[a-z]{2,11}/).join('');
        array.push(address2);
    }

    if (temp[1]) {
        if (temp[1].indexOf('#') != -1) {
            let param = temp[1].slice(0, temp[1].indexOf('#'));
            let hash = temp[1].slice(temp[1].indexOf('#'));
            array.push(param, hash)
        } else {
            let param = temp[1].slice();
            array.push(param);
        }
    }

    return array;
}

console.log(getElementsOfAddress(string));
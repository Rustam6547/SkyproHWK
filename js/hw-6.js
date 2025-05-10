// Задание 1
// Преобразовать строку 'js' в верхний регистр.
let str = 'js';
console.log(str.toUpperCase());


// Задание 2
// Создать функцию, которая принимает массив строк и строку. Функция должна вернуть новый массив, содержащий только те элементы первого массива, которые начинаются со второй строки. Регистр символов не влияет на результат.


// Критерии оценки
// Работа будет оценена по следующим критериям
// Функция принимает массив строк и строку, возвращает новый массив с элементами, начинающимися с заданной строки, регистр не влияет.
// Результат работы загружен на GitHub и отправлена ссылка на pull request.
// Подсказка
// Используйте функции 
// toLowerCase()
//  и 
// startsWith()
//  для сравнения начала строк.
function filterStringsByPrefix(stringsArray, prefix) {
  const lowerCasePrefix = prefix.toLowerCase();
  return stringsArray.filter(string => 
      string.toLowerCase().startsWith(lowerCasePrefix)
  );
}
const strings = ["Apple", "banana", "apricot", "grape", "avocado", "Blueberry"];
const prefix = "a";

const result = filterStringsByPrefix(strings, prefix);
console.log(result); 


// Задание 3
// Округлить число 32.58884:

// До меньшего целого.
// До большего целого.
// До ближайшего целого.

const number = 32.58884;
// Округление до меньшего целого
const roundedDown = Math.floor(number);
console.log(`Округлено до меньшего целого: ${roundedDown}`); 
// Округление до большего целого
const roundedUp = Math.ceil(number);
console.log(`Округлено до большего целого: ${roundedUp}`); 

// Округление до ближайшего целого
const roundedNearest = Math.round(number);
console.log(`Округлено до ближайшего целого: ${roundedNearest}`); 

// Задание 4
// Найти минимальное и максимальное значения из чисел 52, 53, 49, 77, 21, 32 и вывести их в консоль.
const numbs = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...numbs));
console.log(Math.max(...numbs));

// Задание 5

function getRandomNumber() {
    return Math.floor((Math.random() * 10) + 1);
}
console.log(getRandomNumber());

// Задание 6
function halfNumberArray() {
    let Number = +prompt('Введите целое число');
    let array = [];
    for (let i = 0; i  < Number / 2; i++) {
        array.push(Math.floor(Math.random() * Number));
    }
    return array;    
}
console.log(halfNumberArray(Number));


// Задание 7
function generateRandomNumberInPeriod(mini, maxi) {
    return Math.floor(Math.random() * (maxi - mini + 1)) + mini;
}
console.log(generateRandomNumberInPeriod(5, 40));

// Задание 8
// Вывести в консоль текущую дату.

const currentDate1 = new Date();
console.log(currentDate1);

// Задание 9

const currentDate2 = new Date();

// Выводим текущую дату
console.log("Текущая дата: " + currentDate2.toLocaleDateString());

// Вычисляем дату через 73 дня
const futureDate = new Date(currentDate2); // Создаем новый объект даты на основе текущей даты
futureDate.setDate(currentDate2.getDate() + 73); // Устанавливаем новую дату, добавляя 73 дня

// Выводим дату через 73 дня
console.log("Дата через 73 дня: " + futureDate.toLocaleDateString());

// Задание 10
// Написать функцию, которая принимает дату и возвращает ее в формате:
function formatDate(date) {
    const days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const year = date.getFullYear();
    const day = date.getDate();
    const month = date.getMonth();
    const weekDay = days[date.getDay()];
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `Дата: ${day}.${month}.${year} - это ${weekDay}
    Время: ${hours}:${minutes}:${seconds}`;
}
console.log(formatDate(new Date()));
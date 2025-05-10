//дз №5
//задание 1
function minOfTwo(a, b) {
  return a < b ? a : b;
}
console.log(minOfTwo(8, 4));  
console.log(minOfTwo(6, 6));  

//задание 2
function checkEvenOdd(n) {
  if (n % 2 === 0) {
      return 'Число четное';
  } else {
      return 'Число нечетное';
  }
}
// Примеры использования функции
console.log(checkEvenOdd(4));  // Вывод: 'Число четное'
console.log(checkEvenOdd(7));  // Вывод: 'Число нечетное'
 
//задание 3
 // функция - квадрат числа в консоле
 function printSquare(n) {
  console.log(n * n);
}
printSquare(4);  
printSquare(5);  

//функция -возврат квадрата числа
function getSquare(n) {
  return n * n;
}
const squareOf4 = getSquare(4);
console.log(squareOf4);  

const squareOf5 = getSquare(5);
console.log(squareOf5);  

//задание 4
function askAge() {
  const age = prompt("Сколько вам лет?"); // Запрашиваем у пользователя его возраст
  const ageNumber = Number(age); // Преобразуем введенное значение в число

  if (ageNumber < 0) {
      console.log('Вы ввели неправильное значение');
  } else if (ageNumber >= 0 && ageNumber <= 12) {
      console.log('Привет, друг!');
  } else if (ageNumber >= 13) {
      console.log('Добро пожаловать!');
  } else {
      console.log('Вы ввели неправильное значение'); 
  }
}
askAge();

//задание 5
function multiplyIfNumbers(a, b) {
  
  const num1 = Number(a);
  const num2 = Number(b);
  if (isNaN(num1) || isNaN(num2)) {
      return 'Одно или оба значения не являются числом';
  }
  return num1 * num2;
}
console.log(multiplyIfNumbers(5, 10));      
console.log(multiplyIfNumbers('5', '10'));  
console.log(multiplyIfNumbers(5, 'abc'));    
console.log(multiplyIfNumbers('abc', null)); 
console.log(multiplyIfNumbers(5, NaN)); 

// задание 6
function cubeOfNumber() {
  const input = prompt("Введите число:"); 
  const number = Number(input); 

  if (isNaN(number)) {
      return 'Переданный параметр не является числом';
  }

  const cube = Math.pow(number, 3); 
  return `${number} в кубе равняется ${cube}`;
}

for (let i = 0; i <= 10; i++) {
  console.log(cubeOfNumber(i)); 
}    
 //заданиее 7
 function createCircle(radius) {
  return {
      radius: radius,
      getArea: function() {
          return Math.PI * Math.pow(this.radius, 2); // Площадь круга это у нас π * r^2
      },
      getPerimeter: function() {
          return 2 * Math.PI * this.radius; // Периметр окружности это у нас  2 * π * r
      }
  };
}

const circle1 = createCircle(5); 
const circle2 = createCircle(10); 

console.log(`Площадь круга 1: ${circle1.getArea().toFixed(2)}`); 
console.log(`Периметр круга 1: ${circle1.getPerimeter().toFixed(2)}`); 
console.log(`Площадь круга 2: ${circle2.getArea().toFixed(2)}`); 
console.log(`Периметр круга 2: ${circle2.getPerimeter().toFixed(2)}`); 



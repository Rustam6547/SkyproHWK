//игра угадай число
function gameNumber(){
  let userAnswer;
  userAnswer = Number (prompt('Угадай число от 1 до 100'));
  const number = Math. floor (Math.random () * 100) + 1;
  while (userAnswer !== number) 
    if (userAnswer < number) {
      alert(`Не угадал, больше. Попробуй еще!`);
      userAnswer = Number (prompt('Угадай число от 1 до 100'));
    }
    else if (userAnswer > number) {
      alert(`Не угадал, меньше. Вот-вот получится!`);
      userAnswer = Number (prompt('Угадай число от 1 до 100'));
    }
  alert ("Угадал, молодец!!!");
  
}

//  игра Переверни слово
function reverseWord() {
  let word = prompt('Введите слово');
  word = word.split('');
  word.reverse();
  word = word.join('');
  alert(`слово наоборот ${word}`);
  }

  // Викторина
  // Массив вопросов и правильных ответов
  // Основная функция игры 
  function victorina() {
    let score = 0; // Счетчик правильных ответов
    for (let i = 0; i < quiz.length; i++) {
      displayQuestion(quiz[i].question, quiz[i].options);
      let userAnswer = Number(prompt("Введите номер ответа:"));
      if (userAnswer === quiz[i].correctAnswer) {
        score++;
      }
    }
    alert("Вы ответили правильно на " + score + " вопрос(а).");
}
const quiz = [
    {
      question: "Какой цвет неба?",
      options: ["1. Красный", "2. Синий", "3. Зеленый"],
      correctAnswer: 2 // номер правильного ответа
    },
    {
      question: "Сколько дней в неделе?",
      options: ["1. Шесть", "2. Семь", "3. Восемь"],
      correctAnswer: 2
    },
    {
      question: "Сколько у человека пальцев на одной руке?",
      options: ["1. Четыре", "2. Пять", "3. Шесть"],
      correctAnswer: 2
    }
];
  
// Функция для отображения вопроса и вариантов ответа
function displayQuestion(question, options) {
  alert(question + ' ' + options);
}
const taskElement = document.getElementById('task');
const answerInput = document.getElementById ('answer');
const checkButton = document.getElementById('checkButton');
const resultElement = document.getElementById('result');
const nextButton = document.getElementById('nextButton');

let num1, num2, operator, correctAnswer;

function generateTask() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    const operators = ['+', '-', '*', '/'];
    operator = operators[Math.floor(Math.random() * operators.length)];

    if (operator === '/' && num2 === 0) {
        num2 = 1; // Избегаем деления на ноль
    }

    taskElement.textContent = `${num1} ${operator} ${num2} = ?`;

    switch (operator) {
        case '+':
            correctAnswer = num1 + num2;
            break;
        case '-':
            correctAnswer = num1 - num2;
            break;
        case '*':
            correctAnswer = num1 * num2;
            break;
        case '/':
            correctAnswer = num1 / num2;
            break;
    }

    answerInput.value = "";
    resultElement.textContent = "";
}

function checkAnswer() {
    const userAnswer = parseFloat(answerInput.value);
    if (isNaN(userAnswer)) {
        resultElement.textContent = "Введите корректное число!";
        return;
    }

    if (Math.abs(userAnswer - correctAnswer) < 0.0001) { // сравнение с небольшой погрешностью
        resultElement.textContent = "Правильно!";
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = `Неправильно. Правильный ответ: ${correctAnswer}`;
        resultElement.style.color = 'red';
    }

    checkButton.style.display = 'none';
    nextButton.style.display = 'inline-block';
}


checkButton.addEventListener('click', checkAnswer);

nextButton.addEventListener('click', () => {
  generateTask();
  checkButton.style.display = 'inline-block';
  nextButton.style.display = 'none';
});

generateTask();
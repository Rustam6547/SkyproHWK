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
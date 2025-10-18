const gameMessage = document.querySelector('.message') as HTMLParagraphElement;
const guessNumberInput = document.querySelector('.guess') as HTMLInputElement;
const checkButton = document.querySelector('.check') as HTMLButtonElement;
const againButton = document.querySelector('.again') as HTMLButtonElement;
const secretNumberElement = document.querySelector('.number') as HTMLDivElement;
const scoreElement = document.querySelector('.score') as HTMLParagraphElement;
const highscoreElement = document.querySelector(
  '.highscore'
) as HTMLParagraphElement;
const bodyElement = document.querySelector('body') as HTMLBodyElement;

let secretNumber: number = 0;
const defaultScore: number = 20;
let score: number = 20;

const initiateGame = function (): number {
  score = defaultScore;
  scoreElement.textContent = String(score);
  secretNumber = Math.floor(Math.random() * 20 + 1);

  return secretNumber;
};

const resetScore = function (): void {
  scoreElement.textContent = String(score);
};

const resetGame = function (): void {
  resetScore();
  initiateGame();
  bodyElement.style.backgroundColor = '#222';
  guessNumberInput.value = '';
  secretNumberElement.textContent = '?';
  secretNumberElement.style.width = '15rem';
  displayMessage('Start guessing...');
};

document.addEventListener('DOMContentLoaded', initiateGame);

const checkHighscore = function (score: number, highscore: number): void {
  if (score >= highscore) {
    highscoreElement.textContent = String(score);
  } else {
    highscoreElement.textContent = String(highscore);
  }
};

const displayMessage = function (message: string): void {
  gameMessage.textContent = message;
};

againButton.addEventListener('click', resetGame);

checkButton.addEventListener('click', function () {
  console.log(score);
  const guessNumberValue: number = Number(guessNumberInput.value);

  let highscoreNumeric: number = Number(highscoreElement.textContent);

  if (score >= 1) {
    if (!guessNumberValue || guessNumberValue === 0) {
      displayMessage('🥲 No number!');
      return;
    } else if (guessNumberValue > secretNumber) {
      displayMessage(
        guessNumberValue > secretNumber ? '📈 Too high!' : '📉 Too Low!'
      );
      score--;
      scoreElement.textContent = String(score);
    } else if (guessNumberValue === secretNumber) {
      displayMessage('🎉 Correct Number!');
      secretNumberElement.textContent = String(secretNumber);
      checkHighscore(score, highscoreNumeric);
      bodyElement.style.backgroundColor = '#60b347';
      secretNumberElement.style.width = '30rem';
    } else {
      displayMessage('😭 You lost the game!');
      bodyElement.style.backgroundColor = '#b34747ff';
    }
  }
});

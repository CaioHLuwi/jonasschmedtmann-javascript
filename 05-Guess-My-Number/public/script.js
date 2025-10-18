const gameMessage = document.querySelector('.message');
const guessNumberInput = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');
const secretNumberElement = document.querySelector('.number');
const scoreElement = document.querySelector('.score');
const highscoreElement = document.querySelector('.highscore');
const bodyElement = document.querySelector('body');
let secretNumber = 0;
const defaultScore = 20;
let score = 20;
const initiateGame = function () {
    score = defaultScore;
    scoreElement.textContent = String(score);
    secretNumber = Math.floor(Math.random() * 20 + 1);
    return secretNumber;
};
document.addEventListener('DOMContentLoaded', initiateGame);
const resetScore = function () {
    scoreElement.textContent = String(score);
};
const resetGame = function () {
    resetScore();
    initiateGame();
    bodyElement.style.backgroundColor = '#222';
    guessNumberInput.value = '';
    secretNumberElement.textContent = '?';
    secretNumberElement.style.width = '15rem';
    gameMessage.textContent = 'Start guessing...';
};
const checkHighscore = function (score, highscore) {
    if (score >= highscore) {
        highscoreElement.textContent = String(score);
    }
    else {
        highscoreElement.textContent = String(highscore);
    }
};
againButton.addEventListener('click', resetGame);
checkButton.addEventListener('click', function () {
    console.log(score);
    const guessNumberValue = Number(guessNumberInput.value);
    let highscoreNumeric = Number(highscoreElement.textContent);
    if (score >= 1) {
        if (!guessNumberValue || guessNumberValue === 0) {
            gameMessage.textContent = '🥲 No number!';
            return;
        }
        else if (guessNumberValue > secretNumber) {
            gameMessage.textContent = '📈 Too high!';
            score--;
            scoreElement.textContent = String(score);
        }
        else if (guessNumberValue < secretNumber) {
            gameMessage.textContent = '📉 Too low!';
            score--;
            scoreElement.textContent = String(score);
        }
        else if (guessNumberValue === secretNumber) {
            gameMessage.textContent = '🎉 Correct Number!';
            secretNumberElement.textContent = String(secretNumber);
            checkHighscore(score, highscoreNumeric);
            bodyElement.style.backgroundColor = '#60b347';
            secretNumberElement.style.width = '30rem';
        }
    }
    else {
        gameMessage.textContent = '😭 You lost the game!';
        bodyElement.style.backgroundColor = '#b34747ff';
    }
});
export {};
//# sourceMappingURL=script.js.map
const mainEl = document.querySelector('main');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const winMessage = document.querySelector('.win');
const winnerText = document.querySelector('#player-win');
let scores, currentScore, activePlayer, playing;
const init = function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    score0El.textContent = String(0);
    score1El.textContent = String(0);
    score0El.textContent = String(0);
    score1El.textContent = String(0);
    currentScore0El.textContent = String(0);
    currentScore1El.textContent = String(0);
    diceEl.classList.add('hidden');
    winMessage.classList.add('hidden');
    player0El.classList.add('player--active');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player1El.classList.remove('player--active');
    document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--winner');
    for (let i = 0; i < scores.length; i++) {
        scores[i] = 0;
    }
    currentScore = 0;
};
init();
const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = String(0);
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};
btnRollDice.addEventListener('click', function () {
    if (playing) {
        const dice = Math.trunc(Math.random() * 6 + 1);
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent =
                String(currentScore);
        }
        else {
            switchPlayer();
        }
    }
});
btnHold.addEventListener('click', function () {
    if (playing) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = String(scores[activePlayer]);
        if (scores[activePlayer] >= 10) {
            playing = false;
            diceEl.classList.add('hidden');
            winMessage.classList.remove('hidden');
            const whoWins = activePlayer === 0 ? 'Player 1' : 'Player 2';
            winnerText.textContent = whoWins;
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add('player--winner');
        }
        else {
            switchPlayer();
        }
    }
});
btnNewGame.addEventListener('click', init);
export {};
//# sourceMappingURL=script.js.map
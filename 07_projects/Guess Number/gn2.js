let randomNumber = Math.floor(Math.random() * 100) + 1;
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

submit.addEventListener('click', (e) => {
  e.preventDefault();
  if (playGame) validateGuess(parseInt(userInput.value));
});

function validateGuess(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert('Enter a number between 1 and 100');
  } else {
    prevGuess.push(guess);
    displayGuess(guess);
    guess === randomNumber ? endGame('You guessed it right!') : checkGuess(guess);
  }
}

function checkGuess(guess) {
  displayMessage(guess < randomNumber ? 'Number is TOO low' : 'Number is TOO high');
  if (++numGuess > 10) endGame(`Game Over. Random number was ${randomNumber}`);
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.textContent += `${guess}, `;
  remaining.textContent = 10 - numGuess;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(message) {
  displayMessage(message);
  userInput.disabled = true;
  startOver.innerHTML = '<h2 id="newGame">Start New Game</h2>';
  playGame = false;
  document.querySelector('#newGame').addEventListener('click', newGame);
}

function newGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  prevGuess = [];
  numGuess = 1;
  guessSlot.textContent = '';
  remaining.textContent = 10;
  userInput.disabled = false;
  startOver.innerHTML = '';
  playGame = true;
}

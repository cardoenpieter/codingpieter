/* DOM FETCHING */
let $numberInput = document.getElementById('number-input');
let $guessBtn = document.getElementById('guess-btn');
let $messageContainer = document.getElementById('message-container');
let $scoreContainer = document.getElementById('score-container');
let $retryBtn = document.getElementById('retry-btn');

/* STATE */
const MAX_GUESSES = 5;
let randomNumber;
let guessCount;
let gameOver;
let winCount = 0;
let gameCount = 0;

/* DOM UPDATES */

function writeMessage(message) {
    $messageContainer.innerText = message;
}

function emptyGuessInput() {
    $numberInput.value = '';
}
function showRetryBtn() {
    $guessBtn.disabled = true;
    $retryBtn.classList.remove('hide');
}
function hideRetryBtn() {
    $guessBtn.disabled = false;
    $retryBtn.classList.add('hide');
}

function writeScore() {
    $scoreContainer.innerText = `You won ${winCount} games out of ${gameCount}`
}

/* SCRIPT */
function genRandomNumber() {
    return Math.floor(Math.random() * 11);
}

function guessBtnClicked() {
    if (gameOver) {
        return;
    }
    
    writeMessage('');
    let guess = Number($numberInput.value);
    
    if (!(guess >= 0 && guess <= 10)) {
        writeMessage('Not a valid number, try again');
        return;
    }

    if (guessCount === MAX_GUESSES) {
        return;
    }
    
    guessCount++;
    
    if (randomNumber === guess) {
        writeMessage('You won');
        winCount++;             //updaten
        gameCount++;            //updaten
        gameOver = true;
    } else if (guessCount === MAX_GUESSES) {
        writeMessage('You lost');
        gameCount++;
        gameOver = true;
    } else if (randomNumber < guess) {
        writeMessage('Too high');
    } else if (randomNumber > guess) {
        writeMessage('Too low');
    }
    
    if (gameOver) {
        showRetryBtn();
        writeScore();
    }
}

function retryBtnClicked() {
    init();
}

//deze functie gebruiken om te heractiveren
function init() {
    randomNumber = genRandomNumber();
    guessCount = 0; //waarde 0 en niet waarde 1
    gameOver = false;
    
    hideRetryBtn();
    writeMessage('');
    emptyGuessInput();
}

/* EVENT LISTENERS */

$guessBtn.addEventListener('click', guessBtnClicked);
$retryBtn.addEventListener('click', retryBtnClicked);

/* RUN */

init();

/* 
Uitbreidingen

1. Max aantal guesses
    Bv. Na 5 foute guesses > verloren
2. Retry knop
    Na winst of verlies > retry knop tonen
3. Score bijhouden
    Bv. Won 6 games out of 10

 */
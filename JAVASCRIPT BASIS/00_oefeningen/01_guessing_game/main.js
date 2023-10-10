let $numberInput = document.getElementById('number-input');
let $guessBtn = document.getElementById('guess-btn');
let $messageContainer = document.getElementById('message-container');
let $resetButton;
const maxRounds = 5;


function genRandomNumber() {
    return Math.floor(Math.random() * 11);
}

let randomNumber = genRandomNumber();
console.log(randomNumber);

let guesscount = 1;
function btnClicked() {
    console.log('click');
    let guess = Number($numberInput.value);  //Number: deze laat enkel nummers toe in de input

    if (guess !== randomNumber && guesscount < maxRounds) {
            if (guess < 0 || guess > 10) {
            $messageContainer.innerText = 'Not a valid number, try again';
        } else if (randomNumber >= guess) {
            $messageContainer.innerText = 'Too low';
        } else if (randomNumber <= guess) {
            $messageContainer.innerText = 'Too high';
        }

    } else if (guess === randomNumber && guesscount <= maxRounds) {
        $messageContainer.innerText = 'You won in ' + guesscount + ' time(s)';
        $messageContainer.style.backgroundColor = 'darkgreen';
        setGameOver()
    } else {
        $messageContainer.innerText = 'You lost, the number was ' + randomNumber;
        $messageContainer.style.backgroundColor = 'darkred';
        setGameOver()
    }

    guesscount++;
    $numberInput.value = '';
    $numberInput.focus();
}
$guessBtn.addEventListener('click', btnClicked);



function setGameOver() {
    $numberInput.disabled = true;
    $resetButton = document.createElement('button');
    $resetButton.textContent = 'Start new game';
    document.body.append($resetButton);
    $resetButton.addEventListener('click', resetGame);
}


function resetGame() {
    //[vraag]hier een loop om het spel te resetten?
    guesscount = 1;
    $numberInput.disabled = false;
    $numberInput.value = '';
    $resetButton.z;
    randomNumber = Math.floor(Math.random() * 11);
    console.log(randomNumber);
}






   // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash













/*
Uitbreidingen

1. Max aantal guesses
    Bv. Na 5 foute guesses > verloren
2. Retry knop
    Na winst of verlies > retry knop tonen
3. Score bijhouden
    Bv. Won 6 games out of 10

 */







let $numberInput = document.getElementById('number-input');
let $guessBtn = document.getElementById('guess-btn');
let $messageContainer = document.getElementById('message-container');
let $retryBtn = document.getElementById('retry-btn');

function genRandomNumber() {
    return Math.floor(Math.random() * 11);
}

let randomNumber = genRandomNumber();
console.log(randomNumber);


function btnClicked() {
    console.log('click');
    let guess = Number($numberInput.value);  //Number: deze laat enkel nummers toe in de input
    
    if (guess >= 0 && guess <= 10) {
        if (randomNumber === guess) {
            $messageContainer.innerText = 'You won';
        } else if (randomNumber < guess) {
            $messageContainer.innerText = 'Too high'
        } else if (randomNumber > guess) {
            $messageContainer.innerText = 'Too low';
        }
    } else {
        $messageContainer.innerText = 'Not a valid number, try again';
    }
}

$guessBtn.addEventListener('click', btnClicked);




/* 
Uitbreidingen

1. Max aantal guesses
    Bv. Na 5 foute guesses > verloren
2. Retry knop
    Na winst of verlies > retry knop tonen
3. Score bijhouden
    Bv. Won 6 games out of 10

 */
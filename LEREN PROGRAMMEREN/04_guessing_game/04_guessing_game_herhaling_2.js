/**
 * Generate a random number between 0 and 10 (randomNumber)
 * Prompt for a number between 0 and 10 (userNumber)
 * If userNumber is not a valid number ask again                 // while loop? er moet een loop gebruikt worden, eerst programmeren zonder loop, volgende stap wel loops gebruiken
 * Check userNumber
 *      - userNumber is too low, prompt for new number
 *      - userNumber is too high, prompt for new number
 *      - userNumber is correct
 *          > confirm: 'You won in [x] guesses, want to try again?'
 *              - if true: start over
 *              - if false: alert 'See you next time'
 */

//function random nummer genereren 
function inputRandomNumber(){
    let randomNumber = Math.floor(Math.random() * 11);    //variabale insteken 
    return randomNumber;                                  // functie stoppen en value uithalen, binnen de functie zelf
}
console.log(inputRandomNumber());                          // testen of dit werkt



//function wanneer geen geldige data
function inputValidUsernumber(){
    let userNumber = prompt ('Fill in number between 0 and 10');
    let userNumberToInteger = Number.parseInt(userNumber);
        while (Number.isNaN(userNumberToInteger) || userNumberToInteger < 0 || userNumberToInteger > 10) {
           userNumber = prompt (userNumber + ' is fault, fill in a number between 0 and 10' );        //dit is een statement, waarom wordt dit herhaald? 
           userNumberToInteger = Number.parseInt(userNumber);                                       //dit is een statement, waarom wordt dit herhaald?
        }
        return userNumberToInteger;
}
console.log(inputValidUsernumber());

//spel spelen
function playGame() {
    let randomNumber = inputRandomNumber();
    let userNumber = inputValidUsernumber();
    guessCount = 1;                                                 //guesscount staat op 1, waarom?
        while (randomNumber !== userNumber && guessCount < 6) {  //deze guesscount is hardcoded
            if(randomNumber < userNumber) {
                alert (userNumber + ' is to high, try again');
            } else {
                alert (userNumber + ' is to low, try again');
            }
            userNumber = inputValidUsernumber();
            guessCount ++;
        }

        if (randomNumber === userNumber) {
            return confirm ('You won in ' + guessCount + ' times, play again?');
        } else {
            return confirm ('you lose, the number was ' + randomNumber);
        }
}
console.log(playGame());


//spel herhalen
function repeatGame(){
    let playAgain = true;
        while(playAgain) {
            playAgain = playGame();
        }
        alert ('See you next time');
}

repeatGame();





































//randomnumber
function inputRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 11);
    return randomNumber;
}

//input moet Integer zijn en mag geen strings zijn, alsook input mag niet kleiner dan 0 en groter dan 10 zijn, we steken hier een while loop in om deze te herhalen wanneer de input verkeerd is tot hij wel een juiste return doet
function inputValidUsernumber() {
    let userNumber = prompt ('Fill in a number between 0 and 10.');
    let userNumberToInteger = Number.parseInt(userNumber);
        while (Number.isNaN(userNumberToInteger) || userNumberToInteger < 0 || userNumberToInteger > 10) {  //enkel de 'of' 'of' toepassen: we kunnen ze niet alle 3 tegelijk toepassen
            userNumber = prompt (userNumber + ' is wrong, fill in a number between 0 and 10.');              //opletten: hier enkel usernumber terugvragen
            userNumberToInteger = Number.parseInt(userNumber);
        }
        return userNumberToInteger;
}

//spel spelen en randomnumber vastzetten
const maxRounds = 4;
function playGame() {
    let randomNumber = inputRandomNumber();                     //hier wordt de randomnumber vastgezet?[KORNEEL]
    let userNumber = inputValidUsernumber();                    //waarom hier usernumber en niet usernumbertointeger gebruiken?[KORNEEL]
    let guessCount = 1;                                         //guesscount op 1, waarom niet op 0?  [KORNEEL]
        while (randomNumber !== userNumber && guessCount < maxRounds) {
            if (randomNumber < userNumber) {
                alert (userNumber + ' is too high, try again.');
            } else {
                alert (userNumber + ' is too low, try again');
            }
            userNumber = inputValidUsernumber();       //waarom wordt dit nog eens herhaald? trigger om de while loop te voeden?[KORNEEL]
            guessCount ++;

        }

        if (randomNumber === userNumber) {
            return confirm ('You won in ' + guessCount + ' times, play again?');
        } else {
            return confirm ( 'You lost, the number was ' + randomNumber)
        }
}

//spel herhalen
function repeatGame() {
    let playAgain = true
        while (playAgain) {
            playAgain = playGame();
        }
        alert ('See you next time')
}

repeatGame();

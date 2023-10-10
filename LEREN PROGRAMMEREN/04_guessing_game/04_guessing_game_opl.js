// oefening met een DO WHILE LOOP
function generateRandomNumberBetween0And10() {
    return Math.floor(Math.random() * 11);
}

function askForNumberBetween0And10() {
    let userNumber = prompt('Enter a number between 0 and 10');
    let parsedUserNumber = Number.parseInt(userNumber);

    while (
        Number.isNaN(parsedUserNumber) ||
        parsedUserNumber < 0 ||
        parsedUserNumber > 10
    ) {
        userNumber = prompt(
            userNumber +
                ' is not a valid number. Enter a number between 0 and 10!'
        );

        parsedUserNumber = Number.parseInt(userNumber);
    }

    return parsedUserNumber;
}

function guessingGameRound() {
    let randomNumber = generateRandomNumberBetween0And10();
    let userNumber;
    let guessCount = 0;
    let guessCountMax = 5;

    do {
        userNumber = askForNumberBetween0And10();
        guessCount++;

        if (userNumber < randomNumber) {
            alert(userNumber + ' is too low, try again.');
        } else {
            alert(userNumber + ' is too high, try again.');
        }
    } while (randomNumber !== userNumber);
         return confirm('You won in ' + guessCount + ' times. Play again?') 
}





function guessingGame() {
    let playAgain = true;

    while (playAgain) {
        playAgain = guessingGameRound();
    }

    alert('See you next time!');
}

guessingGame();



// zonder de DO WHILE LOOP
// function guessingGameRoundWhile() {
//     let randomNumber = generateRandomNumberBetween0And10();
//     let userNumber = askForNumberBetween0And10();
//     let guessCount = 1;

//     while (randomNumber !== userNumber) {
//         if (userNumber < randomNumber) {
//             alert(userNumber + ' is too low, try again.');
//         } else {
//             alert(userNumber + ' is too high, try again.');
//         }

//         userNumber = askForNumberBetween0And10();
//         guessCount++;
//     }

//     return confirm('You won in ' + guessCount + ' times. Play again?');
// }



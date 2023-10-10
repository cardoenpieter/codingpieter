
//in een aparte functie steken
function generateRandomNumberBetween0And10() {                  
    let randomNumber = Math.floor(Math.random() * 11);
    console.log(randomNumber);

    return randomNumber;
}
//hier ook in een apartie functie steken
function askForNumberBetween0And10() {                          
    let userNumber = prompt('Enter a number between 0 and 10');
    let parsedUserNumber = Number.parseInt(userNumber);

    while (
        Number.isNaN(parsedUserNumber) ||
        parsedUserNumber < 0 ||
        parsedUserNumber > 10
    ) {
        userNumber = prompt(                                //waarom hier usernumber en niet parsedusernumber? VRAAG LES
            userNumber +
                ' is not a valid number. Enter a number between 0 and 10!'
        );

        parsedUserNumber = Number.parseInt(userNumber);   //waarom hier nog eens herhaald? Typisch JS? VRAAG LES
    }

    return parsedUserNumber;
}
//bovenstaande functies zijn apart, waarom: wanneer deze juist zijn kunnen deze gebruikt worden in de verdere codering.
//wat kunnen we gebruiken? generateRandomNumberBetween0And10 en askForNumberBetween0And10


//DO: hij gaat eerst de eerste ronde checken en dan pas nadien gaat hij verder loopen
// function guessingGameRound() {
//     let randomNumber = generateRandomNumberBetween0And10();
//     let userNumber;  // hier staat niets in aangezien we de count bij 0 starten en omdat we anders één te veel zouden tellen
//     let guessCount = 0;

//     do {
//         userNumber = askForNumberBetween0And10();
//         guessCount++;

//         if (userNumber < randomNumber) {
//             alert(userNumber + ' is too low, try again.');
//         } else {
//             alert(userNumber + ' is too high, try again.');
//         }
//     } while (randomNumber !== userNumber && guessCount < 5); //guesscount < 5: je mag niet meer dan 5 keer raden, op de 5e keer toch juist raden, blijft juist

//     if (randomNumber === userNumber) {
//         return confirm('You won in ' + guessCount + ' times. Play again?');
//     } else {
//         return confirm(
//             'You lost, the number was ' + randomNumber + '. Play again?'
//         );
//     }
// }

 function guessingGameRoundWhile() {
    let randomNumber = generateRandomNumberBetween0And10();
     let userNumber = askForNumberBetween0And10(); // hier staat wel data in, daarom dat de count op 1 staat
     let guessCount = 1;

     while (randomNumber !== userNumber && guessCount < 5) {
         if (userNumber < randomNumber) {
            alert(userNumber + ' is too low, try again.');
        } else {
            alert(userNumber + ' is too high, try again.');
        }

        userNumber = askForNumberBetween0And10();
        guessCount++;
    }

    if (randomNumber === userNumber) {
         return confirm('You won in ' + guessCount + ' times. Play again?');
     } else {
         return confirm(
             'You lost, the number was ' + randomNumber + '. Play again?'
         );
 }
}

function guessingGame() {       //dit is uit de loop gehaald zodat er opnieuw kan gespeeld worden
    let playAgain = true;

    while (playAgain) {
        playAgain = guessingGameRoundWhile();
    }

    alert('See you next time!');
}

guessingGame();
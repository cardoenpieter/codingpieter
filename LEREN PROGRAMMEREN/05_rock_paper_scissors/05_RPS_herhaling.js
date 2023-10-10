/**
 * Prompt for rock, paper of scissors
 * Check if valid input
 *      > if not ask again
 * Convert input to number -> rock = 0, paper = 1, scissors = 2
 * Generate random number between 0 and 2
 * Check if tie
 *      > confirm 'It was a tie, try again?'
 *          > if true > start over
 *          > if false alert score > 'Player 1 - AI 3'
 * Determine winner
 *      > player = 0 - AI = 1 > AI wins
 *      > player = 0 - AI = 2 > Player wins
 *      > player = 1 - AI = 0 > Player wins
 *      > player = 1 - AI = 2 > AI wins
 *      > player = 2 - AI = 0 > AI wins
 *      > player = 2 - AI = 1 > Player wins
 *          > confirm '[winner] won, try again?'
 *              > if true > start over
 *              > if false alert score
 */

// [EXERCISE] - Keep score
// [BONUS EXERCISE] - Make this game a best of 5 game:
// Whenever the AI or the player achieves 3 points he, she or it has won.

//randomnumber
function inputRandomNumber(){
    let randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
}
console.log(inputRandomNumber());

//input strings to integers, dus rock=0 paper=1 scissors=2
// function inputRPS(numberRPS) {
//     if (numberRPS === 'rock') {
//         return 0;
//     } else if (numberRPS === 'paper') {
//         return 1;
//     } else if (numberRPS === 'scissors') {
//         return 2;
//     }
// }

 //alternatief met switch
 function inputStringToNumRPS (numberRPS) {         //data tussen haakjes omdat we deze willen gaan omzetten naar bruikbare data
    let inputRPS;                                   //variabele nodig om rock,paper,scissors te gaan bepalen naar een integer
    switch (numberRPS) {
        case 'rock' : 
            inputRPS = 0;
            break;                                  //break nodig, anders blijft hij maar doorgaan tot het einde van deze switch
        case 'paper' : 
            inputRPS = 1;
            break;
        case 'scissors' :
            inputRPS = 2;
    }
    return inputRPS;                                //de variabale laten returnen zodat 0 rock wordt, 1 paper enz...
 }


//input valid maken en tot tolowercase brengen
function inputValidRPS() {
    let validInput = prompt ('Fill in rock, paper or scissors').toLowerCase();
        while (validInput !== 'rock' && validInput !== 'paper' && validInput !=='scissors') {
            validInput = prompt (validInput + ' is not correct, fill in rock, paper or scissors').toLowerCase();        //opnieuw input vragen met tolowercase
        }
        return inputStringToNumRPS (validInput);    //return op de input van string naar integer met de data tussen haakjes die in deze functie wordt toegepast
}
console.log(inputValidRPS());

//spel spelen
function playGameRPS() {
    let AI = inputRandomNumber();
    let userPlayer = inputValidRPS();
        while (AI === userPlayer) {                 //while loop wanneer er een gelijkstand is
            alert ('It was a tie, try again');
            AI = inputRandomNumber();               //variabele opnieuw herhalen
            userPlayer = inputValidRPS();           //variabele opnieuw herhalen
        }
        if ((userPlayer === 0 || AI === 2) || (userPlayer === 1 || AI === 0) || (userPlayer === 2 || AI ===1)) { //(waneer userplayer rock EN AI scissors,userplayer wint) OF (wanneer userplayer paper EN AI rock,userplayer wint) OF ...
            return true;                            //geldt altijd JUIST wanneer deze scores voorkomen
        } else {
            return false;                           //geldt NIET meer wanneer bovenstaande score anders zijn dan voorschreven
        }
}

//spel spelen, score bijhouden en max aantal ronden 
const maxScore = 5;
const maxRounds = maxScore / 2; 
function playGameScoreRPS () {
    let playerScore = 0;
    let AIScore = 0;
        while (playerScore <= maxScore && AIScore <= maxScore && playerScore + AIScore < maxRounds) {
            let playerWin = playGameRPS();
                if (playerWin) {                //if clause gebruiken vanuit de functie playgameRPS, want deze bepaalt wanneer wie scoort en wanneer er een gelijkspel is
                   playerScore++,               //playerscore optellen
                    alert ('You won, score player: ' + playerScore + ' | score AI: ' + AIScore);
                } else {
                    AIScore++;                  //AI score optellen
                    alert ('You lost, score player: ' + playerScore + ' | score AI: ' + AIScore);
                }
         }

    if (playerScore > maxRounds) {
        return confirm ('Your score is: ' + playerScore + '| score AI: ' + AIScore);
    } else if (AIScore > maxRounds) {
        return confirm ('Your score is: ' + playerScore + '| score AI: ' + AIScore);
    } else {
        return confirm ('Match was a tie. Your score is: ' + playerScore + '| score AI: ' + AIScore);
    }
}

//spel herhalen
function repeatGame() {
    let playGame = true;
        while (playGame){
            playGame = playGameScoreRPS();
        }
    alert ('See you next time');
}

repeatGame();









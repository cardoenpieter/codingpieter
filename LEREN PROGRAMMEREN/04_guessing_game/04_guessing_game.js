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
 // alert
 //alert('hello world');
 
 // confirm
 //let yesOrNo = confirm('Are you hungry?');
 //console.log(yesOrNo);
 
 // prompt                                          //prompt gebruikt strings, parseint gebruiken om van string naar number te gaan
 //let name = prompt('What is your name?');
 //console.log(name);

 //console.log(Math.floor(Math.random() * 11 ));       //getal gecreëerd tussen 0 en 11, dus 10 kan er bij zitten

 // NaN: wnn gebruiker een foutieve input ingeeft moet dit verschijnen, zie codering Number.isNaN(Number);

 //genoeg console.log gebruiken en stap per stap te werken

// ctrl k c    alles commenten




function inputRandomNumber () {
    let randomNumber = Math.floor(Math.random() * 11);
    console.log(randomNumber);
    return randomNumber
}


function inputUserNumber () {
    let userNumber = prompt ('Fill in number between 0 and 10');
    let userNumberToInteger = Number.parseInt(userNumber);

    return userNumberToInteger;
}


function inputUserNumber () {
    let userNumber = prompt ('Fill in number between 0 and 10');
    let userNumberToInteger = Number.parseInt(userNumber);

    while (Number.isNaN(userNumberToInteger) || userNumberToInteger < 0 || userNumberToInteger > 10) {
        userNumber = prompt (userNumber + ' is wrong, fil in a number between 0 and 10'); 
        userNumberToInteger = Number.parseInt(userNumber);  
    }
    return userNumberToInteger;
}

function playGame () {
    let randomNumber = inputRandomNumber ();
    let userNumber = inputUserNumber ();
    let guessCount = 1;
    

    while (randomNumber !== userNumber) {
        if (userNumber < randomNumber) {
            alert(userNumber + ' is too low, try again.');
    } else {
            alert(userNumber + ' is too high, try again.');
        }
        
    userNumber = inputUserNumber ();
    guessCount++;
    }
    

    if (randomNumber === userNumber) {
        return confirm ('You won in ' + guessCount + ', want to try again?');
        } else {
            return confirm ('You lost, the number was ' + randomNumber + '. Play again?');
        }
    }
    


function repeatGame () {
    let playAgain = true;

        while(playAgain) {
            playAgain = playGame();
        }
    alert ('See you next time');   
}

repeatGame();








/* DOM FETCHING */
let $image = document.getElementById('image');   //input image 1 to 9
let $solutionContainer = document.getElementById('solution-container'); //letters in the correct position
let $winLoseContainer = document.getElementById('win-lose-container'); //won or lose
let $inputLetter = document.getElementById('letter-container'); //input letter
let $guessLetter = document.querySelectorAll('.letter'); //class guessing letter
let $solutionLetter = document.querySelectorAll('.solution-letter') // class solution letter



/* STATE */
const randomWords = [
    'condition',
    'bottom',
    'lineage',
    'trip',
    'reporter',
    'paper',
    'colorful',
    'agent',
    'justify',
    'torture',
    'cap',
    'earthflax',
    'payment',
    'research',
    'picture',
    'garage',
    'honor',
    'memorial',
    'planet',
    'biography',
    'profound',
    'rumor',
    'gear',
    'bedroom',
    'orthodox',
    'penalty',
    'grief',
    'promote',
    'roof',
    'suite',
    'moving',
    'killer',
    'museum',
    'essay',
    'fever',
    'dignity',
    'shadow',
    'enjoy',
    'kill',
    'shy',
    'counter',
    'pawn',
    'button',
    'bullet',
    'skin',
    'rate',
    'shop',
    'consider',
    'other',
    'prospect',
];
let newArrayWord = [];
let newWordString = '';
const MAX_GUESSES = 9;
//let guessWord;
let clickLetter = '';
let imageNumber;
//let countRandomWord;


/* SCRIPT */
function drawImage(imageNumber) {
    $image.src = `images/hangman0${imageNumber}.png`; //dynamisch, enkel nog een nummer toe te voegen
}

    //SELECT RANDOM WORD
function randomWordFromList() {  
    for (let i = 0; i < randomWords.length; i++) {
        console.log('randomwords', randomWords[i]);
    }
        let randomIndex = Math.floor(Math.random() * randomWords[i].length); 
        let randomItem = randomWords.splice(randomIndex, 1); //1 item weghalen uit de array en bij een splice maken we opnieuw een array van 1 getal aan
        //console.log('randomitem', randomItem); //toont maar de helft van de woorden
        
    
        newWordString = newWordString + ' ' + randomItem;
    
        return newWordString; 


    
}

//console.log('1 word', randomWordFromList()); //1 waarde


    //CLICK GUESS LETTER
    let randomString = randomWordFromList();
    //console.log('randomstring', randomWordFromList());//3 waardes
// function clickGuessLetter(event) { 
//     clickLetter = event.target.innerText.toLowerCase();
//     if (randomString.includes(clickLetter) === true) {
//         console.log('correct letter')
        
//     } else {
//         console.log('wrong letter')
//     }
// }

//     for (let i = 0; i < $guessLetter.length; i++) {
//         $guessLetter[i].addEventListener('click', clickGuessLetter);
//     }

//     //SET TOTAL CHARACTERS TO FILL IN
//     let randomStringWord = randomWordFromList();
// function setTotalCharacters () {
//     for (let i = 0; i < randomStringWord.length; i++) {
        
//        // console.log(randomStringWord[i]);
        
//     }
    
// }
// //console.log(setTotalCharacters());



/* EVENT LISTENERS */



/* RUN */


//bij foute letter
//counter update
//update image
//class letter aanpassen
//controle aantal keer fout bij 9 

//methode geven = een nieuwe functie schrijven

//proberen woorden dubbel op te slaan zodat het originele blijft staan en bij juist raden kan dit getoond worden
//2e woord: telkens bij het raden, die specifieke letter uithalen totdat het woord leeg is = woord gevonden
//nadien met een array elke letter op de juiste plaats zetten


















    //GUESS LETTERS IN RANDOM WORD
// function guessRandomWord (){
//     for (let i = 0; i < newWordString.length; i++) {                
//         let foundIndex = guessWord.includes(newWordString[i], 0);          
//         if (foundIndex !== -1) {                                      
//             guessWord = guessWord + newWordString[i];                   
//         }
//     }
//     return guessWord;
//  }
//  console.log('test', guessRandomWord());


  
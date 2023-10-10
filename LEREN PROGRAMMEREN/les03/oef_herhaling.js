// woord beginnen met hoofdletter

function isCapitalised(word) {
    let firstLetter = word.charAt(0);
    let otherLetters = word.substring(1);
    let capitelisedWord = firstLetter.toUpperCase() + otherLetters.toLowerCase();

    if (capitelisedWord === word) {
        return true;
    } else {
        return false;
    }
}
console.log(isCapitalised('Pieter')); 

// woord rijmen

function rhymeWord(word) {
    let EndOfWord = word.substring(word.length - 3);

    if (EndOfWord === 'oel') {
        return 'stoel ' + word;
    } else {
        return 'wrong answer';
    }
}
console.log(rhymeWord('tafel'))

// woord rijmen met functie array

function rhymeWord2(word2) {
    if(word2.slice(-3) === 'oel') {
        return 'stoel ' + word2;
    } else {
        return 'again not correct';
    }
}
console.log(rhymeWord2('voel'));

//ARAY

let myArray = [2, 'Pete', 2.99, 'another string', 5, 'Pieter', 314, '555'];
console.log(myArray[5]);
console.log(myArray[myArray.length - 1]);

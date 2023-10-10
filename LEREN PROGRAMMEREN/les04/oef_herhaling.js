//WHILE LOOP
let count = 0;              //start van deze waarde te tellen
let maxVal = 10;           // tot max van deze waarde -1

while (count < maxVal) {
    console.log(count);
    count ++;               // telkens +1 bijtellen
}

//FOR LOOP
function sumUntil(num) {
    let sum = 0;                        //let sum = 0, we steken hier iets in en we tellen er altijd +1 bij let i=1                      
    for (let i = 1; i <= num; i++) {        //i <= num deze conditie blijft waar en blijft lopen, tot wanneer hij false is
        sum += i;                           //i++ deze is nodig om de loop te voeden
    }                                       // sum+= i, dit wil zeggen sum = sum + i
    return sum;
}
console.log(sumUntil(10)); 

//hoogste nummer

function max(numOne, numTwo) {
    if (numOne > numTwo) {
    return numOne;
} else { 
    return numTwo;
    }
}
console.log (max(3, 4));

//plus min delen vermenigvuldig

function calculate(Operator, numOne, numTwo) {
    if (Operator === 'min') {
        return numOne - numTwo;
    } else if(Operator === 'plus') {
        return numOne + numTwo;
    } else if(Operator === 'divide') {
        return numOne / numTwo;
    } else if(Operator === 'multiply') {
        return numOne * numTwo;
    }
}
console.log(calculate('plus', 10, 15));

//alternatief plus min delen vermenigvuldig
function calculate2(Operator, numOne, numTwo) {
    switch(Operator) {
        case 'min':
            return numOne - numTwo;
        case 'plus':
            return numOne + numTwo;
        case 'multiply':
            return numOne * numTwo;
        case 'divide':
            return numOne / numTwo;
    }
}
console.log(calculate2('multiply', 2, 3));

// eerste letters tellen
function countWords(text) {
    let numberOfWords = 1;

    for (let i = 1; i < text.length; i++) {       //let i=1 het eerste woord niet laten meetellen
        if (text.charAt(i) === ' ' && text.charAt(i - 1) !== ' ' && text.charAt(i + 1) !== ' ' && i !== text.length - 1) {             //text.charAt(i - 1) !== ' ' is vorige karakter geen spatie, woord optellen
            numberOfWords += 1;
        }
    }
    return numberOfWords;
}
console.log(countWords('Captains are the bung holes of the salty madness.')); 
console.log(countWords(' Captains are the bung holes of the salty madness.')); 
console.log(countWords(' Captains are the bung    holes of the salty madness.')); 
console.log(countWords(' Captains are the bung    holes of the salty madness . ')); 


// eerste letters zoeken
function firstLetters(text) {
    let firstLetters = '';    //hier hebben we een string nodig, vandaar een lege string om te beginnen
    
    for (let i = 0; i < text.length; i++) {
        if (i === 0 && text.charAt(i) !== ' ') {     
               
            firstLetters += text.charAt(i);
        } else if (text.charAt(i) !== ' ' && text.charAt(i - 1) === ' ' && text.charAt(i) !== '.') { //index i geen spatie is, index i min 1 letter is gelijk aan een spatie, index i is niet gelijk aan een punt
            firstLetters += text.charAt(i);
        }
    }

    return firstLetters;
}


console.log(firstLetters('United suns, to the holodeck.')); // > 'Ustth'
console.log(
    firstLetters(
        'When one traps bliss and joy, one is able to facilitate totality.'
    )
); // > 'Wotbajoiatft'
console.log(firstLetters('Captains are the bung holes of the salty madness.')); // > 'Catbhotsm'
console.log(firstLetters(' Captains are the bung holes of the salty madness.')); // > 'Catbhotsm'
console.log(
    firstLetters(' Captains are the bung    holes of the salty madness.')
); // > 'Catbhotsm'
console.log(
    firstLetters(' Captains are the bung    holes of the salty madness . ')
); // > 'Catbhotsm'
// WHILE LOOP

let count = 1;
let maxVal = 10;

while (count < maxVal) {
    console.log(count);
    count++;
}


// FOR LOOP

for (let i = 0; i < maxVal; i++) {        // 
    console.log(i);
}


////// Sum Until \\\\\\
// Start counting and sum every number.
// Stop at [num]

function sumUntil(num) {
    let sum = 0;                            // beginnen bij cijfer 0
    for (let i = 1; i <= num; i++) {        // 
        sum += i;
    }
    return sum;
}

////// Tests \\\\\\
console.log(sumUntil(4)); // 1 + 2 + 3 + 4 > 10
console.log(sumUntil(6)); // 1 + 2 + 3 + 4 + 5 + 6 > 21
console.log(sumUntil(70)); // 1 + 2 + .. + 69 + 70 > 2485


////// Calculate \\\\\\
/*
Write a function that does the correct calculation
[operator] has following possible values:
'min', 'plus', 'multiply', 'divide'
 */

function calculate(operator, numOne, numTwo) {
    if (operator === 'min') {
        return numOne - numTwo;
    } else if (operator === 'plus') {
        return numOne + numTwo;
    } else if (operator === 'multiply') {
        return numOne * numTwo;
    } else if (operator === 'divide') {
        return numOne / numTwo;
}
}


////// Tests \\\\\\
console.log(calculate('min', 5, 3)); // > 2
console.log(calculate('plus', 5, 3)); // > 8
console.log(calculate('multiply', 5, 3)); // > 15
console.log(calculate('divide', 6, 3)); // > 2



/////// Count Words \\\\\\
/*
Count all the words in [text]
 */

function countWords(text) {
    let word = 0;   
    for (let i = 1; i = word.charAt(0); i++) {
        word += i;
    }                         
    return text;

}

////// Tests \\\\\\
console.log(countWords('United suns, to the holodeck.')); // > 5
console.log(countWords('When one traps bliss and joy, one is able to facilitate totality.')); // > 12
console.log(countWords('Captains are the bung holes of the salty madness.')); // > 9
console.log(countWords(' Captains are the bung holes of the salty madness.')); // > 9
console.log(countWords(' Captains are the bung    holes of the salty madness.')); // > 9
console.log(countWords(' Captains are the bung    holes of the salty madness . ')); // > 9
// second exercises

// return 'adult' if the age is higher than 17
// return 'child' if the age is lower then 18

function adultOrNot(age) {
   if (age <= 17) {
    console.log('child');       //console.log moet hier niet inzitten, enkel return
   } else {
    console.log('adult');
   }
}
console.log(
    adultOrNot(86)                // probleem hier is dat er altijd een undefined bij komt staan
);


// return 'what a long name' when the name is longer than 8 characters
// return 'what a sad short name' when the name is shorter than 9 characters

function longName(name) {
if (name.length < 9 ) {
    console.log('what a sad short name');
} else {
    console.log('what a long name');
}
}
console.log(
    longName('Korneelaa')
    );                          //ook hier komt er een undefined in de terminal



// return 'odd' when number is odd
// return 'even' when number is even

function oddOrEven(number) {
if (number % 2 === 0) {         // heeft te maken met de de remainder
    console.log('even');
} else {
    console.log('odd');
}
}
console.log(
    oddOrEven(42)
    );                      // in de terminal een extra undefined                                       




// return 'tof [word]' when the word rimes with tof
// return 'that doesn't rime' when it does not
function rimesWithTof(word) {
if (word.slice(-2) === 'of') {    // arrays, kan ook met slice dus correct, zie GITHUB voor andere oplossing met substring en length, opgelet word.length-3 staat er fout, het moet -2 zijn
    console.log('tof');
} else {
    console.log('that doesn\'t rime');
}
}
console.log(rimesWithTof('plof')); // -> 'tof plof'
console.log(rimesWithTof('hahaha'));// -> "that doesn't rime" || 'that doesn\'t rime'
console.log(rimesWithTof('kip'));

// return true if word is already capitalised
// return false if it is not
function isCapitalised(word) {
    let firstLetter = word.charAt(0);
    let otherLetters = word.substring(1);
    let isCapitalised = firstLetter.toUppercase() + otherLetters.toLowercase();

    if (isCapitalised === word) {
        return true;
    } else {
        return false;
    }
}

console.log(isCapitalised('Pieter')); // -> true
console.log(isCapitalised('pieter')); // -> fals
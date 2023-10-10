//werkt niet
function validOrNot(userNumber) {
    let randomNumber = Math.floor(Math.random() * 11);
    let aNumber = prompt('Fill in Number');
    let correct = confirm('You won in [x] guesses, want to try again?');
    let inCorrect = prompt('Fill in again');
    let count = 0;
    let maxVal = 10;
while(count < maxVal) {
    count++;
    if(aNumber === randomNumber) {
        return correct;
}
}
}
console.log(validOrNot());


//werkt niet, eeuwige loop
function validOrNot(userNumber) {
    let randomNumber = Math.floor(Math.random() * 11);
    let count = 0;
    let maxVal = 10;
    let correctNumber = confirm('You won');
    let aNumber = prompt('Fill in Number');
        while(count < maxVal) {
            if (aNumber === randomNumber) {
                return correctNumber;
            } else if (aNumber < 0) {
                prompt('Too low, fill in new Number');
            } else if (aNumber > 10) {
                prompt('Too high, fill in new Number');  
            count ++;
            }
         }
}
console.log(validOrNot());


//
function validOrNot(userNumber) {
    let count = 0;
    let maxVal = 10;
    let correctNumber = confirm('You won');
    let aNumber = prompt('Fill in Number');
    let aNumbertoInteger = Number.parseInt(aNumber);
    let aNumberisNaN = Number.isNaN(aNumbertoInteger);
    while (count < maxVal) 
            if (aNumbertoInteger === randomNumber) {
                return correctNumber;
            } else if (aNumber < 0) {
                prompt('Too low, fill in new Number');
            } else if (aNumber > 10) {
                prompt('Too high, fill in new Number'); 
            } else if (aNumbertoInteger === aNumberisNaN) {
                prompt('Not valid, try again with a number');
            
            
         }
}
console.log(validOrNot());






//5/11/2022
function validOrNot() {
    let randomNumber = Math.floor(Math.random() * 11);
console.log(randomNumber);
    let userNumber = prompt('Fill in Number');
    let aNumbertoInteger = Number.parseInt(userNumber);
console.log(aNumbertoInteger);  
         while (randomNumber != aNumbertoInteger) {
             if (aNumbertoInteger > randomNumber) {
                return aNumbertoInteger;
            } else if (aNumbertoInteger < randomNumber) {
                return aNumbertoInteger;
            } else if (Number.isNaN(aNumbertoInteger)) {
                prompt('Not a valid number, try again');
                randomNumber++;
            } 
        }
        if (aNumbertoInteger === randomNumber) {
            let winner = confirm('You won in xxx guesses, want to try again?');
        }
}
console.log(validOrNot());


//ingediend op 6/11/2022
 function validOrNot() {
    let randomNumber = Math.floor(Math.random() * 11);
console.log(randomNumber);
     let userNumber = prompt ('Fill in Number');
    let aNumbertoInteger = Number.parseInt(userNumber);  
    let count = 0;
        while (randomNumber !== aNumbertoInteger) {    
            if (randomNumber > aNumbertoInteger) {
                prompt('Too low, fill in new Number');
             } else if (randomNumber < aNumbertoInteger ) {
                 prompt('Too high, fill in new Number');
            } else if (Number.isNaN(aNumbertoInteger)) {
                 prompt('Not a valid number, try again');  
            }
 }
     if (aNumbertoInteger === randomNumber) {
        let winner = confirm ('You won in xxx guesses, want to try again?');
         } else {
             return alert ('See you next time');
        }
 }
 console.log(validOrNot());

/**
 * Return a random number between [min] and [max].
 * Both may be included in the random number.
 * randomNumberBetween(3,8); -> 6
 * @param {number} min
 * @param {number} max
 * @return {number}
 */

function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);       //de extra +1 is om de waardes van vb tussen 0 en 20, ook deze effectief mee te hebben
 }


/**
 * When given an array with numbers, split both even and odd numbers in two separate arrays.
 * Return an array with your two array (see example below):
 * splitOddAndEven([5,4,2,3]); -> [[4,2],[5,3]]
 * @param {number[]} anArray
 * @return {array[]}
 */
 function splitOddAndEven(anArray) {   
     let newArrayEven = [];
     let newArrayOdd = [];
     let newArrayEvenOdd = [];

      for (let i = 0; i < anArray.length; i++) { 
         //console.log(anArray);
         if (anArray[i] % 2 === 0) {
            //console.log('even', anArray[i]);
            newArrayEven.push(anArray[i]);
            //console.log('even', newArrayEven);
         } 
         if (anArray[i] % 2 === 1) {
            //console.log('odd', anArray[i]);
            newArrayOdd.push(anArray[i]);
            //console.log('odd', newArrayOdd);
         }
      }
      newArrayEvenOdd.push(newArrayEven);                //opnieuw een array aanmaken
      newArrayEvenOdd.push(newArrayOdd);                 //opnieuw een array aanmaken
      return newArrayEvenOdd;
   }



/**
 * Randomize the order of the words in the given sentence.
 * randomizeSentence('To be or not to be, that is the question.'); -> 'be, that or the be to question. To is not'
 * @param {string} sentence
 * @return {string}
 */
function randomizeSentence(sentence) {
    let newString = sentence.split(' ');                                   //zin splitsen in woorden
    let newRandomString = '';                                              //nieuwe variabele om een string te maken voor output              

    while (newString.length > 0) {                                         //waarde moet groter zijn dan 0 om in de loop te blijven
      let randomIndex = Math.floor(Math.random() * newString.length);      //woorden random maken  
      let randomItem = newString.splice(randomIndex, 1);                   //woord eruit halen
      newRandomString = newRandomString + ' ' + randomItem[0];             //gevonden waarde toevoegen aan de return en opnieuw een string maken (starten vanaf index 0) 
    }
    return newRandomString;
}




/**
 * Remove the [letter] from the [string]
 * removeLetter('Dagelijkse kost', 's'); -> 'Dagelijke kot'
 * @param {string} string
 * @param {string} letter
 * @return {string}
 */
function removeLetter(string, letter) {
   let newWords = '';                                          //string maken              

      for (let i = 0; i < string.length; i++) {                //loopen over de input
         let foundIndex = letter.indexOf(string[i]);           //karakters uithalen en vergelijken met string en letter    
         //console.log(foundIndex);
         if (foundIndex === -1) {                              //als letter verschillend is van string: toevoegen aan output
            //console.log(foundIndex);  
            newWords = newWords + string[i];                   //opbouw nieuwe string met de karakters die overblijven uit string                             
         }
      }
   return newWords;
}



/**
 * Multiply all numbers in [anArray]
 * multiplyAll([5,5,4,3]); -> 300
 * @param {number[]} anArray
 * @return number
 */
function multiplyAll(anArray) {
   let multiply = 1;

      for (let i = 0; i < anArray.length; i++) {
         multiply = multiply * anArray[i];
      }

      return multiply;
}



/**
 * Calculate the average of all the numbers in the given [anArray]
 * average([4,2,7,6,1]); -> 4
 * @param anArray
 * @return {number}
 */
function average(anArray) {
   let numbers = 0;
   let averageNumber = 1;
   
   for (let i = 0; i < anArray.length; i++) {
      numbers = numbers + anArray[i];
      averageNumber = numbers / anArray.length;
      
   }
   return averageNumber;
}




/**
 * Interweave the two given array (see example below)
 * interweaveArrays([1,2,3], [9,8,7]); -> [1,9,2,8,3,7]
 * @param {array} arrayOne
 * @param {array} arrayTwo
 * @return {array}
 */
function interweaveArrays(arrayOne, arrayTwo) {
   let newArrayOneAndTwo = [];

      for (let i = 0; i < arrayOne.length; i++) {           //loopen over de eerste array
        if (arrayOne[i] <= arrayTwo[i]) {                   //verschillende arrays vergelijken met elkaar qua grootte
       newArrayOneAndTwo.push(arrayOne[i]);                 //opnieuw de gevonden data in de nieuwe array duwen
       newArrayOneAndTwo.push(arrayTwo[i]);                 // idem
        }  
      }
   return newArrayOneAndTwo;                                //hier loopt het mis aangezien ik de lengte van de 2e array niet bekom
}                                                           //een oplossing kan zijn om de 'overschot' van de array toe te voegen aan de nieuwe array



/**
 * Interweave the words in the two given sentences
 * interweaveSentences('Mijn naam is Ben', 'Ik ben fan van JavaScript');
 *   > 'Mijn Ik naam ben is fan Ben van JavaScript'
 * @param sentenceOne
 * @param sentenceTwo
 */
function interweaveSentences(sentenceOne, sentenceTwo) {
   let newStringOne = sentenceOne.split(' '); 
   let newStringTwo = sentenceTwo.split(' '); 
   //console.log(newStringOne);
   //console.log(newStringTwo);
   let newSentence = '';

      for (let i = 0; i < sentenceOne.length; i++) {
         //console.log(sentenceOne);
         if (sentenceOne[i] <= sentenceTwo[i] && sentenceOne.charAt(i - 1) !== ' ') {   //verschillende arrays vergelijken met elkaar qua grootte en eerste spatie er uit halen     
         let itemOne = newStringOne.splice(0, 1);                                       //splice gebruiken om er 1 karakter uit te halen startend vanaf index 0
         //console.log(randomItemOne);
         let itemTwo = newStringTwo.splice(0, 1);                                       //splice gebruiken om er 1 karakter uit te halen startend vanaf index 0
         newSentence = newSentence + ' ' + itemOne[0] + ' ' + itemTwo[0];  
         }
      }
   return newSentence;                                                                   //hier hetzelfde probleem als de oefening met de integers, van zodra 1 van de 2 arrays langer zijn, loopt het fout
}                                                                                        //een oplossing kan zijn om de 'overschot' van de array toe te voegen aan de nieuwe array




/**
 * The parameter [letterArray] contains only string with one letter. Sort the letters alphabetically.
 * 'Non letters, should be discarded.
 * sortLetters(['r','T','b','E', 'aaa', '?']); -> ['b','E','r','T']
 * @param {string[]} letterArray
 * @return {string[]}
 */
function sortLetters(letterArray) {
   let fullysorted = false;
   //console.log(letterArray);
 
   while (!fullysorted) {                             
     fullysorted = true;                              //wanneer de while loop waar blijft draaien  
                                
     for (let i = 1; i < letterArray.length; i++) {
       if (letterArray[i] < letterArray[i - 1]) {     //karakters van plaats wisselen
         //console.log(letterArray[i]);
         let firstNumber = letterArray[i];
         letterArray[i] = letterArray[i - 1];
         letterArray[i - 1] = firstNumber;            //karakter die is weggehaald steken we opnieuw in deze variabele
 
         fullysorted = false;
         //console.log(letterArray);
       }
       if (letterArray[i].charAt(0) > 2) {            //karakters groter dan 1 weghalen
         letterArray[i].pop();
       } 
     }
   }
   return letterArray;
}



/**
 * Generate the full name following these rules:
 * 1. [firstname] capitalized
 * 2. [secondName] when not null, only the first letter capitalized followed by a dot.
 * 3. [lastName] every word capitalized
 * fullName('Thomas', 'Edward', 'Lawrence'); -> 'Thomas E. Lawrence'
 * @param {string} firstName
 * @param {string} secondName
 * @param {string} lastName
 * @return {string}
 */
function fullName(firstName, secondName, lastName) {
   let firstNameCap = firstName.charAt(0).toUpperCase() + firstName.substring(1).toLowerCase();
   let secondNameCap = secondName.charAt(0).toUpperCase() + '.';
   let lastNameCap = '';
   let stringWord = '';

      for (let i = 0; i < secondName.length; i++) {            //proberen null te negeren
         if (secondName !== null) {
            secondNameCap;
         }
      }

      for (let i = 0; i < lastName.length; i++) {              //loopen over laatste stuk naam
          if (lastName.charAt(i) !== ' ') {                    //wanneer er geen spatie is moet hij naar het volgende karakter gaan
          stringWord = stringWord + lastName.charAt(i);
      } else {
         lastNameCap = lastNameCap + stringWord.charAt(0).toUpperCase() + stringWord.substring(1).toLowerCase();        //de lastname met elkaar verbinden startend vanaf index 0
          stringWord ='';
       }
    }
   return firstNameCap + ' ' + secondNameCap + ' ' + lastNameCap;
   }




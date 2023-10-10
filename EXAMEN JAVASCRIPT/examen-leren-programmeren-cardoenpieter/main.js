/**
 * Return a random number between [min] and [max].
 * Both may be included in the random number.
 * randomNumberBetween(3,8); -> 6
 * @param {number} min
 * @param {number} max
 * @return {number}
 */

 function randomNumberBetween(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min);
 }


/**
 * When given an array with numbers, split both even and odd numbers in two separate arrays.
 * Return an array with your two array (see example below):
 * splitOddAndEven([5,4,2,3]); -> [[4,2],[5,3]]
 * @param {number[]} anArray
 * @return {array[]}
 */
 function splitOddAndEven(anArray) {
   let newArrayEvenOdd = [];
   let newArrayEven = [];
   let newArrayOdd = [];

      for (let i = 0; i < anArray.length; i++) {
         if (anArray[i] % 2 === 0) {
            newArrayEven.push(anArray[i]);
         }
         if (anArray[i] % 2 === 1) {
            newArrayOdd.push(anArray[i]);
         }

      }
      newArrayEvenOdd.push(newArrayEven);
      newArrayEvenOdd.push(newArrayOdd);
      return newArrayEvenOdd;
   }



/**
 * Randomize the order of the words in the given sentence.
 * randomizeSentence('To be or not to be, that is the question.'); -> 'be, that or the be to question. To is not'
 * @param {string} sentence
 * @return {string}
 */
function randomizeSentence(sentence) {
   let newRandomSentence = '';
   let sentenceInPieces = sentence.split(' ');
   //console.log(sentenceInPieces);

      while (sentenceInPieces.length > 0) {
         let randomString = Math.floor(Math.random() * sentenceInPieces.length);
         let stringInPieces = sentenceInPieces.splice(randomString, 1);
         newRandomSentence = newRandomSentence + ' ' + stringInPieces[0];
      }

  return newRandomSentence;
}




/**
 * Remove the [letter] from the [string]
 * removeLetter('Dagelijkse kost', 's'); -> 'Dagelijke kot'
 * @param {string} string
 * @param {string} letter
 * @return {string}
 */
function removeLetter(string, letter) {
   let newString = '';

   for (let i = 0; i < string.length; i++) {
      let removeIndex = letter.indexOf(string[i]);
      if (removeIndex === -1) {
         
         newString = newString + string[i];

      }
   }
   return newString;

}



/**
 * Multiply all numbers in [anArray]
 * multiplyAll([5,5,4,3]); -> 300
 * @param {number[]} anArray
 * @return number
 */
function multiplyAll(anArray) {

}



/**
 * Calculate the average of all the numbers in the given [anArray]
 * average([4,2,7,6,1]); -> 4
 * @param anArray
 * @return {number}
 */
function average(anArray) {

}




/**
 * Interweave the two given array (see example below)
 * interweaveArrays([1,2,3], [9,8,7]); -> [1,9,2,8,3,7]
 * @param {array} arrayOne
 * @param {array} arrayTwo
 * @return {array}
 */
function interweaveArrays(arrayOne, arrayTwo) {
   let newInterweave = [];
   let longestLength;

      if (arrayOne.length > arrayTwo.length) {
         longestLength = arrayOne.length;
      } else {
         longestLength = arrayTwo.length;
      }

      for (let i = 0; i < longestLength; i++) {
         if (arrayOne[i] !== undefined) {
         newInterweave.push(arrayOne[i])
         }
         if (arrayTwo[i] !== undefined) {
         newInterweave.push(arrayTwo[i])
         }
      }

   return newInterweave;
}                                                         



/**
 * Interweave the words in the two given sentences
 * interweaveSentences('Mijn naam is Ben', 'Ik ben fan van JavaScript');
 *   > 'Mijn Ik naam ben is fan Ben van JavaScript'
 * @param sentenceOne
 * @param sentenceTwo
 */
function interweaveSentences(sentenceOne, sentenceTwo) {
   let splitSentenceOne = sentenceOne.split(' ');
   let splitSentenceTwo = sentenceTwo.split(' ');
   let longestLength;
   let newSentenceOneTwo = [];

      if (splitSentenceOne.length > splitSentenceTwo.length) {
         longestLength = splitSentenceOne.length;
      } else {
         longestLength = splitSentenceTwo.length;
      }

      for (let i = 0; i < longestLength; i++) {
         if (splitSentenceOne[i] !== undefined) {
         newSentenceOneTwo.push(splitSentenceOne[i])
         }
         if (splitSentenceTwo[i] !== undefined) {
         newSentenceOneTwo.push(splitSentenceTwo[i])
         }
      }
      return newSentenceOneTwo.join(' ');
}                                                                                      




/**
 * The parameter [letterArray] contains only string with one letter. Sort the letters alphabetically.
 * 'Non letters, should be discarded.
 * sortLetters(['r','T','b','E', 'aaa', '?']); -> ['b','E','r','T']
 * @param {string[]} letterArray
 * @return {string[]}
 */
function sortLetters(letterArray) {
   let alphabeth = 'abcdefghijklmnopqrstuvwxyz'    //uit deze lijst de correcte letters halen en dus niet andere karakters zoals 'eee' en '?'
   let cleanLetterArray = [];
   let fullySortedInAlphOrder = false;             //op false zetten ifv while loop en om loop te stoppen (bij true loopt hij verder)

      //deel 1
      //eerst for loop maken om de foute karakters er uit te halen
      for (let i = 0; i < letterArray.length; i++) {
         if (letterArray[i].length === 1 && alphabeth.indexOf(letterArray[i].toLowerCase()) !== -1) {
            cleanLetterArray.push(letterArray[i]);
         }
      }


      //deel 2
      //while loop om deze terug waar te maken en hem te laten loopen over de letters
      while (!fullySortedInAlphOrder) {
         fullySortedInAlphOrder = true;
      
      //opnieuw een for loop maar deze keer op de clean array om de letters te kunnen sorteren
         for (let i = 1; i < cleanLetterArray.length; i++) {      //let i = 1 omdat er al data in de variabele van alphabet zit
            if (alphabeth.indexOf(cleanLetterArray[i].toLowerCase()) < alphabeth.indexOf(cleanLetterArray[i - 1].toLowerCase())) {

               let firstLetter = cleanLetterArray[i];
               cleanLetterArray[i] = cleanLetterArray[i - 1];
               cleanLetterArray[i - 1] = firstLetter;

               fullySortedInAlphOrder = false;
            }
         }
      }
   return cleanLetterArray;
}

/**
 * Generate the full name following these rules:
 * 1. [firstname] capitalized
 * 2. [secondName] when not null, only the first letter capitalized followed by a dot.
 * 3. [lastName] every word capitalized
 * fullName('Thomas', 'Edward', 'Lawrence'); -> 'Thomas E. Lawrence'
 * @param {string} firstName
 * @param {string | null} secondName
 * @param {string} lastName
 * @return {string}
 */
function fullName(firstName, secondName, lastName) {
   let firstNameCap = firstName.charAt(0).toUpperCase() + firstName.substring(1).toLowerCase();
   let secondNameCap;
   let lastNameCap = lastName.charAt(0).toUpperCase();
  
   //DEEL SECONDNAMECAP null wegwerken en 1 karakter plus . maken
   if (secondName === null) {
      secondNameCap = ' ';
   } else {
      secondNameCap = ' ' + secondName.charAt(0).toUpperCase() + '. ';
   }
  
   //DEEL LASTNAMECAP loopen over het laatste deel om alle karakters die beginnen met een nieuwe eigennaam een hoofdletter te geven
   for (let i = 1; i < lastName.length; i++) {              
      if (lastName.charAt(i - 1) === ' ') {                    
          lastNameCap += lastName.charAt(i).toUpperCase();
      } else {
         lastNameCap += lastName.charAt(i).toLowerCase();
      }
   }
   
   //alles bij elkaar voegen
   return firstNameCap + secondNameCap + lastNameCap;
 }


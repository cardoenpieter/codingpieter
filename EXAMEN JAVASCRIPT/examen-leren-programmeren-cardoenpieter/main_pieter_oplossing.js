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
    let newString = sentence.split(' ');                                   //zin splitsen in woorden, vandaar de spatie tussen de leestekens, indien zonder spatie zal dit enkel de letters splitsen
    let newRandomString = '';                                              //nieuwe variabele om een string te maken voor output

    while (newString.length > 0) {                                         //waarde moet groter zijn dan 0 om in de loop te blijven
      let randomIndex = Math.floor(Math.random() * newString.length);      //woorden random maken
      let randomItem = newString.splice(randomIndex, 1);                   //woord eruit halen
      newRandomString = newRandomString + ' ' + randomItem[0];             //gevonden waarde toevoegen aan de return en opnieuw een string maken (starten vanaf index 0)
    }
    return newRandomString;
}

//definition SPLIT
//The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, 
//puts these substrings into an array, and returns the array.



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
   let longestLength;

   if (arrayOne.length > arrayTwo.length) {
      longestLength = arrayOne.length;
   } else {
      longestLength = arrayTwo.length;
   }


      for (let i = 0; i < longestLength; i++) {             
       if (arrayOne[i] !== undefined) {                  //undefind komt voor van zodra 1 van de 2 arrays langer zijn van elkaar en deze lengte met elkaar niet meer kan vergelijken
        newArrayOneAndTwo.push(arrayOne[i]);             //daarom vergelijken we in een if clause deze undefined en mag niet gelijk zijn aan de lengte van de array               
       }

       if (arrayTwo[i] !== undefined) {
         newArrayOneAndTwo.push(arrayTwo[i]);                 
       }

      }
   return newArrayOneAndTwo;  
   }                              


/**
 * Interweave the words in the two given sentences
 * interweaveSentences('Mijn naam is Ben', 'Ik ben fan van JavaScript');
 *   > 'Mijn Ik naam ben is fan Ben van JavaScript'
 * @param sentenceOne
 * @param sentenceTwo
 */
function interweaveSentences(sentenceOne, sentenceTwo) {
   let newStringOne = sentenceOne.split(' ');            //bij strings alleen maar split gebruiken. De spatie duidt een woord aan, geen spatie duidt een letter aan
   let newStringTwo = sentenceTwo.split(' ');
   let longestLength;

   if (newStringOne.length > newStringTwo.length) {
      longestLength = newStringOne.length;
   } else {
      longestLength = newStringTwo.length;
   }

   let newSentence = [];

      for (let i = 0; i < sentenceOne.length; i++) {
         
        if (newStringOne[i] !== undefined) {             //undefined idem als oefening hierboven
          newSentence.push(newStringOne[i]);        
        }                                     
                                           
        if (newStringTwo[i] !== undefined) {
          newSentence.push(newStringTwo[i]);              
        }

      }
   return newSentence.join(' ');                      //join kan hier gebruikt worden om alles terug aan elkaar te hangen aangezien we een nieuwe array gebruiken in het einderesultaat                                                          
}                                                                                    




/**
 * The parameter [letterArray] contains only string with one letter. Sort the letters alphabetically.
 * 'Non letters, should be discarded.
 * sortLetters(['r','T','b','E', 'aaa', '?']); -> ['b','E','r','T']
 * @param {string[]} letterArray
 * @return {string[]}
 */
function sortLetters(letterArray) {
   let alphabeth = 'abcdefghijklmnopqrstuvwxyz';
   let cleanLetterArray = [];
   let fullysorted = false;                  //op false zetten ifv while loop en om loop te stoppen (bij true loopt hij verder)
  
 //eerst for loop maken om de foute karakters er uit te halen
  for (let i = 0; i < letterArray.length; i++) {
    if (letterArray[i].length === 1 && alphabeth.indexOf(letterArray[i].toLowerCase()) !== -1) {
// xxx.length === 1 : kijken of er 1 karakter in zit en geen meerdere karakters of tekens, indexOf() !== -1: 'niet gelijk aan' wanneer deze niet gevonden wordt
//de gevonden letters in een nieuwe array steken
      cleanLetterArray.push(letterArray[i]);
    }
  }

   while (!fullysorted) {
     fullysorted = true;                              //wanneer de while loop waar blijft draaien

     for (let i = 1; i < cleanLetterArray.length; i++) {    //i is hier 1 omdat er al data zit in de alphabet variabele
       if (alphabeth.indexOf(cleanLetterArray[i].toLowerCase()) < alphabeth.indexOf(cleanLetterArray[i - 1].toLowerCase())) {   
         //de karaktes op alfabetische volgorde zetten
        
         //in de opgekuiste array de letters op hun alfabetische plaats zetten
         let firstLetter = cleanLetterArray[i];
         cleanLetterArray[i] = cleanLetterArray[i - 1];
         cleanLetterArray[i - 1] = firstLetter;            //karakter die is weggehaald steken we opnieuw in deze variabele

         fullysorted = false;                            //while loop laten stoppen
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
   for (let i = 1; i < lastName.length; i++) {            //let i = 1: er zit in de lastnamecap al data in      
      if (lastName.charAt(i - 1) === ' ') {                   
          lastNameCap += lastName.charAt(i).toUpperCase();     //+=  lastnamecap = lastnamecap + ....
      } else {
         lastNameCap += lastName.charAt(i).toLowerCase();
      }
   }
   //uitleg hierboven vanaf de if clause
   //karakter - 1: wanneer er een spatie is (dus leeg veld) mag het desbetreffende karakter een hoofdletter krijgen, 
   //indien het vorige karakter geen spatie is mag alles in kleine letter

   //alles bij elkaar voegen
   return firstNameCap + secondNameCap + lastNameCap;
 }




/**
 * Given an array, return the same array but make sure no value occurs more than once
 * @param {array} anArray
 * @return {array}
 */
 function removeDoubles(anArray) { //anarray bevat al de data die voorgeschreven staat, dus [1, 2, ...]
    let undoDoubles = [];           //een nieuwe lege array opbouwen om data er in te kunnen pushen één per één
    for (let i = 0; i < anArray.length; i++) {
        if (!undoDoubles.includes(anArray[i])) {    //als dit false is (zie uitroepteken, omgekeerde van true), dan moet hij kijken wat er in zit om de data te kunnen returen wat er NIET dubbel in zit
         //console.log(anArray[i]);
         undoDoubles.push(anArray[i]);          //de nieuwe array pushen op de data die er al in zit
         
        }
        //console.log(undoDoubles);
        
      }
      return undoDoubles;       //de data returnen die er NIET dubbel in zit
  }
  
  /**
   * Given an array of numbers, return the same array containing only even numbers
   * @param {number[]} anArray
   * @return {number[]}
   */
  function onlyEven(anArray) {
    let evenOrOdd = [];
    for (let i = 0; i < anArray.length; i++) {
      if (anArray[i] % 2 === 0) {               //wanneer hier === 1 gaat hij de oneven nummers eruit halen
        //console.log(anArray[i]);
        evenOrOdd.push(anArray[i]);
        
      }
      //console.log(evenOrOdd);
    }
    return evenOrOdd;
  
  }
  //for (let i = anArray.length -1; i >= 0; i--) TIP: achteraan beginnen en verder naar voor werken
  
  /**
   * Given an array of number, return the difference between the lowest and the highest numbers
   * @param {number[]} anArray
   * @return {number}
   */
  function highLowDifference(anArray) {
      let highestNumber = anArray[0];           //hier opnieuw een nieuwe array aanmaken
      let lowestNumber = anArray[0];    //laagste nummer: we beginnen bij nummer 0
        for (let i = 0; i < anArray.length; i++) {
          if (highestNumber < anArray[i]) { //logisch gevolg: hoogste nummer moet kleiner zijn dan de rest van de nummers
          highestNumber = anArray[i];
          }
          if (lowestNumber > anArray[i]) {  //logisch gevolg: nummer 0 is groter dan al de rest
            lowestNumber = anArray[i];
          }
        }
      return highestNumber - lowestNumber;
    }
  
    //startwaarde = 0:bij negatieve getallen kan dit al niet 0 zijn 
    //startwaarde anarray[0], dit start bij de waarde 0
    // als we let i = 1 gebruiken, rekenen we het eerste getal al niet meer mee omdat we al data in de variabele zitten hebben
  
  /**
   * Count the number of times [aNumber] is in the given array [anArray]
   * @param {number[]} anArray
   * @param {number} aNumber
   * @returns {number}
   */
   function countNumber(anArray, aNumber) {
    let count = 0;
    
    for (let i = 0; i < anArray.length; i++) {
      if (anArray[i] === aNumber) {
        count++;
      }
    }
    
    return count;
  }
  
  //    let anArray = [];
  //    let aNumber;
  //   for (let i = 0; i < anArray.length; i++) {
  //     if (anArray[i] === aNumber) {
  //         count++;
  //     }
  //      }
  //   return anArray;
  // }
  
  /**
   * Sort an array from low to high, write the logic yourself
   * @param {number[]} anArray
   * @return {number[]}
   */
  function sort(anArray) {
    let fullySorted = false;  //nog niet volledig gesorteerd
  
    console.log(anArray);
  
    while (!fullySorted) {                            //while loop onwaar maken
        fullySorted = true;                           //while loop terug waar maken, ik ga er vanuit gaan dat het gesorteerd is, de true laat de while loop stoppen
  
        for (let i = 1; i < anArray.length; i++) {    //waarom 1: als we op plaats 0 - 1 zouden zetten, zou hij al in het negatieve gaan nakijken wat hier niet het geval is
            if (anArray[i] < anArray[i - 1]) {       
                let firstNumber = anArray[i];         // in de if is het nog niet volledig gestorteerd
                anArray[i] = anArray[i - 1];
                anArray[i - 1] = firstNumber;          //volledig for loop laten doorlopen zonder dat we 2 getallen moet verplaatsen, dan pas zitten we juist
  
                fullySorted = false;                  //false laten maken om de loop te stoppen
                
            }
            console.log(anArray);
        }
    }
  
    return anArray;
  }
  
  /**
   * Reverse the string
   * Try to keep the same casing (if first letter is
   * uppercase, make sure it is still uppercase in the reversed word
   * @param {string} str
   * @return {string}
   */
  function reverseString(str) {
    let strArray = str.split('');
    let reverseArray = [];
    //console.log(strArray);
    
    for (let i = 0; i < strArray.length; i++) {
      reverseArray.unshift(strArray[i].toLowerCase());
    }
    
    for (let i = 0; i < strArray.length; i++) {
      if (strArray[i] === strArray[i].toUpperCase()) {
        reverseArray[i] = reverseArray[i].toUpperCase();
      }
    }
    
    return reverseArray.join('');
  }
  
  /**
   * Given two arrays of values, return an array with only the values that occur in both arrays
   * @param {array} anArray
   * @param {array} otherArray
   * @return {array}
   */
  function findSimilars(anArray, otherArray) {}
  
  /**
   * Given an array return an array with the same values but in a random order
   * @param anArray
   */
  function scramble(anArray) {}
  
  /**
   * Given two arrays, check if the second array (subArray) is a sublist of the first (bigArray)
   * @param {array} bigArray
   * @param {array} subArray
   * @return {boolean}
   */
  function isSublist(bigArray, subArray) {}
  
  
  
  
  
  //bij een splice maken we opnieuw een array van 1 getal aan
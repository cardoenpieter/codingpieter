/**
 * Given an array, return the same array but make sure no value occurs more than once
 * @param {array} anArray
 * @return {array}
 */
 function removeDoubles(anArray) { 
  let noDoubles = [];
    for (let i = 0; i < anArray.length; i++) {
      //console.log(anArray);
      if (!noDoubles.includes(anArray[i])) {
        //console.log(anArray[i]);
        
        noDoubles.push(anArray[i]);
      }
    }
    return noDoubles;

}

/**
 * Given an array of numbers, return the same array containing only even numbers
 * @param {number[]} anArray
 * @return {number[]}
 */
function onlyEven(anArray) {
  let evenOrOdd = [];
    for (let i = 0; i < anArray.length; i++) {
      if (anArray[i] % 2 === 0) {
        //console.log(anArray[i]);
        evenOrOdd.push(anArray[i])
      }
    }
    return evenOrOdd;
}


/**
 * Given an array of number, return the difference between the lowest and the highest numbers
 * @param {number[]} anArray
 * @return {number}
 */
function highLowDifference(anArray) {
  let highestNumber = anArray[0];
  let lowestNumber = anArray[0];
    for (let i = 1; i < anArray.length; i++) {
      if (highestNumber < anArray[i]) {
        //console.log(anArray[i]);
        highestNumber = anArray[i];
      }
      if (lowestNumber > anArray[i]) {
        //console.log(anArray[i]);
        lowestNumber = anArray[i];
      }
    }
   return highestNumber - lowestNumber; 
  }

/**
 * Count the number of times [aNumber] is in the given array [anArray]
 * @param {number[]} anArray
 * @param {number} aNumber
 * @returns {number}
 */
 function countNumber(anArray, aNumber) {
  let countNumber = 0;
    for (let i = 0; i < anArray.length; i++) {
      if (anArray[i] === aNumber) {
        countNumber ++;
      } 
    }
    return countNumber;
}

//    
/**
 * Sort an array from low to high, write the logic yourself
 * @param {number[]} anArray
 * @return {number[]}
 */
 function sort(anArray) {
  let fullysorted = false;
  //console.log(anArray);

  while (!fullysorted) {
    fullysorted = true;
    for (let i = 1; i < anArray.length; i++) {
      if (anArray[i] < anArray[i - 1]) {
        //console.log(anArray[i]);
        let firstNumber = anArray[i];
        anArray[i] = anArray[i - 1];
        anArray[i - 1] = firstNumber;

        fullysorted = false;
        //console.log(anArray);
      }
      
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
  
}

/**
 * Given two arrays of values, return an array with only the values that occur in both arrays
 * @param {array} anArray
 * @param {array} otherArray
 * @return {array}
 */
function findSimilars(anArray, otherArray) {
  let sameNumber = [];

  for (let i = 0; i < anArray.length; i++) {
    let foundIndex = otherArray.indexOf(anArray[i]);
    //console.log(foundIndex);

    if (foundIndex !== - 1) {
      sameNumber.push(anArray[i]);
      otherArray.splice(foundIndex, 1)
    }
    //console.log(anArray[i]);
  }



    return sameNumber;

}

/**
 * Given an array return an array with the same values but in a random order
 * @param anArray
 */
function scramble(anArray) {
  let randomArray = [];
  
  while(anArray.length > 0) {
    let randomIndex = Math.floor(Math.random() * anArray.length);
    
    let randomItem = anArray.splice(randomIndex, 1);      //1 item weghalen uit de array en bij een splice maken we opnieuw een array van 1 getal aan
    randomArray.push(randomItem[0]);
  }
  
  return randomArray;
}

/**
 * Given two arrays, check if the second array (subArray) is a sublist of the first (bigArray)
 * @param {array} bigArray
 * @param {array} subArray
 * @return {boolean}
 */ 
function isSublist(bigArray, subArray) {
  let startIndex = bigArray.indexOf(subArray[0]);   //zoeken naar eerste getal, zo ja waar, op welke positie?

  if (startIndex === -1) {
    return false;
  }

  let isSublist = true;

  for (let i = 1; i < subArray.length; i++) {                           //loopen bij 1 omdat we da 0 al zoeken bij startindex, maakt het iets efficienter
    console.log('bigarray', bigArray[i + startIndex], i + startIndex);
    console.log('subarray', subArray[i], i);
    if (bigArray[i + startIndex] !== subArray[i])
      isSublist = false;
  }
  return isSublist;
}





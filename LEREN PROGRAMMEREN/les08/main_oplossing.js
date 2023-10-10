/**
 * Given an array, return the same array but make sure no value occurs more than once
 * @param {array} anArray
 * @return {array}
 */
 function removeDoubles(anArray) {
    let noDoubles = [];

    for (let i = 0; i < anArray.length; i++) {
        if (!noDoubles.includes(anArray[i])) {
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
    let onlyEvenArray = [];

    for (let i = 0; i < anArray.length; i++) {
        if (anArray[i] % 2 === 0) {
            onlyEvenArray.push(anArray[i]);
        }
    }
    
    return onlyEvenArray;
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
        if (anArray[i] > highestNumber) {
            highestNumber = anArray[i];
        }

        if (anArray[i] < lowestNumber) {
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
    let count = 0;

    for (let i = 0; i < anArray.length; i++) {
        if (anArray[i] === aNumber) {
            count++;
        }
    }

    return count;
}

/**
 * Sort an array from low to high, write the logic yourself
 * @param {number[]} anArray
 * @return {number[]}
 */
function sort(anArray) {
    let fullySorted = false;
    
    while (!fullySorted) {
        fullySorted = true;

        for (let i = 1; i < anArray.length; i++) {
            if (anArray[i] < anArray[i - 1]) {
                let firstNumber = anArray[i];
                let secondNumber = anArray[i - 1];
                anArray[i] = secondNumber;
                anArray[i - 1] = firstNumber;

                fullySorted = false;
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
    let strArray = str.split('');
    let reverseArray = [];

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
function findSimilars(anArray, otherArray) {
  let similarArray = [];
  
  for (let i = 0; i < anArray.length; i++) {
    let foundIndex = otherArray.indexOf(anArray[i]);
    
    if (foundIndex !== -1) {
      similarArray.push(anArray[i]);
      otherArray.splice(foundIndex, 1);
    }
  }
  
  return similarArray;
}

/**
 * Given an array return an array with the same values but in a random order
 * @param anArray
 */
function scramble(anArray) {
  let randomArray = [];
  
  while(anArray.length > 0) {
    let randomIndex = Math.floor(Math.random() * anArray.length);
    
    let randomItem = anArray.splice(randomIndex, 1);
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
  let startIndex = bigArray.indexOf(subArray[0]);
  
  if (startIndex === -1) {
    return false;
  }
  
  for (let i = 1; i < subArray.length; i++) {
    if (bigArray[i + startIndex] !== subArray[i]) {
      return false;
    }
  }
  
  return true;
}

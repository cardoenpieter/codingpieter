//arrays
let anArray = ['Iets', 1, true];
let anotherArray = new Array('Anders', 44, true);

// Get value from array
console.log(anArray[2]); //-> true

// Overwrite value from array
console.log(anArray);
anArray[1] = 2;
console.log(anArray);

// length
console.log(anArray.length);

anArray[10] = 'test';
console.log(anArray.length); // opgelet: hier gaat hij 7 lege items plaatsen en komt de lengte op een totaal van 11, dit wordt normaal niet gecodeerd, het zou de array teniet doen


// pop, push : passen de oorspronkelijke array aan
anArray.pop();          //pop laatste weghalen
console.log(anArray);

anArray.push('New val');        //push toevoegen
console.log(anArray);

// shift, unshift : passen de oorspronkelijke array aan
anArray.shift();
console.log(anArray);       //haalt het eerste item weg

anArray.unshift('New first val');
console.log(anArray);       // voegt in het begin iets toe


// slice: past de oorspronkelijke array niet aan
console.log(anArray.slice(1, 4));

//splice: past de oorspronkelijke array aan
anArray.splice(3, 2);
console.log('splice', anArray); //hier haalt hij uit het midden items uit, en past deze dan ook aan

anArray.splice(1, 1, 5, 5, 5);
console.log('splice', anArray); //op index 1, gaan we 1 item verwijderen en voegen we 5,5,5 toe


// By reference
let aNumber = 2;
let otherNumber = aNumber;

aNumber++;
console.log('aNumber', aNumber); //-> 3
console.log('otherNumber', otherNumber); //-> 2   dit is 2 aangezien aNumber en otherNumber niets met elkaar te maken hebben



let arrayOne = [1, 2, 3];
let arrayTwo = arrayOne;

arrayOne.push(4);
console.log('arrayOne', arrayOne); 
console.log('arrayTwo', arrayTwo);
//deze twee logs zijn toch identiek aangezien een array dit doorgeeft by reference, dit is net het specifieke aan een array


// loop
for (let i = 0; i < arrayOne.length; i++) {
    console.log(arrayOne[i]);
}

for (let i in arrayOne) {
    console.log(arrayOne[i]);
}
// for in loop, deze logt ook dezelfde arrays, is typisch aan deze 'in loop'


//join methode
let stringArray = ['Hello', 'world']; //gaat data aan elkaar hangen
console.log(stringArray.join(' '));

// split()
let aString = 'Hello everybody, welcome!'; //gaat data van elkaar scheiden tot de digits toe
console.log(aString.split(''));


// concat()

let arrA = [3, 5, 7, 9, 7];
let arrB = [2, 4, 6, 8];

let longArr = arrA.concat(arrB);

console.log(longArr);
console.log(arrA);
console.log(arrB);

// .indexOf() / .lastIndexOf() / .includes()
let firstSeven = longArr.indexOf(7);
let secondSeven = longArr.indexOf(7, firstSeven + 1);
console.log(firstSeven);
console.log(secondSeven);
console.log(longArr.lastIndexOf(7));
console.log(longArr.indexOf(11));
console.log(longArr.includes(11));

// .reverse()

console.log(longArr.reverse());
console.log(longArr);

// typeof / isArray

console.log(typeof 78);
console.log(typeof 'string');
console.log(typeof [1, 2, 3]);
console.log(Array.isArray([1, 2, 3])); //nieuwe tool om aan te duiden of dit een array is, zal in dit geval ook true callen

// compare arrays

let firstArray = [1, 2, 3];  //deze aray wordt opgeslagen 
let secondArray = [1, 2, 3]; // deze aray wordt ook opgeslagen, maar op een andere plaats
let thirdArray = firstArray;

console.log(firstArray, secondArray, thirdArray);

console.log(firstArray === thirdArray);





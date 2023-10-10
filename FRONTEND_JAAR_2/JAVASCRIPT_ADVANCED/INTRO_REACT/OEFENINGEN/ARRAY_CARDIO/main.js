// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

// 1. Filter the list of inventors for those who were born in the 1500's
const yearBorn = inventors.filter((inventor) => {
  return inventor.year >= 1500 && inventor.year <= 1599;
});
console.log("oef1", yearBorn);

// 2. Give us an array of the inventors first and last names
const firstLastName = inventors.map((inventor) => {
  return `${inventor.first}, ${inventor.last}`;
});
console.log("oef2", firstLastName);

// 3. Sort the inventors by birthdate, oldest to youngest
const birthOldestFirst = inventors.sort((a, b) => {
  if (a.year < b.year) {
    return -1;
  }
  if (a.year > b.year) {
    return 1;
  }
  if (a.year === b.year) {
    return 0;
  }
});
console.log("oef3", birthOldestFirst);

// 4. How many years did all the inventors live all together?
//for each: enkel de nummers zijn belangrijk
//reduce verwacht 2 waardes, startwaarde is hier 0, van array een number maken
//reduce(accumulator, current value)
//eerste te doen: return acc
//reduce: van array een number of string maken
let sumOfAge = 0; //variabale aanmaken, let: dit is een getal dat veranderd en aanpasbaar is, dus zeker GEEN const aanmaken
const ageTotal = inventors.forEach((inventor) => {
  const age = inventor.passed - inventor.year;
  sumOfAge += age;
});
console.log("oef4", sumOfAge);

// -----------------Option 2----------------

const sumOfAgeReduce = inventors.reduce((acc, inventor) => {
  const age = inventor.passed - inventor.year;

  acc += age;

  return acc;
}, 0);

console.log("Option 2 oef4", sumOfAgeReduce);

// 5. Sort the inventors by years lived
//alle array methods die opnieuw array returnen die zijn chainable, dus die kunnen achter elkaar gebruikt worden op dezelfde array
const ageOldToYoung = inventors
  .sort((a, b) => {
    const ageA = a.passed - a.year;
    const ageB = b.passed - b.year;
    if (ageA > ageB) {
      return -1;
    }
    if (ageA < ageB) {
      return 1;
    }
    if (ageA === ageB) {
      return 0;
    }
  })
  .map((inventor) => {
    //deze .map zorgt ervoor dat er in de array nog een extra waarde wordt toegevoegd: age; om aan te duiden wat juist hun leeftijd is
    inventor.age = inventor.passed - inventor.year;
    return inventor;
  });
console.log("oef5", ageOldToYoung);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// 7.Sort the people alphabetically by last name
const lastNameAlphabet = inventors.sort((a, b) => {
  const firstLetter = a.last;
  const secondLetter = b.last;
  if (firstLetter < secondLetter) {
    return -1;
  }
  if (firstLetter < secondLetter) {
    return 1;
  }
  return 0;
});
console.log("oef7", lastNameAlphabet);

//oef reduce
const students = ["Lukas", "Joren", "Julie", "Diva", "Pieter"];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const studentsWithAge = students.reduce((acc, cv) => {
  const age = getRandomInt(20, 50);
  acc[cv] = age;
  return acc;
}, {});

console.log("oef reduce", studentsWithAge);

/* dit stukje is altijd standard bij een reduce
.reduce((acc, cv) => {
  return acc;
}, {});
*/

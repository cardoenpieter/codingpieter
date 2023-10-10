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
const born1500 = inventors.filter((inventor) => {
  if (inventor.year >= 1500 && inventor.year <= 1599) {
    return true;
  } else {
    return false;
  }
  //return inventor.year >= 1500 && inventor.year <= 1599;
});
console.log("oef1", born1500);

// 2. Give us an array of the inventors first and last names
const firstAndLast = inventors.map((inventor) => {
  return `${inventor.first}, ${inventor.last}`;
});
console.log("oef2", firstAndLast);

// 3. Sort the inventors by birthdate, oldest to youngest
const birthOldToYoung = inventors.sort((a, b) => {
  if (a.year < b.year) {
    return -1;
  }
  if (a.year > b.year) {
    return 1;
  }
  return 0;
});
console.log("oef3", birthOldToYoung);

// 4. How many years did all the inventors live all together?
const sumOfAge = inventors.reduce((acc, inventor) => {
  let totalAge = inventor.passed - inventor.year;
  acc += totalAge;
  return acc;
}, 0);
console.log("oef4", sumOfAge);

// 5. Sort the inventors by years lived
const yearsLived = inventors
  .map((inventor) => {
    inventor.age = inventor.passed - inventor.year;
    return inventor;
  })
  .sort((a, b) => {
    if (a.age < b.age) {
      return -1;
    }
    if (a.age > b.age) {
      return 1;
    }
    return 0;
  });
console.log("oef5", yearsLived);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const group = document.querySelectorAll("div.mw-category-group > li");

// 7. Sort the people alphabetically by last name
const lastNameAlphabet = inventors.sort((a, b) => {
  if (a.last < b.last) {
    return -1;
  }
  if (a.last > b.last) {
    return 1;
  }
  return 0;
});
console.log("oef7", lastNameAlphabet);

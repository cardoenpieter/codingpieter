//oef1
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

const itemsCount = data.reduce((acc, cv) => {
  if (!acc[cv]) {
    acc[cv] = 0; //bij de eerste iteratie komt hij niets tegen
  }
  acc[cv] += 1; //van zodra hij er 1 gevonden heeft, telt hij +1 bij
  return acc;
}, {});
console.log(itemsCount);

//oef2
const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const currentYear = 2023;
const age = people
  .map((person) => {
    person.currentAge = currentYear - person.year;
    return person;
  })
  .some((person) => {
    return person.currentAge >= 19;
  });
//console.log("some", age);

// Array.prototype.every() // is everyone 19 or older?
const age2 = people
  .map((person) => {
    person.currentAge = currentYear - person.year;
    return person;
  })
  .every((person) => {
    return person.currentAge === 19;
  });
//console.log("every", age2);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const commentID = 823423;
const commentFind = comments.find((comment) => {
  return comment.id === commentID; //implicit return is enkel geldig als alles op 1 lijn kan staan
});
//console.log(commentFind);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const commentIndex = comments.findIndex((comment) => {
  return comment.id === commentID;
});
console.log(commentIndex); //deze gaat de index weergeven

//delete comment, dit wil zeggen dat de hele lijn wordt gedeleted

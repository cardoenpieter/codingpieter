/*
const res = await fetch("https://words.dev-apis.com/word-of-the-day");
const { word: wordRes } = await res.json();

const res = await fetch("https://words.dev-apis.com/validate-word", {
  method: "POST",
  body: JSON.stringify({ word: currentGuess }),
});
const { validWord } = await res.json();
*/

const ANSWER_LENGTH = 5;
const ROUNDS = 6;
const letters = document.querySelectorAll(".scoreboard-letter");
const loadingDiv = document.querySelector(".info-bar");

function getWordOfTheDay() {
  fetch(`https://words.dev-apis.com/word-of-the-day`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then(console.log);
}

function lettersInScoreboard(event) {
  console.log(event.value);
  //const selectedLetter = target.innerText;
}

function init() {
  getWordOfTheDay();
}

letters.forEach((letter) => {
  letter.addEventListener("keydown", lettersInScoreboard);
  console.log(letter);
});

init();

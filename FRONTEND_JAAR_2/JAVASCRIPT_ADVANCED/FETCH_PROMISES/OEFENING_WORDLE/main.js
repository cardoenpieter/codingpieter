/*
const res = await fetch("https://words.dev-apis.com/word-of-the-day");
const { word: wordRes } = await res.json();

const res = await fetch("https://words.dev-apis.com/validate-word", {
  method: "POST",
  body: JSON.stringify({ word: currentGuess }),
});
const { validWord } = await res.json();
*/
function getWordOfTheDay(event) {
  console.log(event);
  fetch(`https://words.dev-apis.com/word-of-the-day`, {
    method: "GET",
  }).then((res) => res.json(console.log(res)));
}
getWordOfTheDay();

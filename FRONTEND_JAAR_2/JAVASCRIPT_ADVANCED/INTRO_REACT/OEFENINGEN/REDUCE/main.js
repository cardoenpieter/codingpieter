const videos = document.querySelector(".videos");
const listVideos = videos.querySelectorAll("li");
let arrListVideos = Array.from(listVideos);
console.log(arrListVideos);

//controle tijd
const getData = arrListVideos.map((cv) => {
  return cv.dataset.time;
});
console.log(getData);

//resultaat
const getAllTime = arrListVideos
  .map((cv) => {
    return cv.dataset.time; //.dataset geeft object met alle HTML-attributen(data-time)
  })

  .reduce((acc, time) => {
    let ItemMinSec = time.split(":");
    //console.log("split", minSec);
    let min = ItemMinSec[0];
    let sec = ItemMinSec[1];

    //console.log("min", min);
    //console.log("sec", sec);

    let newTimeSec = Number.parseInt(sec);
    let newTimeMin = Number.parseInt(min);
    //console.log("seconden", newTimeSec);
    //console.log("minuten", newTimeMin);
    let totalTime = newTimeMin + newTimeSec / 60;
    let totalTimeInHoures = totalTime / 60;
    acc += totalTimeInHoures;
    return acc;
  }, 0);
console.log(getAllTime);

function decimalToTime() {
  let date = new Date(0, 0);
  date.setSeconds(+getAllTime * 60 * 60);
  document.write(date.toTimeString().slice(0, 8));
}
console.log(decimalToTime());
/*
var decimalTimeString = "1.6578";
var n = new Date(0, 0);
n.setSeconds(+decimalTimeString * 60 * 60);
console.log(document.write(n.toTimeString().slice(0, 8)));
*/

//Destructuring
//in een object
const car = {
  type: "fiat",
  model: "500",
  color: "white",
};

const { type, model } = car;
//linkse kant Destructuring; type en model zijn de keys van car
//variabele maken vanuit object
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

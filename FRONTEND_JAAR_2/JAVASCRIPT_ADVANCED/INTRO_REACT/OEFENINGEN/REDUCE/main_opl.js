//oplossing Brecht
const videoNodesHtml = document.querySelectorAll("li");

const videosArray = Array.from(videoNodesHtml);

const timeInSeconds = videosArray
  .map((video) => {
    const time = video.dataset.time;

    const [minutes, seconds] = time.split(":");

    return parseInt(minutes) * 60 + parseInt(seconds);
  })
  .reduce((acc, cv) => {
    return (acc += cv);
  }, 0);

function secondsToTime(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);

  const minutes = Math.floor((totalSeconds - hours * 3600) / 60);

  const seconds = totalSeconds % 60;

  return `${hours}:${minutes}:${seconds}`;
}

console.log(secondsToTime(timeInSeconds));

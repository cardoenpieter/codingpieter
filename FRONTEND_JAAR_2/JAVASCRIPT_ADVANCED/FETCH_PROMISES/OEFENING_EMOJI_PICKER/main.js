const emojis = document.getElementById("emojis");

let offset = 0;

function getEmoji() {
  fetch(
    `https://api.api-ninjas.com/v1/emoji?group=smileys_emotion&offset=${offset}`,
    {
      method: "GET",
      headers: {
        "X-Api-Key": "uVvQI6LxydHLMzusvtDlzg==FkcnPxuRBtO7TrBZ",
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => res.json(console.log(res)))
    .then(showEmojis);
}
getEmoji();

function showEmojis(event) {
  console.log("event", event);
  const arrEmoji = event.map((emoji) => {
    return emoji.character;
  });
  emojis.innerHTML = arrEmoji;
}

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");

previousButton.addEventListener("click", previousPage);
nextButton.addEventListener("click", nextPage);

function nextPage() {
  console.log("next");
  offset += 30;
  getEmoji();
}

function previousPage() {
  console.log("previous");
  if (offset === 0) return;
  offset -= 30;
  if (offset <= 0) offset = 0;
  getEmoji();
}

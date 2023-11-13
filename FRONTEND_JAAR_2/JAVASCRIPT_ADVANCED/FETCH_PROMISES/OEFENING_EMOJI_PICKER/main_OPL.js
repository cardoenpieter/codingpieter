let headersList = {
  Accept: "*/*",
  "X-Api-Key": "uVvQI6LxydHLMzusvtDlzg==FkcnPxuRBtO7TrBZ",
  "Content-Type": "application/json",
};
let offset = 0;
let end = false;
const BASE_URL = "https://api.api-ninjas.com/v1/emoji?group=smileys_emotion";

function getEmojis(offset = 0) {
  return fetch(`${BASE_URL}&offset=${offset}`, {
    method: "GET",
    headers: headersList,
  }).then((res) => res.json());
}

function emojiCard(emoji) {
  return `<button class="btn btn-lg btn-outline-light">${emoji.character}</button>`;
}

window.addEventListener("DOMContentLoaded", () => {
  const previousButton = document.querySelector("#previous");
  const nextButton = document.querySelector("#next");
  const emojis = document.querySelector("#emojis");

  getEmojis().then((res) => {
    emojis.innerHTML = res.map(emojiCard).join("");
  });

  previousButton.addEventListener("click", () => {
    end = false;
    if (offset === 0) return;
    offset -= 30;
    if (offset <= 0) offset = 0;
    getEmojis(offset).then((res) => {
      emojis.innerHTML = res.map(emojiCard).join("");
    });
  });

  nextButton.addEventListener("click", () => {
    if (end) return;
    offset += 30;
    getEmojis(offset).then((res) => {
      if (res.length < 30) end = true;
      emojis.innerHTML = res.map(emojiCard).join("");
    });
  });
});

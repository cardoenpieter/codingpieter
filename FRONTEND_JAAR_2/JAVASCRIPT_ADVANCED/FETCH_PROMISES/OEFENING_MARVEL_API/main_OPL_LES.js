let page = 1;
const itemsPerPage = 20;
function init() {
  const previousButton = document.querySelector(".previous-button");
  const nextButton = document.querySelector(".next-button");
  getSeries();
  previousButton.addEventListener("click", previousPage);
  nextButton.addEventListener("click", nextPage);
}
init();
function nextPage() {
  page++;
  const offset = (page - 1) * itemsPerPage;
  getSeries(offset);
}
function previousPage() {
  //Implement yourself
  return;
}
function displaySeries(series) {
  const ul = document.querySelector("ul");
  ul.innerHTML = "";
  series.forEach((serie) => {
    const li = document.createElement("li");
    li.innerHTML = serie.title;
    ul.appendChild(li);
    li.addEventListener("click", (e) => onClickOfSerie(serie.id));
  });
}
function getSeries(offset = 0) {
  fetch(
    `https://gateway.marvel.com/v1/public/series?apikey=2bb1ad50bf3e617972623771fc615119&limit=${itemsPerPage}&offset=${offset}`
  )
    .then((res) => res.json())
    .then((res) => {
      const series = res.data.results;
      displaySeries(series);
    });
}
function onClickOfSerie(id) {
  const charactersList = getEmptyHtmlElement();
  fetch(
    `https://gateway.marvel.com/v1/public/series/${id}/characters?apikey=2bb1ad50bf3e617972623771fc615119`
  )
    .then((res) => res.json())
    .then((res) => {
      const characters = res.data.results;
      characters.forEach((character) => {
        const li = document.createElement("li");
        li.innerHTML = character.name;
        charactersList.appendChild(li);
      });
    });
}
function getEmptyHtmlElement() {
  const body = document.querySelector("body");
  let element = document.querySelector(".characters-list");
  if (element) {
    element.innerHTML = "";
  } else {
    element = document.createElement("ul");
    element.classList.add("characters-list");
    body.appendChild(element);
  }
  return element;
}

/*
Your public key
dec9cdce90864edae689b29660018520
Your private key
8c4289691ab6031cb2da260892a611a11c932e35

const charactersElement = document.getElementById("characters");
const seriesElement = document.getElementById("series");
const chosenCharacter = document.getElementById("chosen-character");
function getAllCharacters() {
  fetch(
    "https://gateway.marvel.com:443/v1/public/characters?apikey=dec9cdce90864edae689b29660018520",
    {
      method: "GET",
      params: {
        apikey: "8c4289691ab6031cb2da260892a611a11c932e35",
      },
    }
  )
    .then((res) => res.json())
    .then((res) => {
      console.log("res", res);
      return res;
    })
    .then(getName);
}
getAllCharacters();

function getName(event) {
  const allCharacters = event.data.results;
  console.log("allcharac", allCharacters);

  return allCharacters.forEach((character) => {
    const name = character.name;
    //console.log(name);
    const li = document.createElement("li");
    li.innerText = name;
    li.addEventListener("click", () => {
      const id = character.id;
      getSeries(id);
      removeAll();
      chosenCharacter.innerHTML = `You chose ${name}`;
    });
    return charactersElement.appendChild(li);
  });
}

function removeAll() {
  seriesElement.innerHTML = "";
}

function getSeries(id) {
  console.log("idfetch", id);
  fetch(
    `https://gateway.marvel.com:443/v1/public/characters/${id}/series?apikey=dec9cdce90864edae689b29660018520`
  )
    .then((res) => res.json())
    .then((res) => {
      console.log("resId", res);
      return res;
    })
    .then(getSeriesId);
}

function getSeriesId(event) {
  const allSeries = event.data.results;
  console.log("allseries", allSeries);
  return allSeries.forEach((series) => {
    const serie = series.title;
    const li = document.createElement("li");
    li.innerText = serie;
    return seriesElement.appendChild(li);
  });
}
*/

/*
limit: staat in de fetch op 20
offset: staat op 0, telkens je nieuwe pagina aanklikt, krijg je 1-20, 21-40, 41-60,...
*/

const charactersElement = document.getElementById("characters");
const seriesElement = document.getElementById("series");
const chosenCharacter = document.getElementById("chosen-character");

//pagination
let page = 1;
const itemsPerPage = 20; //limit
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");

function init() {
  getAllCharacters();
  previousButton.addEventListener("click", previousPage);
  nextButton.addEventListener("click", nextPage);
}
init();

function nextPage() {
  page++;
  const offset = (page - 1) * itemsPerPage;
  getAllCharacters(offset);
  charactersElement.innerHTML = "";
}

function previousPage() {
  page--;
  console.log(page);

  if (page === 0) {
    //
    console.log(page);
    //previousButton.remove();
    return;
  } else {
    const offset = (page - 1) * itemsPerPage;
    getAllCharacters(offset);
    charactersElement.innerHTML = "";
  }
}

function getAllCharacters(offset = 0) {
  fetch(
    `https://gateway.marvel.com:443/v1/public/characters?apikey=dec9cdce90864edae689b29660018520&limit=${itemsPerPage}&offset=${offset}`,
    {
      method: "GET",
      params: {
        apikey: "8c4289691ab6031cb2da260892a611a11c932e35",
      },
    }
  )
    .then((res) => res.json())
    .then((res) => {
      console.log("res", res);
      return res;
    })
    .then(getName);
}

function getName(event) {
  const allCharacters = event.data.results;
  console.log("allcharac", allCharacters);

  return allCharacters.forEach((character) => {
    const name = character.name;
    //console.log(name);
    const li = document.createElement("li");
    li.innerText = name;
    li.addEventListener("click", () => {
      const id = character.id;
      getSeries(id);
      removeAll();
      chosenCharacter.innerHTML = `You chose ${name}`;
    });
    return charactersElement.appendChild(li);
  });
}

function removeAll() {
  seriesElement.innerHTML = "";
}

function getSeries(id) {
  console.log("idfetch", id);
  fetch(
    `https://gateway.marvel.com:443/v1/public/characters/${id}/series?apikey=dec9cdce90864edae689b29660018520`
  )
    .then((res) => res.json())
    .then((res) => {
      console.log("resId", res);
      return res;
    })
    .then(getSeriesId);
}

function getSeriesId(event) {
  const allSeries = event.data.results;
  console.log("allseries", allSeries);
  return allSeries.forEach((series) => {
    const serie = series.title;
    const li = document.createElement("li");
    li.innerText = serie;
    return seriesElement.appendChild(li);
  });
}

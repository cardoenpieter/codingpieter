/*
Your public key
dec9cdce90864edae689b29660018520
Your private key
8c4289691ab6031cb2da260892a611a11c932e35
*/
const charactersElement = document.getElementById("characters");
const seriesElement = document.getElementById("series");
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
  //console.log("allcharac", allCharacters);

  return allCharacters.forEach((character) => {
    const name = character.name;
    //console.log(name);
    const li = document.createElement("li");
    li.innerText = name;
    li.style = "cursor:pointer";
    li.addEventListener("click", function () {
      const id = character.id;
      console.log("click id", id);
      return id;
    });

    li.onclick = () => getSeries(id);

    return charactersElement.appendChild(li);
  });
}
/*
function getId(event) {
  const getIdevent = event;
  console.log("getId-event", getIdevent);
  const allCharacters = event.data.results;
  console.log("event allcharacters", allCharacters);
  return allCharacters.forEach((character) => {
    const id = character.id;
    console.log("click ID", id);
    return id;
  });
}*/

function getSeries(id) {
  console.log("id", id);
  fetch(
    `https://gateway.marvel.com:443/v1/public/characters/${id}/series?apikey=dec9cdce90864edae689b29660018520`
  )
    .then((res) => res.json())
    .then((res) => {
      console.log("res", res);
      return res;
    })
    .then(getSeriesId);
}

function getSeriesId(id) {
  //hier moet de data komen van zie afb om de id te koppelen aan de verschillende series
}

/*
https://gateway.marvel.com:443/v1/public/characters/${id}/series?apikey=dec9cdce90864edae689b29660018520
*/
//create li element
// add id to li
// add innerhtml name
// add event listener to li, with function you get event and you can fetch and create new html in that function
// append li to parent list

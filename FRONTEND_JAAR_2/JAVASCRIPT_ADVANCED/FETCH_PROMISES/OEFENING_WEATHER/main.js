const inputField = document.getElementById("inputfield");
const submit = document.getElementById("submit");
const cityNameElem = document.getElementById("city-name");
const weatherDataElem = document.getElementById("weather-data");

function getLocation() {
  console.log(inputField.value);
  if (inputField.value === "") {
    alert("Please fill in a city name.");
    return false;
  }
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${inputField.value}&limit=5&appid=63bf253d53476479b554f6a246a9c58e`,
    {
      method: "GET",
    }
  )
    .then((res) => res.json())
    .then(coordinatesCity); //deze functie komt eerst om de lon en lat er uit te halen
  // dit resultaat komt van de 2e fetch aangezien we in deze 2e fetch de .then callen
}

function coordinatesCity(data) {
  console.log("city", data);
  const coordinatesLon = data[0].lon;
  const coordinatesLat = data[0].lat;
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${coordinatesLat}&lon=${coordinatesLon}&appid=63bf253d53476479b554f6a246a9c58e`,
    {
      method: "GET",
    }
  )
    .then((res) => res.json())
    .then(displayDataOnPage);
}

function displayDataOnPage(data) {
  console.log("displaydata", data);
  //display city name
  const pElem = document.createElement("p");
  pElem.innerHTML = data.name;
  cityNameElem.appendChild(pElem);
  //display weather data
  const dataWeather = data.weather[0];
  console.log("dataweather", dataWeather);
  const li = document.createElement("li");
  const main = dataWeather.main;
  const description = dataWeather.description;
  const icon = dataWeather.icon;
  li.innerHTML =
    "Wheater: " + main + " " + "Details: " + description + " " + getIcons(icon);
  weatherDataElem.appendChild(li);
}

function getIcons(icon) {
  console.log("icon", icon);
  fetch(`https://openweathermap.org/img/wn/${icon}@2x.png`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => {
      const img = document.createElement("img");
      img.src = res.icon;
    });
}

submit.addEventListener("click", getLocation);

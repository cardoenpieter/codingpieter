const inputField = document.getElementById("inputfield");
const submit = document.getElementById("submit");
const cityNameElem = document.getElementById("city-name");
const weatherDataElem = document.getElementById("weather-data");
const image = document.querySelector("img");
const temperatureElem = document.getElementById("temperature");

function getLocation() {
  //console.log(inputField.value);
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
    .then(coordinatesCity);
}

function coordinatesCity(data) {
  console.log("city", data);
  //display cityname,country and date
  let currentDate = new Date();
  const cityname = data[0].name;
  const country = data[0].country;
  const pElem = document.createElement("p");
  pElem.innerHTML =
    cityname + ", " + country + ", " + currentDate.toDateString();
  cityNameElem.appendChild(pElem);
  //get lon and lat
  const coordinatesLon = data[0].lon;
  const coordinatesLat = data[0].lat;
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${coordinatesLat}&lon=${coordinatesLon}&units=metric&appid=63bf253d53476479b554f6a246a9c58e`,
    {
      method: "GET",
    }
  )
    .then((res) => res.json())
    .then(displayDataOnPage);
}

function displayDataOnPage(data) {
  console.log("displaydata", data);
  //display weather
  const dataWeather = data.weather[0];
  const li = document.createElement("li");
  const main = dataWeather.main;
  const description = dataWeather.description;
  const icon = dataWeather.icon;
  li.innerHTML = main + "(" + description + ")";
  weatherDataElem.appendChild(li);
  //display icon
  image.innerHTML = getIcons(icon);
  //display temperature
  const dataTemperature = data.main;
  const currentTemp = dataTemperature.temp;
  const maxTemp = dataTemperature.temp_max;
  const minTemp = dataTemperature.temp_min;
  const liElem1 = document.createElement("li");
  const liElem2 = document.createElement("li");
  const liElem3 = document.createElement("li");
  liElem1.innerHTML = currentTemp + "°C";
  liElem2.innerHTML = "Max " + maxTemp + "°C";
  liElem3.innerHTML = "Min " + minTemp + "°C";
  temperatureElem.appendChild(liElem1);
  temperatureElem.appendChild(liElem2);
  temperatureElem.appendChild(liElem3);
}

function getIcons(icon) {
  //console.log("icon", icon);
  fetch(`https://openweathermap.org/img/wn/${icon}@2x.png`, {
    method: "GET",
  })
    .then((res) => res.blob())
    .then((blob) => {
      const objectURL = URL.createObjectURL(blob);
      image.src = objectURL;
    });
}

//reset inputfield by onclick in the input tag
function resetField() {
  inputField.value = "";
}

submit.addEventListener("click", getLocation);

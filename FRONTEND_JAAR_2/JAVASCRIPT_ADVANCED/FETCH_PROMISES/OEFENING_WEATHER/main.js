const inputField = document.getElementById("inputfield");
const submit = document.getElementById("submit");
const cityNameElem = document.getElementById("city-name");
const weatherDataElem = document.getElementById("weather-data");
const image = document.querySelector("img");
const temperatureElem = document.getElementById("temperature");
const windElem = document.getElementById("wind");
const feelsLikeElem = document.getElementById("feels-like");
const humidityElem = document.getElementById("humidity");
const pressureElem = document.getElementById("pressure");
const forecast = document.getElementById("5day-forecasat");
const currentWeather = document.getElementsByClassName(".current-weather");
const chart = document.getElementById("myChart");

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
    .then((data) =>
      Promise.all([
        resetField(),
        weatherCity(data),
        coordinates5DayForeCast(data),
      ])
    );
}

function weatherCity(data) {
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
  const liElem1 = document.createElement("li");
  liElem1.innerHTML = Math.round(currentTemp) + "°C";
  temperatureElem.appendChild(liElem1);
  //display wind
  const currentWind = data.wind.speed;
  const liElem2 = document.createElement("li");
  liElem2.innerHTML = "Wind: " + Math.round(currentWind) + " km/h";
  windElem.appendChild(liElem2);
  //display feels like
  const currentFeelsLike = dataTemperature.feels_like;
  const liElem3 = document.createElement("li");
  liElem3.innerHTML = "Feels like: " + Math.round(currentFeelsLike) + " °C";
  feelsLikeElem.appendChild(liElem3);
  //display humidity
  const currentHumidity = dataTemperature.humidity;
  const liElem4 = document.createElement("li");
  liElem4.innerHTML = "Humidity: " + currentHumidity + " %";
  humidityElem.appendChild(liElem4);
  //display pressure
  const currentPressure = dataTemperature.pressure;
  const liElem5 = document.createElement("li");
  liElem5.innerHTML = "Pressure: " + currentPressure + " hPa";
  pressureElem.appendChild(liElem5);
}
let chartDisplay; //lege variabele aanmaken die moet herinitialiseren, dus geen const!
function coordinates5DayForeCast(data) {
  const coordinatesLon = data[0].lon;
  const coordinatesLat = data[0].lat;
  return fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinatesLat}&lon=${coordinatesLon}&units=metric&appid=63bf253d53476479b554f6a246a9c58e`,
    {
      method: "GET",
    }
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (chartDisplay) chartDisplay.destroy(); //bij een eerste lege variabele zal hij niets callen,
      //pas wanneer er een chart in zit, zal hij destroyen
      chartDisplay = displayChart(res); //de variabele invullen met de functie
    });
}

function displayChart(data) {
  console.log("displaychart", data.list);
  const dataList = data.list;
  const chartTempAndDate = new Chart(chart, {
    type: "line",
    data: {
      labels: dataList.map((xline) => {
        const timeDateParts = xline.dt_txt.split(" ");
        const timePart = timeDateParts[1];
        const datePart = timeDateParts[0];
        if (timePart === "12:00:00") {
          console.log(timePart + datePart);
          return datePart;
        }
      }),
      datasets: [
        {
          label: "Temp-line",
          data: dataList.map((yline) => {
            const timeDateParts = yline.dt_txt.split(" ");
            const timePart = timeDateParts[1];
            const datePart = timeDateParts[0];
            const tempParameter = yline.main.temp;
            if (timePart === "12:00:00") {
              console.log(
                "temp controle",
                timePart + " " + datePart + " " + tempParameter
              );
              return Math.round(tempParameter);
            }
          }),
          borderWidth: 2,
          spanGaps: true,
        },
      ],
    },
  });
  return chartTempAndDate;
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
  cityNameElem.innerHTML = "";
  weatherDataElem.innerHTML = "";
  image.innerHTML = "";
  temperatureElem.innerHTML = "";
  windElem.innerHTML = "";
  feelsLikeElem.innerHTML = "";
  humidityElem.innerHTML = "";
  pressureElem.innerHTML = "";
}

submit.addEventListener("click", getLocation);

//dinsdag

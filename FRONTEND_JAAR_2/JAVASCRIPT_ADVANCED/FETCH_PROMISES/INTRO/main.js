/*FETCH*/
fetch("https://api.chucknorris.io/jokes/random")
  .then((res) => res.json()) //dit is eigen aan de API, res.json() is een promise
  .then((res) => {
    //throw new Error("error");
    //van zodra er een new Error gebeurt, dan zal alle code stoppen
    console.log(res);
    //op het moment dat er gelogd wordt, krijgen we een promise
  });
//.catch((err) => alert("An error occured"));
//bij .catch gaat hij error weergeven van zodra er een error optreedt in de fetch

/*ASYNC AWAIT*/
//return bij de async zal altijd een promise zijn
//een variabele declareren
//response.json() is ook een promise
//errorhandling: gebruikt try{}

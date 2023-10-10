//keydown and keyup
//ID uit HTML halen
 const $inputKDU = document.getElementById("keydown&up");

 //functie maken om kleur aan te passen tijdens het typen
 function pressKeyDown() {
     document.getElementById("keydown&up").style.backgroundColor = "orange";   
 }

 //functie maken om kleur en uppercase aan te passen tijdens het loslaten van de toetsen
  function pressKeyUp() {
    document.getElementById("keydown&up").style.backgroundColor = "lightblue";
    let fillIn = document.getElementById("keydown&up");
    fillIn.value = fillIn.value.toUpperCase();   
  }

 $inputKDU.addEventListener("keydown&up", pressKeyDown, pressKeyUp);


//ID uit HTML halen
const $userText = document.getElementById('user-text');

//functie om aan te tonen wat er letterlijk wordt getypt
function actualKeys(){
  let actualText = document.getElementById("keydown&up").value;
  actualText = document.getElementById("user-text").innerHTML;
  console.log(actualText);
}

$userText.addEventListener("user-text", actualKeys);

 










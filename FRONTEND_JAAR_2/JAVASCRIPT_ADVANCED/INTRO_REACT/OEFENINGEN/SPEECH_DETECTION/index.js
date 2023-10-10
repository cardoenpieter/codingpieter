window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = "en-US";

const spokenWords = document.querySelector(".words"); //hier enkel queryselector gebruiken en niet queryselectorall
let newAlinea = document.createElement("p");

recognition.addEventListener("result", (e) => {
  console.log(e.results);
  const text = Array.from(e.results) //array maken van de gesproken woorden
    .map((result) => result[0]) //zoeken naar de waarden in de net aangemaakte array
    .map((result) => result.transcript) //idem
    .join(""); //woorden terug bij elkaar voegen en in een zin zetten

  if (e.results[0].isFinal) {
    //https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionResult/isFinal
    newAlinea.innerText += text
      .replace(/unicorn/gi, "🦄") //replace in combinatie met RegEx
      .replace(/poop/gi, "💩")
      .replace(/lipstick/gi, "💄")
      .replace(/peter/gi, "🎅");
    newAlinea = document.createElement("p");
    spokenWords.appendChild(newAlinea);
  }
  if (text.includes("background is blue")) {
    document.body.style.backgroundColor = "blue";
  } else if (text.includes("background is yellow"))
    document.body.style.backgroundColor = "#ffc600";
});
recognition.addEventListener("end", recognition.start);

recognition.start();

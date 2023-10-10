let worldEl = document.getElementById('world');
let clickMeBtn = document.getElementById('clickMeBtn');
let clickCountEl = document.getElementById('clickCount');
let nameInputEl = document.getElementById('nameInput');
let nameInputElTwo = document.getElementById('nameInput-two');
let nameInputElThree = document.getElementById('nameInput-three');
let nameInputElFour = document.getElementById('nameInput-four');

console.log(worldEl.innerText);
worldEl.innerText = 'Everybody';

let clickCount = 0;

function clickMeBtnClicked() {
    clickCount++;
    clickCountEl.innerText = clickCount;
    worldEl.innerText = nameInputEl.value;
}

function nameInputTyped(event) {
    worldEl.innerText = event.target.value;
}

clickMeBtn.addEventListener('click', clickMeBtnClicked);

nameInputEl.addEventListener('keyup', nameInputTyped);
nameInputElTwo.addEventListener('keyup', nameInputTyped);
nameInputElThree.addEventListener('keyup', nameInputTyped);
nameInputElFour.addEventListener('keyup', nameInputTyped);

fetch('https://swapi.dev/api/people')
  .then(function(response) {
    return response.json();
})
  .then(function(body) {
    console.log(body);
}).catch(function(error) {
    console.error(error);
})

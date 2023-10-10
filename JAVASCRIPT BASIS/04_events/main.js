//$btn dit trekken we uit de .html en is een tag
const $btn = document.getElementById('btn');
console.log($btn);
//$count dit trekken we ook uit de .html
const $count = document.getElementById('count');

//variabele aanmaken boven het eventhandler
let count = 0;

//$user-text uit de .html halen
const $userText = document.getElementById('user-text');

//input uit de html halen
const $input = document.getElementById('input');

//console.log('btn');
//console.log('count');


//loopen 'for' wordt vervangen door events en deze kan meerdere iterations hebben
//dit event wacht totdat het getriggerd wordt, dus wanneer er op 'click me' geklikt wordt
function handleClick() {
    count ++; 
    console.log(count);
    //$count.innerText = count;

   //console.log($input.value);

    $userText.innerText = $input.value;
}


//let op bij handleClick: hier geven we enkel de functie mee en NIET de returnwaarde
//geven de functie mee als parameter
//eventhandler wordt getriggerd
//kiezen wat er in de functie zit, maar niet wanneer deze wordt uitgevoerd
//asynchrone code: aparte tijdlijn maken voor de evenhandler, wanneer is de waarde ingevuld?
$btn.addEventListener('click', handleClick);









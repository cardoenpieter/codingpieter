//geolocation
//navigator: onderliggende motor van de browser, is hetzelfde als een document element

let result = document.getElementById('result');
function showPosition (position) {          //parameter position aanmaken
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let altitude = position.coords.altitude;

    result.innerHTML = latitude + "-" + longitude + "-" + altitude; //positie die hij meekrijgt in de id result zetten
}

function getLocation () {
    //nakijken of de geolocation API is opgestart en navragen of hij mag opgestart worden
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);     
        //getcurrentposition is een aparte functie dat aanduidt waar de positie ter plekke is               
    } else {
        //in de result zetten dat er een probleem is
        result.innerText = "Problem with geolocation";
    }
}

//1 zoekopdracht terugkeren in de geschiedenis
function goHistory () {
    window.history.go(-1); 
}

const $historyBtn = document.getElementById('history');
$historyBtn.addEventListener('click', goHistory);

//leest wat er in de form is getypt geweest
function readURL () {
    let currentURL= new URL(document.URL);
    console.log(currentURL);
}

const $URLBtn = document.getElementById('url');
$URLBtn.addEventListener('click', readURL);

//form validation API: controle zelf uitvoeren
//enkel inputvelden nodig
function validateForm () {
    let inputTest = document.getElementById('test');
    if (!inputTest.checkValidity()) {       //checkValidity is een functie op zich die checkt of er iets is ingevuld, indien niet zal er een invalid verschijnen
        result.innerText = "Invalid text, " + inputTest.validationMessage; //validationMessage: dit bericht komt in het NL vanuit de browser en kiest de taal in welk land/regio je werkt
    } else {
        result.innerText = "Valid text";
    }
}

const $formBtn = document.getElementById('form-button');
$formBtn.addEventListener('click', validateForm);
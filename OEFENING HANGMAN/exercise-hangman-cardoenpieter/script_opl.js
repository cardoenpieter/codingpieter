const randomWords = [
    'condition',
    'bottom',
    'lineage',
    'trip',
    'reporter',
    'paper',
    'colorful',
    'agent',
    'justify',
    'torture',
    'cap',
    'earthflax',
    'payment',
    'research',
    'picture',
    'garage',
    'honor',
    'memorial',
    'planet',
    'biography',
    'profound',
    'rumor',
    'gear',
    'bedroom',
    'orthodox',
    'penalty',
    'grief',
    'promote',
    'roof',
    'suite',
    'moving',
    'killer',
    'museum',
    'essay',
    'fever',
    'dignity',
    'shadow',
    'enjoy',
    'kill',
    'shy',
    'counter',
    'pawn',
    'button',
    'bullet',
    'skin',
    'rate',
    'shop',
    'consider',
    'other',
    'prospect',
];

const MAX_IMAGE_NUMBER = 9;

let $image = document.getElementById('image');
let $letterBtns = document.querySelectorAll('.letter');
let $solutionContainer = document.getElementById('solution-container');
let $winLoseContainer = document.getElementById('win-lose-container');

//object aanmaken met verschillende waardes in
let state = {
    word: null,                                                     //initieel is dit null, deze in de init brengen en functie aan toevoegen
    foundLetters: [],                                               //in een array bijhouden
    foundLettersCount: 0,                                           //hoeveel letters zijn er gevonden
    imageNumber: 1,                                                 //update image bij fout antwoord
}  

//**Draw Functions**//
function drawImage() {
    $image.src = `images/hangman0${state.imageNumber}.png`;          //backtick dollarteken en akkolade geeft dynamisch
}

//succes en failed klasse verwijderen in de HTML
function clearLetterClasses() {
    for (let i = 0; i < $letterBtns.length; i++) {
        $letterBtns[i].classList.remove('success', 'failed');                                       //klasses verwijderen
    }
}

//letters in een woord tellen en deze in de solutioncontainer tonen
function drawSolutionLetters() {
    let solutionLetterHTML = '';                                                                    //lege string aanmaken

    for (let i = 0; i < state.foundLetters.length; i++) {                                           //state uitlezen
        solutionLetterHTML += `<div class="solution-letter">${state.foundLetters[i]}</div>`;        //lege string wordt gemaakt, zijn div tags naast elkaar
    }                                                                                               //state.foundletters:letters automatisch laten in komen
    //innerHTML: bepaalde inhoud van de tag wijzigen
    $solutionContainer.innerHTML = solutionLetterHTML;                                              //innerHTML wordt dit in de solution container gezet
}

//
function drawWinLoseContainer(text) {
    $winLoseContainer.innerText = text;                                                 //tekst tonen bij win of lose
}

function drawLetterClass($letterBtn, className) {
    $letterBtn.classList.add(className);
}

//**Help functions**//
function selectRandomWord() {
    //deze if clause zetten om op veilig te spelen aangezien de random functie ooit tot een einde zal leiden
    //deze randomwoorden komen in feite van een server
    if (randomWords.length === 1) {
        return randomWords[0];
    }

    let randomIndex = Math.floor(Math.random() * randomWords.length);                   //.length haalt de items op index 0 tem 49 er uit.
    return randomWords.splice(randomIndex, 1)[0];                                       //-> splice:Word in array [0]: het item op index 0 eruit halen en gaat effectief een woord weergeven en geen nummer
}

//string even lang maken dan de array waar het woord in zit
function initFoundLettersState() {
    let foundLetters = [];

    for (let i = 0; i < state.word.length; i++) {
        foundLetters.push('');                                  //gevonden letters in de string pushen en dit gaat even lang zijn dan de array
    }

    return foundLetters;
}

//woord checken en de specifieke letter gaan zoeken
//boolean: letter gevonden of letter niet gevonden en alle posities gaan bijhouden
function isLetterFound(letter) {
    let letterFound = false;                                     //initieel op false zetten, van zodra de letter gevonden is op true zetten

    //loopen over het te zoeken woord
    for (let i = 0; i < state.word.length; i++) {
        if (letter === state.word[i]) {
            letterFound = true;
            state.foundLetters[i] = letter.toUpperCase();        //gevonden letter wordt ingegeven op de plaats waar hij moet staan
            state.foundLettersCount++;                          //bijhouden hoeveel letters er gevonden zijn
        }
    }

    return letterFound;
}

//**Run functions**//

function init() {
    //deze state moet ook telkens geupdate worden
    state.word = selectRandomWord();
    state.imageNumber = 1;
    state.foundLetters = initFoundLettersState();
    state.foundLettersCount = 0;

    //drawfuncties bijhouden en alles opnieuw resetten bij gevonden woorden
    clearLetterClasses();
    drawSolutionLetters();
    drawWinLoseContainer('');                           //deze leeg maken door een lege string te plaatsen
    drawImage();

    console.log(state);
}

//event: te weten komen op welke letter er geklikt wordt
function letterClicked(event) {
    let $selectedLetter = event.target
    let selectedLetter = $selectedLetter.innerText.toLowerCase();               //lowercase omdat de randomwoorden in lowercase zijn

    //is letter gevonden, pas dan volgende klasses toe
    if ($selectedLetter.classList.contains('success') || 
        $selectedLetter.classList.contains('failed')) {
        return;                                             //deze return stopt het continue klikken op een gevonden of niet gevonden letter en eindigt de functie
    }

    if (state.foundLettersCount === state.word.length
        || state.imageNumber === MAX_IMAGE_NUMBER) {
        return;                                             //deze return stopt de functie wanneer het woord gevonden of niet gevonden is en zal er niet meer geklikt kunnen worden
    }

    if (isLetterFound(selectedLetter)) {                //isletterfound is een boolean, vandaar dat hij meteen true of false gaat zijn
        drawLetterClass($selectedLetter, 'success');    //opgesplitste functie toepassen om een klasse aan de buttonletter te geven
        drawSolutionLetters();
    } else {
        state.imageNumber++;

        drawLetterClass($selectedLetter, 'failed');
        drawImage();
    }

    if (state.foundLettersCount === state.word.length) {
        drawWinLoseContainer('You won!');                                   
    }

    if (state.imageNumber === MAX_IMAGE_NUMBER) {
        drawWinLoseContainer(`You lost, the word was '${state.word}'`);
    }

    console.log(state);
}

//loopen over de letters in de HTML om te kunnen klikken op de letters
function addLetterClickedEvent() {
    for (let i = 0; i < $letterBtns.length; i++) {
        $letterBtns[i].addEventListener('click', letterClicked );
    }
}


//**Run**//
init();//pagina geladen
addLetterClickedEvent();
$winLoseContainer.addEventListener('click', init); //uitvoeren bij het klikken

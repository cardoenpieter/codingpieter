$addLine = document.getElementById('btn-addLine');
$input = document.getElementById('input-container');
$numberInput = document.getElementsByClassName('number-input');
$btnDelete = document.getElementsByClassName('btn-delete');
$btnSum = document.getElementById('btn-sum');
$btnMultiply = document.getElementById('btn-product');
$resultContainerSum = document.getElementById('result-container-sum');
$resultContainerMultiply = document.getElementById('result-container-multiply"');
$resultContainer = document.getElementById('result-container');
$inputElements = document.getElementsByClassName('input-elements');

//niewe inputlijn en button toevoegen
function addNewLineAndBtn () {
    let newInputHTML = `<div>                               
    <input class="number-input" type="number" /> 
    <button class="btn-delete">Delete</button>
    </div>`;
    $input.insertAdjacentHTML('beforeend', newInputHTML);  //insertadjacenthtml: string toevoegen met de backticks
}
$addLine.addEventListener('click', addNewLineAndBtn);

//nieuwe inputlijn en button verwijderen
function deleteNewLineAndBtn (event) {
    if ($input.children.length <= 2) {
        return;
    }
    let $target = event.target;                 //in een variabele duwen om compacter te werken
    if($target.matches('.btn-delete')) {        //matches: bepaald element overeenkomt met een HTML element
        $target.parentElement.remove();         //parentelement: in de div tag in HTML gaat hij alles verwijderen, 1 stap omhoog zoeken
    }
}
$input.addEventListener('click', deleteNewLineAndBtn);

//Alt + 96  backticks

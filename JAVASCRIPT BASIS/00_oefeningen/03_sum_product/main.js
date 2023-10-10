$addLine = document.getElementById('btn-addLine');
$input = document.getElementById('input-container');
$numberInput = document.getElementsByClassName('number-input');
$btnDelete = document.getElementsByClassName('btn-delete');
$btnSum = document.getElementById('btn-sum');
$btnMultiply = document.getElementById('btn-product');
$resultContainerSum = document.getElementById('result-container-sum');
$resultContainerMultiply = document.getElementById('result-container-multiply"');
$resultContainer = document.getElementById('result-container');

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
    let $target = event.target;                 //in een variabele duwen om compacter te werken
    if($target.matches('.btn-delete')) {        //matches: bepaald element overeenkomt met een HTML element
        $target.parentElement.remove();         //parentelement: in de div tag in HTML gaat gij alles verwijderen, 1 stap omhoog zoeken
    }
}
$input.addEventListener('click', deleteNewLineAndBtn);



function sumBy () {
    let totalSum = 0;
    for (let i = 0; i < $input.children.length; i++) {
        console.log('forloop children i', $input.children[i]);                          //toont HTML uit de div class input-elements
        console.log('forloop children 0', $input.children[i].children[0].value);        //toont de gevonden waarde uit de input class number-input
        console.log('forloop children 0 no value', $input.children[i].children[0]);     //toont HTML input class number-input
    let result = Number($input.children[i].children[0].value);
        console.log(result);
    totalSum = totalSum + result;
        //console.log(totalSum);
    $resultContainer.innerText = `Sum: ${totalSum}`;    
    }  
}
$btnSum.addEventListener('click', sumBy);

function multiplyBy () {
    let totalProduct = 1;
    for (let i = 0; i< $input.children.length; i++) {
        let result = Number($input.children[i].children[0].value);
    totalProduct = totalProduct * result;
    $resultContainer.innerText = totalProduct;
    }
}
$btnMultiply.addEventListener('click', multiplyBy);
















// //input nummers vastzetten in inputveld
// function inputNumberField (numbers) {
//     $numberInput.innerText = Number(numbers);

//     console.log(numbers);     
// }
// $input.addEventListener('input', inputNumberField);

// //input optellen
// function numbersSum () {
//     let number = inputNumberField();
//     console.log(number);
//     numberSum = number + number;
//     $resultContainer.innerHTML = numberSum;

// }
// $btnSum.addEventListener('click', numbersSum);
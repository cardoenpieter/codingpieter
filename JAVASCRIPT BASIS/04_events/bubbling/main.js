/* 
.lastElementChild   de laatste in een rij selecteren
*/

let $btnContainer = document.getElementById('btn-container');
let $addBtn = document.getElementById('add-btn');

let $numberContainer = document.getElementById('number-container');

function btnClick(event) {
    if (event.target.matches('button')) {
        let selectedNumber = event.target.innerText;

        $numberContainer.innerText = selectedNumber;
        console.log(selectedNumber);
    }
}

function addNumber() {
    let lastNumber = parseInt($btnContainer.lastElementChild.innerText);

    let newBtnHTML = `<button>${lastNumber + 1}</button>`;

    $btnContainer.insertAdjacentHTML('beforeend', newBtnHTML);
}

function addEventListeners() {
    let $btns = document.querySelectorAll('#btn-container button');

    for (let i = 0; i < $btns.length; i++) {
        $btns[i].addEventListener('click', btnClick);
    }
}

$addBtn.addEventListener('click', addNumber);
$btnContainer.addEventListener('click', btnClick);
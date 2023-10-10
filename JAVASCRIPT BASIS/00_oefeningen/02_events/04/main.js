let $input = document.getElementById('name-input');
let $count = document.getElementById('count');
let $btn = document.getElementById('submit-btn');
let $name = document.getElementById('hello-container');


function inputKeyUp(event) {
    console.log('input')
    $count.innerText = $input.value.length;
} 

function btnClick(event) {
    $name.innerText = 'Hello ' + $input.value;
}

$input.addEventListener('input', inputKeyUp);

$btn.addEventListener('click',btnClick);
const $dragDot = document.getElementById('drag-dot');

const $dropContainer = document.getElementById('drop-container');
const $dragContainer = document.getElementById('drag-container');
function drag(event) {
    console.log('drag');
}

function dragStart(event) {
    console.log('dragstart');
}

function dragEnd(event) {
    console.log('dragEnd');
}

function dragEnter(event) {
    console.log('dragEnter');
    $dropContainer.classList.add('active');
}

function dragLeave(event) {
    console.log('dragLeave');
    $dropContainer.classList.remove('active');
}

function drop(event) {
  console.log('drop');
  
  $dragContainer.removeChild($dragDot);
  $dropContainer.appendChild($dragDot);
}

function dragOver(event) {
  event.preventDefault();
  console.log('dragOver');
  
  
}

$dragDot.addEventListener('drag', drag);
$dragDot.addEventListener('dragstart', dragStart);
$dragDot.addEventListener('dragend', dragEnd);
$dropContainer.addEventListener('dragenter', dragEnter);
$dropContainer.addEventListener('dragleave', dragLeave);
$dropContainer.addEventListener('drop', drop);
$dropContainer.addEventListener('dragover', dragOver);

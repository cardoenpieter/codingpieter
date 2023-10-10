const $img = document.querySelector('img.img');

function getParsLoad() {
    const $parOne = document.getElementById('par-one');
    const $parTwo = document.getElementById('par-two');

    console.log('load', { $parOne, $parTwo });
    
    $img.src = 'https://img.freepik.com/premium-photo/crossbredeed-cat-wearing-bell-isolated-white_191971-23879.jpg?w=2000'
}

function getParsDomContentLoaded() {
    const $parOne = document.getElementById('par-one');
    const $parTwo = document.getElementById('par-two');

    console.log('DOMContentLoaded', { $parOne, $parTwo });
}

function imgLoaded() {
  console.log('img loaded');
}

window.addEventListener('load', getParsLoad);
window.addEventListener('DOMContentLoaded', getParsDomContentLoaded);

$img.addEventListener('load', imgLoaded)

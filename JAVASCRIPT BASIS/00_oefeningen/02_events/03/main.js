let $gridItems = document.querySelectorAll('.grid-item');

function click(event) {
    if (event.target.classList.contains('red')) {
        event.target.classList.remove('red');
        event.target.classList.add('green');
    } else if (event.target.classList.contains('green')) {
        event.target.classList.remove('green');
        event.target.classList.add('blue');
    } else if (event.target.classList.contains('blue')) {
        event.target.classList.remove('blue');
    } else {
        event.target.classList.add('red');
    }
}

for (let i = 0; i < $gridItems.length; i++) {
    $gridItems[i].addEventListener('click', click);
}
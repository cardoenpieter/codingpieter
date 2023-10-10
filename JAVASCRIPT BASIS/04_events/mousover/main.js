const $canvas = document.getElementById('canvas');

function canvasMouseMove(event) {
    console.log(event);
    
    let className = 'green-dot';
    if (event.buttons === 1) {
        className = 'red-square';
    }
    
    let newEl = `<div class="${className}" style="top:${event.offsetY}px; left:${event.offsetX}px;"></div>`;
    
    $canvas.insertAdjacentHTML('beforeend', newEl);
}

$canvas.addEventListener('mousemove', canvasMouseMove);

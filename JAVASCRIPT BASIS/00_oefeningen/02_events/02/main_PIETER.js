const $grid = document.querySelectorAll('div.grid-item');
const $gridFill = document.getElementsByClassName('.grid-item.active');
const $gridLittleBorders = document.getElementsByClassName('.grid-item');
const $gridBigBorder = document.getElementsByClassName('.grid');


function mouseOverGrid(event) {
    for (let i = 0; i < $grid.length; i++) {
      console.log(event);
      let className = 'grid-item'
        if (event === 1) {
            className = 'grid-item.active'
            let newGrid = `<div class="${className}" style="top:${event.offsetY}px; left:${event.offsetX}px;"></div>`;
            $grid.insertAdjacentHTML('test', newGrid);
        }
    }
    
    

}




//const $allItems = document.getElementsByClassName('item');
//const $item = document.querySelector('.item');
//const $border = document.querySelector('.item.show');




//  const $canvas = document.getElementById('canvas');

//  function canvasMouseMove(event) {
//      console.log(event);
    
//      let className = 'green-dot';
//     if (event.buttons === 1) {
//         className = 'red-square';
   
//      let newEl = `<div class="${className}" style="top:${event.offsetY}px; left:${event.offsetX}px;"></div>`;
    
//      $canvas.insertAdjacentHTML('beforeend', newEl);
//  }

//  $canvas.addEventListener('mousemove', canvasMouseMove);
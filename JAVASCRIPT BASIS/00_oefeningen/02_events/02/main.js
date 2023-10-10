let $gridItems = document.querySelectorAll('.grid-item');

function mouseEnter(event) {
    event.target.classList.toggle('active');
    //console.log(event);
    
    //2e optie en vervangt de .toggle
      //if (event.target.classList.contains('active')) {
          //event.target.classList.remove('active');
         // console.log(event);

      //} else {
        //  event.target.classList.add('active');
      //}
}


for (let i = 0; i < $gridItems.length; i++) {
    $gridItems[i].addEventListener('mouseenter', mouseEnter);
}

let $items = document.querySelectorAll('.item');

function windowScroll(event) {
    console.log(event);
    let windowHeight = document.documentElement.clientHeight;
    let scrollTop = document.documentElement.scrollTop;
    let scrollBottom = scrollTop + windowHeight;
    
    console.log($items[1].offsetTop);
    
    for (let i = 0; i < $items.length; i++) {
        let itemPos = $items[i].offsetTop;
        let itemHeight = $items[i].offsetHeight;

        if (scrollTop <= itemPos && scrollBottom >= itemPos + itemHeight) {
            $items[i].classList.add('show');
        } else {
            $items[i].classList.remove('show'); 
        }
    }
}

window.addEventListener('scroll', windowScroll);
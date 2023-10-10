const $scroll = document.querySelector('.scroll');
const $images = document.getElementById('image');
const $scroller = document.getElementById('scroller');

function scrolling()  {
    console.log(document.documentElement.scrollTop);
    
    document.body.style.backgroundColor = '#' + document.documentElement.scrollTop;
}


document.addEventListener('scroll', scrolling);
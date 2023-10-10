const $allItems = document.getElementsByClassName('item');
const $item = document.querySelector('.item');
const $border = document.querySelector('.item.show');

const $itemOne = document.getElementById('item-one');





function scrollingBorder() {
    if (document.documentElement.scrollTop > 200 && document.documentElement.scrollTop < 1200) {
      document.getElementById('item-one').className = 'item.show';
    } else {
      document.getElementById('item-one').className = 'item';
    }
  }

  document.addEventListener('scroll', scrollingBorder);
  //window.onscroll = function() {scrollingBorder()};
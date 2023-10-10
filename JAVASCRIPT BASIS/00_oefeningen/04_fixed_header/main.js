let $header = document.querySelector('.header');

let prevScrollPos = 0;              //vorige scrollpositie
let prevScrollDirection = null;     //vorige scrollrichting
let scrollDirectionChangePos = 0;

function windowScroll(event) {
    let curScrollPos = document.documentElement.scrollTop;
    // let curScrollDirection = prevScrollPos < curScrollPos ? 'down' : 'up';  voor vraagteken if clause, na vraagteken true en na dubbelpunt false
    let curScrollDirection;
    if (prevScrollPos < curScrollPos) {         //huidige richting
        curScrollDirection = 'down';
    } else {
        curScrollDirection = 'up';
    }
    
    console.log({ curScrollPos,curScrollDirection,prevScrollPos, prevScrollDirection });
    prevScrollPos = curScrollPos;
    if (curScrollDirection === prevScrollDirection) {
        return;
    }
    
    //alles wat hier onder zit, dan is er een wijziging gebeurd en is geweten waar het punt is
    if (curScrollDirection === 'down') {
        $header.classList.add('header--hidden');
        console.log('hide');
    } else {
        $header.classList.remove('header--hidden');
        console.log('show');
    }

    scrollDirectionChangePos = curScrollPos;
    prevScrollDirection = curScrollDirection;
}

window.addEventListener('scroll', windowScroll);

let $header = document.querySelector('.header');

let prevScrollPos = 0;
let prevScrollDirection = null;
let scrollDirectionChangePos = 0;

function windowScroll() {
    let curScrollPos = document.documentElement.scrollTop;
    // let curScrollDirection = prevScrollPos < curScrollPos ? 'down' : 'up';
    let curScrollDirection;
    if (prevScrollPos < curScrollPos) {
        curScrollDirection = 'down';
    } else {
        curScrollDirection = 'up';
    }
    
    prevScrollPos = curScrollPos;
    
    if (curScrollDirection !== prevScrollDirection) {
        scrollDirectionChangePos = curScrollPos;
        prevScrollDirection = curScrollDirection;
    } else {
        let margin = Math.abs(curScrollPos - scrollDirectionChangePos);
        
        if (margin > 50) {
            if (curScrollDirection === 'down') {
                $header.classList.add('header--hidden');
            } else {
                $header.classList.remove('header--hidden');
            }
        }
    }
}

window.addEventListener('scroll', windowScroll);

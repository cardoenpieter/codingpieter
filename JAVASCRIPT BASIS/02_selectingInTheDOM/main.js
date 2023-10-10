console.log(Math.random());
console.log(window.Math.random());

function test() {
    console.log('test');
}

test();
window.test();

console.log(document);
console.log(window.document);

// Root properties

console.log(document.documentElement); // html tag
console.log(document.head); // head tag
console.log(document.body); // body tag

// Children

console.log(document.body.childNodes);
console.log(document.body.children);

console.log(document.body.firstChild);
console.log(document.body.firstElementChild);

console.log(document.body.lastChild);
console.log(document.body.lastElementChild);

// Parent
console.log(document.documentElement.parentNode);
console.log(document.documentElement.parentElement);

// Sibling
console.log(document.body.previousSibling);
console.log(document.body.previousElementSibling);


// Searching

// by id

let title = 'test123'; //opletten met dit zomaar op te halen

console.log(document.getElementById('title'));
let titleElement = document.getElementById('title');
titleElement.style.color = 'blue';

console.log(title);

// by class

console.log(document.getElementsByClassName('important'));

let importantElements = document.getElementsByClassName('important');

for (let i = 0; i < importantElements.length; i++) {
    importantElements[i].style.color = 'green';
}

// by tag

console.log(document.getElementsByTagName('p'));


//deze functie nodig voor CSS te tonen
function showSelectedElements(elements) {
    elements.forEach((element) => {
        element.style.border = '2px solid red';
        element.style.background = 'goldenrod';
    });
}

// querySelectorAll, gaat verschillende elementen inzitten

let pElements = document.querySelectorAll('p'); // by tag name
let testClassElements = document.querySelectorAll('.test'); // by class test
let titleIdElement = document.querySelectorAll('#title'); // by id title
let testClassPElements = document.querySelectorAll('p.test'); // p tag with class test

let elements = document.querySelectorAll('header .desktop-nav .nav-item');//de spatie tussen de elementen duiden aan dat nav-item in desktop-nav zit en dat desktop-nav in header zit
showSelectedElements(elements);

// querySelector, gaat ofwel 0 geven als er niets in zit ofwel 1 element, maar nooit meer dan 1 aangezien hij maar 1 kan selecteren



let titleElementTwo = document.querySelector('#title'); // document.querySelectorAll('#title')[0]; dit gebeurt op de achtergrond waar [0] het eerste element zal zijn

// live collections
//elementen selecteren

let navItemsOne = document.getElementsByClassName('nav-item');
let navItemsTwo = document.querySelectorAll('.nav-item');

console.log({ navItemsOne, navItemsTwo });

document.getElementById('btn').addEventListener('click', () => {
    const mobileNav = document.querySelector('.mobile-nav');

    mobileNav.insertAdjacentHTML(
        'beforeend',
        ` <a class="nav-item" href="test">Test ${mobileNav.children.length + 1}</a>`
    );

    console.log({ navItemsOne, navItemsTwo });
});
















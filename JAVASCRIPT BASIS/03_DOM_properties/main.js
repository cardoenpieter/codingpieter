let $paragraph = document.getElementById('paragraph');

console.log($paragraph);

// outerHTML
console.log($paragraph.outerHTML);

// innerHTML
console.log($paragraph.innerHTML);

$paragraph.innerHTML = `Stars yell from <a href="friendships">friendships</a> like calm astronauts. <script>console.log('test123');</script>`;

// innerText or textContent
console.log($paragraph.innerText);
console.log($paragraph.textContent);

// $paragraph.innerText = `Stars yell from <a href="friendships">friendships</a> like calm astronauts.`;

// tagName

console.log($paragraph.tagName);

// id

console.log($paragraph.id);

// className
//vrij omslachtige manier om een klasse te verwijderen

console.log($paragraph.className);

let className = $paragraph.className;

let classNameArray = className.split(' ');      //array van maken

let testTwoIndex = classNameArray.indexOf('test-2');    //deze er uit halen

classNameArray.splice(testTwoIndex, 1);         //splitsen en 1 uithalen

$paragraph.className = classNameArray.join(' ');    //de rest terug joinen met elkaar

// classList

console.log($paragraph.classList);

$paragraph.classList.add('test-4');
$paragraph.classList.remove('test-2');
console.log($paragraph.classList.contains('test-3')); //gaat true opleveren wanneer hij deze vindt
$paragraph.classList.toggle('test-6'); //wanneer hij deze niet vindt, gaat hij deze 'test-6' zelf toevoegen

$paragraph.addEventListener('click', () => {
    $paragraph.classList.toggle('bold');
});


//input


let $input = document.getElementById('input');

//clickevent zetten
let $btn
console.log($input.value);




const form = document.getElementById('testform');
    //console.log(form);

const range = document.getElementById('range');
const rangeVal = document.getElementById('rangeVal');

range.addEventListener('input', changeRange);

function changeRange() {
    rangeVal.innerText = range.value;
}


//form.addEventListener('submit', formSubmit);

function formSubmit (event) {
    event.preventDefault();                 //voorkom het default behavior en dat is de Submit in dit geval
    console.info('Form submitted');
    
}
const $textfields = document.getElementsByClassName('input-fields');
const $focusVal = document.getElementById('focus-val');
const $blurVal =document.getElementById('blur-val');

console.log($textfields);

// $textfield.addEventListener('focus', function () {});
//
// $textfield.addEventListener('blur', function () {});

function elementFocus(event) {
  console.log('focus');
  console.log(event.target);
  
  $focusVal.innerText = event.target.value;
}

function elementBlur(event) {
  console.log('blur');
  console.log(event.target);
  
  $blurVal.innerText = event.target.value;
}

for (let i = 0; i < $textfields.length; i++) {
    $textfields[i].addEventListener('focus', elementFocus);

    $textfields[i].addEventListener('blur', elementBlur);
}

const $input = document.getElementById('input');
const $keydownKey = document.getElementById('keydown-key');
const $keyupKey = document.getElementById('keyup-key');

function keydownEvent(event) {
    console.log(event);
    $keydownKey.innerText = event.key;
}

function keyupEvent(event) {
    console.log(event);
  $keyupKey.innerText = event.key;

  // if (event.key === 'a') {
  //   let curVal = $input.value;

  //   console.log($input.value);

  //   let newVal = curVal.substring(0, curVal.length - 1) + 'b';

  //   $input.value = newVal;
  // }
}

document.addEventListener('keydown', keydownEvent);
document.addEventListener('keyup', keyupEvent);

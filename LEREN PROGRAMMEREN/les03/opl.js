// First exercises oplossingen


function shoutHelloTo(name) {
    let shoutout = 'hello ' + name;
    return shoutout.toUpperCase();
  
    // return 'HELLO ' + name.toUpperCase();
  }
  
  console.log(
    shoutHelloTo('Blblabla')
  ); // -> 'HELLO KORNEEL'
  
  function average(a,b,c,d) {
    return (a + b + c + d) / 4;
  }
  
  console.log(
    average(32,33,6,10) // -> 8
  );
  
  function capitalise(word) {
    let firstLetter = word.charAt(0);
    let otherLetters = word.substring(1);
  
    return firstLetter.toUpperCase() + otherLetters.toLowerCase();
  }
  
  console.log(
    capitalise('gert') // -> 'Gert'
  );
  console.log(
    capitalise('geRT') // -> 'Gert'
  );

// extra oefeningen

//01
function makeUppercase(noun) {
  return allLetters = noun.toUpperCase();

}
 console.log(
  makeUppercase('tree')
 ) ;

//02
 function shoutSomethingtoSomebody(name) {
  let shout = 'Good morning ' + name;
  return shout;

 }
console.log(
  shoutSomethingtoSomebody('Pieter')
);

//03
function changeCharacters(name) {
  let firstPart = name.substring(0,8).toUpperCase();
  let letter = name.charAt(8).toLowerCase();
  let lastPart = name.substring(9);
  return firstPart + letter + lastPart;

}
console.log(
  changeCharacters('computerSKILLS')
);

//04
function average(a,b,c){
  return (a + b + c) / 3;
}
console.log(
  average(40,50,150)
);


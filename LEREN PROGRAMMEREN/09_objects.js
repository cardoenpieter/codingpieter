//object
//data uitwisselen tussen server en browser
//values ophalen met zijn bijhorende key
//arrays hebben een vaste volgorde 
//tussen akolades 
//tussen vierkante haakjes: is een expressie
//ook bij laatste key een komma zetten


let newKey = 'keyOne';

function generateKey() {
    let randomKey = Math.floor(Math.random() * 10);

    return randomKey + '_key';
}

let name = 'Korneel';

let anObject = {
    key: 'value',
    1: 'test',
    'lange key': 'other',
    [newKey]: 'more',
    [generateKey()]: 'even more',           //function tussen vierkantie haakjes zetten
    name,
};

console.log(anObject['lange key']);
console.log(anObject[newKey]);
console.log(anObject.newKey);

// Methods

  let person = {
    firstName: 'Julie',
    lastName: 'Boone',
    age: 27,
    dog: true,
    fullName() {
        return this.firstName + ' ' + this.lastName;   //verwijzen naar object waar methode in zit
    },
    otherMethod: function () {},                        //anonieme functie is een functie zonder naam
};

console.log(person.fullName());


// Object.keys() en Object.values()             //van object naar array, te gebruiken om te 

console.log(Object.keys(person));
console.log(Object.values(anObject));

// For ... in

for (let key in anObject) {
    console.log(key, anObject[key]);        //variabele aanmaken met let en op deze manier value er uit halen
}





//oefening leeftijd en naam personen
let somePersons = [
    {
        name: 'Ben',
        age: 17,
    },
    {
        name: 'Lore',
        age: 20,
    },
    {
        name: 'Peter',
        age: 53,
    },
    {
        name: 'Koen',
        age: 16,
    },
];

//leeftijd uithalen die groter is dan vb 18 jaar
function isOverAge(persons) {
    let overAgePersons = [];

    for (let i = 0; i < persons.length; i++) {
        let person = persons[i];

        if (person.age >= 18) {
            overAgePersons.push(person);
        }
    }

    return overAgePersons
}


console.log(isOverAge(somePersons));


//array is ook een object
//object is een verzameling van key 




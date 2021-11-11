'use strict';

// let age = 30;
// let oldAge = age;
// age = 31;

// console.log(age);
// console.log(oldAge);

// const me = {
//     name : 'Jae Wook',
//     age : 25,
// }

// const friend = me;
// friend.age = 20;

// console.log('Friend : ' , friend);
// console.log('Me : ' , me);

// let surname = 'Htun';
// let oldSurname = surname;
// surname = 'Choi';

// console.log('Surname : ' , surname);
// console.log('Oldsurname : ' , oldSurname);

// const googie = {
//     name : 'Googie',
//     age : 20,
// }

// const marriedGoogie = googie;
// marriedGoogie.name = 'Choi Googie';

// console.log('Before married : ' , googie);
// console.log('After married : ' , marriedGoogie);


//Object.assign()

const jessica = {
    firstName : 'Jessica',
    lastName : 'William',
    age : 25,
    family : ['Mg Mg','Kyaw Kyaw']
}
const jessicaCopy = Object.assign({},jessica);
jessicaCopy.lastName = 'David';
jessicaCopy.family.push('Marry');
jessicaCopy.family.push('Bobby');


console.log('Jessica : ' , jessica);
console.log('JessicaCopy : ' ,jessicaCopy);

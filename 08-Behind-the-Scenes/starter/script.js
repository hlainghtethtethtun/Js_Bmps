'use strict';

// console.log(this);

// const calcAge = function(birthday){
//     console.log(2021-birthday);
//     console.log(this);
// }
// calcAge(2001);

// const calcArrow = birthday => {
//     console.log(2021-birthday);
//     console.log(this);
// }
// calcArrow(2000);

// const mgmg = {
//     year : 2001,
//     calcAge: function(){
//         console.log(2021 - this.year);
//         console.log(this);
//     },
// };
// mgmg.calcAge();

// const kyawkyaw = {
//     year : 2000,
// };
// kyawkyaw.calcAge = mgmg.calcAge;
// kyawkyaw.calcAge();

// const f = mgmg.calcAge;
// f();

// var firstName = 'Kyaw Kyaw';
// const mgmg = {
//     firstName : 'Mg Mg',
//     year : 2001,
//     calcAge: function(){
//         console.log(2021 - this.year);
//         console.log(this);

//         // const self = this;
//         // const isMillennia = function(){
//         //     console.log(self.year >= 1998 && self.year <= 2005);
//         // };
//         // isMillennia();

//         const isMillennia = () => {
//             console.log(this.year >= 1998 && this.year <= 2005);
//         };
//         isMillennia();
//     },

//     greet : () => console.log(`Hey! ${this.firstName}`),
// };
// // mgmg.greet();
// mgmg.calcAge();

const addExp = function(a,b){
    console.log(arguments);
    return a+b;
};
addExp(2 , 4);
addExp(2,4,6,10);



// console.log(addExp(2,3)); //return Value
// const addValue = addExp(1,2); //return Value
// console.log(addValue); //return Value
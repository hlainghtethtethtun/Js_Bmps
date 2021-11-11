'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };


// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order : function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
  },
}

// const nested = [2,4,[1,5]];
// const [a, ,[b,c]] = nested;
// console.log(a,b,c);

const [a=1 , b=1 , c=1] = [2,8];
console.log(a,b,c);


// console.log(restaurant.order(2,0));
// const [firstMenu,secondMenu] = restaurant.order(2,0);
// console.log(firstMenu,secondMenu);
// let [first, ,second] = restaurant.categories;
// console.log(first,second);
//ES5
// const temp = first;
// first = second;
// second = temp;
// console.log(first,second);
//ESNext
// [second,first] = [first,second];
// console.log(first,second);

//ES5
// const arr = [2,3,1];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a,b,c);
// //ESNext
// const [x,y,z] = arr ;
// console.log(x,y,z);



// let validNum = true;
// while(validNum){
//   let promptNum = prompt("Enter between 1 and 100");
//   let parseNum = parseInt(promptNum,10);
//   if(parseNum >1 && parseNum <100){
//     console.log("Number : " , parseNum);
//     validNum =false;
//   }
// }

// // const customers = [
// //   {name: 'customer1' , email: 'customer1@gmail.com' , gender: 'female'},
// //   {name: 'customer2' , email: 'customer2@gmail.com' , gender: 'male'},
// //   {name: 'customer3' , email: 'customer3@gmail.com' , gender: 'female'},
// //   {name: 'customer4' , email: 'customer4@gmail.com' , gender: 'male'},
// //   {name: 'customer5' , email: 'customer5@gmail.com' , gender: 'female'},
// // ]

// for(let i=0; i<customers.length; i++){
//   let currCustomer = customers[i];
//   if(currCustomer.gender === 'male'){
//     continue;
//   }
//   console.log('Sending email: ' , currCustomer.email);
// }
// for(let i=0; i<customers.length; i++){
//   let currCustomer = customers[i];
//   console.log('Sending email: ' , currCustomer.email);
//   if(i === 2){
//     break;
//   }
// }

// let i=0;
// while(i<customers.length){
//   let currCustomer = customers[i];
//   i++;
//   if(currCustomer.gender === 'male'){
//     continue;
//   }
//   console.log('Sending email: ' , currCustomer.email);
// }

// let i=0;
// while(i<customers.length){
//   let currCustomer = customers[i];
//   console.log('Sending email: ' , currCustomer.email);

//   if(i === 2){
//     break;
//   }
//   i++;
// }


// const array = [1,2,3];
// const twoArray = [[1,2], [3,4], [5,6]];

// for(let i=0; i<array.length; i++){
//   let currArray = array[i];
//   console.log(currArray);
// }

// for(let i=0; i<twoArray.length; i++){
//   let firstArray = twoArray[i];
//   for(let i=0; i<firstArray.length; i++){
//     let secArray = firstArray[i];
//     console.log('Second Array : ',secArray);
//   }
// }

// const customer = {name:'customer1' , email:'customer1@gmail.com' , gender:'female'};
// const name = customer.name;
// const {name , email , gender} = customer;
// console.log(name , email , gender);



// const city = ['Yangon','Mandalay','May'];
// const [cityOne, ,cityThree] = city;
// console.log(cityOne,cityThree);

//spread operator
// const city = {name:'customer1' , email:'customer1@gmail.com' , gender:'female'};
// const copyCity = Object.assign({},city);
// console.log(copyCity);

// const customer = {name:'customer1' , email:'customer1@gmail.com' , gender:'female'};
// const copyCustomer = {...customer};
// console.log(copyCustomer);

// const city = ['Mandalay', 'MoYwar', 'Shan'];
// const copyCity = [].concat(city);
// console.log(copyCity);

//Rest parameter
// const calculate =(...num) => {
//   let sum = 0;
//   for(let i=0 ; i<num.length ; i++){
//     sum += num[i];
//   }
//   return sum;
// }
// calculate(1,2,3,4,5);

//Callback function
// const fetchData = (callback) =>{
//   console.log('Fetching Data From Server');
  /* asynchronous code
  asynchronous code
  asynchronous  */
//   callback();
// }

// const showUserProfile = () =>{
//   console.log('Code to Show User Profile');
// }
// fetchData(showUserProfile);

// fetchData(showUserProfile()); Wrong *****Not include()****

//Array Filter
// const customers = [
//   {name: 'customer1' , email: 'customer1@gmail.com' , gender: 'female' , age: 20},
//   {name: 'customer2' , email: 'customer2@gmail.com' , gender: 'male' , age: 25},
//   {name: 'customer3' , email: 'customer3@gmail.com' , gender: 'female' , age: 30},
//   {name: 'customer4' , email: 'customer4@gmail.com' , gender: 'male' , age: 35},
//   {name: 'customer5' , email: 'customer5@gmail.com' , gender: 'female' , age: 40},
// ]
// const customer = (arrayElement)=> {
//   return arrayElement.gender === 'male' && arrayElement.age <30;
// }
// let answer = customers.filter(customer); //callback function (customer)


//Array Map
const customers = [
  {name: 'customer1' , email: 'customer1@gmail.com' , gender: 'female' , age: 20},
  {name: 'customer2' , email: 'customer2@gmail.com' , gender: 'male' , age: 25},
  {name: 'customer3' , email: 'customer3@gmail.com' , gender: 'female' , age: 30},
  {name: 'customer4' , email: 'customer4@gmail.com' , gender: 'male' , age: 35},
  {name: 'customer5' , email: 'customer5@gmail.com' , gender: 'female' , age: 40},
]

for(let i=0; i<customers.length; i++){
  customers[i].booking = [];
}

const customer = (element) =>{
  element.booking = [];
  return element;
}
let answer = customers.map(customer);

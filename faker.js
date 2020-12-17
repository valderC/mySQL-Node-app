
let faker = require('faker');

//faker.internet.email();
//loop which creates 10 fake emails and diplays it out to the console window
for(let i = 0; i < 10; i++){
  console.log(faker.internet.email());
  console.log(faker.date.past());
}


// creates an address with this funciton calling the libary methods from the installed package
// function fakeUser(){
// for (let i = 0; i < 500; i++){
//
//   faker.internet.email();
//   faker.date.past());
//   //will  need code to instruct input the dummy data into mysql
//   }
// }
//
// fakeUser();

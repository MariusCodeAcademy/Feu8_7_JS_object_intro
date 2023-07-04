'use strict';
console.log('obj.js file was loaded');

// objektas
// key: value
console.log('this ===', this);
const person = {
  firstName: 'James',
  town: 'London',
  age: 33,
  hasCar: true,
  avg: [5, 10, 9],
  sayHi: function () {
    // console.log('this in person ===', this);
    console.log('hello from ' + this.firstName);
  },
};
console.log('person ===', person);

// iskonsologini varda ir amziu

// gauti reisme <obejkoPav>.<savybesKEy>
// gauti reisme <obejkoPav>["<savybesKEy>"]
let userName = person['firstName'];
userName = person.firstName;
console.log('userName ===', userName);

let pAge = person.age;
console.log('pAge ===', pAge);

// savybes pridejimas i objekta

person.eyeColor = 'green';
person.age = 43;
person['age'] = 23;

person.avg.push(8);
console.log('person ===', person);

// iskviesti sayHi
person.sayHi();

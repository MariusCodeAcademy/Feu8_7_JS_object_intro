'use strict';
console.log('arrayOfObj.js file was loaded');

const user1 = {
  name: 'Bob',
  age: 24,
  town: 'Jamaika',
};
const user2 = {
  name: 'James',
  age: 33,
  town: 'London',
};
const user3 = {
  name: 'Jess',
  age: 25,
  town: 'Oslo',
};

let users = [user1, user2, user3];
users = [
  {
    name: 'Bob',
    age: 24,
    town: 'Jamaika',
  },
  {
    name: 'James',
    age: 33,
    town: 'London',
  },
  {
    name: 'Jess',
    age: 25,
    town: 'Oslo',
  },
];
console.log('users ===', users);

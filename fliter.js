//filter() is an array methods in js:
// 1. Check each element
// 2. Keep only those elements that pass a condition
// 3. Return a new array with only the filtered values
// 44. Does NOT change the original array

// SYNTAX:
//array.filter(function(element, index, array) {
//   return condition;  // true → keep element, false → remove element
//});


// Filter numbers greater than 10
var arr = [4,6,7,8,9,10,15,12,16];
var result = arr.filter(num => num> 10);
console.log(result);

// Keep only even numbers:
let nums = [3,56,7,84,58,9,7,3,2,40,1];
let even = nums.filter(n => n%2===0);
console.log(even); // filter the even nums in an array

// Filter users age > 18
let users = [
  { name: "Anamika", age: 17 },
  { name: "Rohan", age: 21 },
  { name: "Simran", age: 15 },
  { name: "Arjun", age: 25 }
];

let adults = users.filter(user => user.age > 18);

console.log(adults);

// Filter names starting with "A"

let names = ["Anamika", "Riya", "Arjun", "Simran"];

let startWithA = names.filter(name => name.startsWith("A"));

console.log(startWithA); // ["Anamika", "Arjun"]


/*
 NOTE:
filter() returns a new array
1. Only keeps elements where condition is true
2. Original array remains the same
3. Useful for searching, filtering, removing unwanted items */

//map()
//map() is an array method that:

//loops through an array

//applies a function to each element, and applies same logic to every element

// SYNTAX: array.map(function(element, index, array) {
   // return something
//});


//returns a new array (same length)

//does not change the original array
//  var arr = [3,4,5,6,7,8,9]
//  var arr1 = arr.map(function(item,index){
//     return item*item;
//  })
//  console.log(arr1)


// Multiply each number by 2

var arr= [3,4,5,6,7,8,9]
var arr1=arr.map(x=>x*2)
console.log(arr1) // [6,8,10,12,14,16,18]

// convert name to uppercase

var names = ["anamika", "aradhya","vrinda"];
var upper = names.map((n) => n.toUpperCase());
console.log(upper); // ["ANAMIKA", "ARADHYA", "VRINDA"]

// Extract specific property from objects
var users = [
  { name: "Anamika", age: 22 },
  { name: "Riya", age: 21 },
  { name: "Arjun", age: 25 }
];

var namesOnly = users.map(user => user.name);
var ageOnly = users.map(user => user.age);


console.log(namesOnly); // ["Anamika", "Riya", "Arjun"]
console.log(ageOnly);  // [22,21,25]

// Convert array of numbers to strings
 var nums = [23,54,67,89];
 var asStrings = nums.map(String); // convert it into strings
 console.log(asStrings); 

 // Add ₹10 discount to all prices

let prices = [100, 200, 300];

let discounted = prices.map(price => price - 10);

console.log(discounted); // [90, 190, 290]


var arr = [3,4,5,6,7,8,9]
var arr1 = arr.map((x) => x>5);
console.log(arr1);

// NOTE:
//map() ALWAYS returns a new array
// Length is always the same as the original -- jo orignal array ki length hogi vhi length return krega

// map() does not change the original array

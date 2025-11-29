/*some() checks whether at least one element in the array satisfies a condition.

1. Returns true if any one element matches
2. Returns false if no element matches
3. Does NOT change the original array
4. Stops as soon as it finds the first match (fast!)

SYNTAX:
array.some(function(element, index, array) {
    return condition;
});
*/
 // agr koi bhi condition satisfy ni krrha tbhi false dega otherwise ek bhi agr satisfy krrha toh true dega

var arr = [1,2,3,4,5,6,7]
var a = arr.some((item, index) =>{
    return item>6

})
console.log(a)

// Check if array has any even number
let nums = [1, 3, 5, 8];

let result = nums.some(n => n % 2 === 0);

console.log(result); // true  (because 8 is even)
 // Check if any student passed
let marks = [35, 40, 20, 50];

let passed = marks.some(m => m >= 40);

console.log(passed); // true

// Check in array of objects
let users = [
  { name: "Anamika", active: false },
  { name: "Riya", active: false },
  { name: "Arjun", active: true }
];

let hasActiveUser = users.some(u => u.active === true);

console.log(hasActiveUser); // true

 /* every() checks whether all elements in the array satisfy a given condition.

1. Returns true only if every element matches
2. Returns false if even one element fails
3. Does NOT change the original array
4. Stops immediately when it finds a failing element (fast!)

 SYNTAX:array.every(function(element, index, array) {
    return condition;
});
*/
// Check if all numbers are positive
let nums = [2, 4, 6, 8];

let result = nums.every(n => n > 0);

console.log(result); // true

// Check if all numbers are even
var numbers = [2, 4, 5, 8]; 
var results = numbers.every(n => n % 2 === 0);

console.log(results); // false (because 5 is not even)


/*find() is an array method that:

1.Searches through the array
2. Returns the first element that matches a condition
3. If nothing matches, it returns undefined
4. Does NOT change the original array

 SYNTAX: array.find(function(element, index, array) {
    return condition;
});
*/
//Find the first number greater than 10
let numbers = [3, 7, 12, 20, 5];

let result = numbers.find(num => num > 10);

console.log(result); // 12

// Find the first even number
let nums = [1, 3, 5, 8, 10];

let even = nums.find(n => n % 2 === 0);

console.log(even); // 8 is the first even number

var arr = [3,4,5,6,7,8,9]
var a = arr.find((item,index)=>{
    return item >5 // phla item h 6 to vo usko return krega

})
console.log(a)

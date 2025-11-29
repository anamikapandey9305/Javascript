// reduce():
/* reduce() is an array method used to:

1. Go through all elements
2. Combine them into one single value
3. Return that single result
4. It does NOT change the original array

SYNTAX:
array.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, initialValue);

*/
 var arr = [3,4,5,6,7,8]
 var sum = arr.reduce(function(total,item,index){
    return total *= item
})
console.log(sum)

//Find the maximum number
let numbers = [5, 9, 2, 20, 7];

let max = numbers.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
}, 0);

console.log(max); // 20

// Count how many times a value appears
let letters = ["a", "b", "a", "c", "b", "a"];

let count = letters.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});

console.log(count);
// { a: 3, b: 2, c: 1 }


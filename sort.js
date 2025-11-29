 /*sort() is an array method that:

1 Sorts elements in place (modifies original array)
2 Converts elements to strings and then sorts (default behavior)
3 You can provide your own compare function for numeric sorting

Syntax: array.sort();
array.sort((a, b) => a - b); // comparison function

NOTE: it will sort an array whoose number is  only one digit.
 

By default, sort() sorts as strings, NOT numbers.

Example:
[10, 2, 30].sort();
// ["10", "2", "30"] → WRONG for numbers
*/
 var arr = [90,14,2,27,7,503,3]
 arr.sort()

 console.log(arr)

 //Sort numbers (ascending)
 var numbers = [40, 100, 1, 5, 25];

numbers.sort((a, b) => a - b);

console.log(numbers); // [1, 5, 25, 40, 100]

// Sort numbers (descending)
let numbers = [40, 100, 1, 5, 25];

numbers.sort((a, b) => b - a);

console.log(numbers); // [100, 40, 25, 5, 1]

//Sort strings (reverse alphabet)
let fruits = ["Banana", "Apple", "Mango"];

fruits.sort().reverse();

console.log(fruits); // ["Mango", "Banana", "Apple"]



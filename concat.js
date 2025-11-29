/*concat() is used to combine (merge) arrays.

1. Returns a new array
2. Does NOT modify the original arrays
3. You can concatenate multiple arrays or values

SYNTAX:
array1.concat(array2);

array1.concat(array2, array3, ...);

*/
// Merge two arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let result = arr1.concat(arr2);

console.log(result); // [1, 2, 3, 4, 5, 6]
 // Merge three arrays
 let a = [10, 20];
let b = [30, 40];
let c = [50, 60];

let merged = a.concat(b, c);

console.log(merged); // [10, 20, 30, 40, 50, 60]

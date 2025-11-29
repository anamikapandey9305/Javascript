// splice
// splice() is used to add, remove, or replace elements in an array, at any index of array
// remove
var arr = [10, 20, 30, 40, 50];
arr.splice(1, 2,"a","b"); // will remove 2 elements of 1 and 2 index and these at same index.

console.log(arr); // [10, 40, 50]

// arr.splice(index, count(how many elements want to remove),)
var arr = [23,2,312,24,354,2,32]
arr.splice(2,0,"a","b","c") // to insert but not delete so count will be 0, so at index 2 item will be inserted but not deleted
console.log(arr)

// slice()
// slice() is used to copy a portion of an array.
// arr.slice(start,end)
// from one array it will create its sub arrays
var arr = [23,2,312,24,354,2,32]
var arr1= arr.slice(2,5) // will start from 2 index will end at 5th index and will give its sub array
console.log(arr1)
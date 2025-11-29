/*findIndex() is an array method that:

1. Searches through the array
2. Returns the index of the first element that meets a condition
3. If no element matches → returns -1
4. Does NOT change the original array

 Syntax : array.findIndex(function(element, index, array) {
    return condition;
});
*/
// Find index of first number greater than 10
var numbers = [3, 7, 12, 20, 5];

var index = numbers.findIndex(num => num > 10);

console.log(index); // 2  (because 12 is at index 2)



/*flat() is an array method used to:

1. Remove nested arrays
2. Convert them into a single-level array
3. Return a new array
4. Does NOT change the original array
 syntax:
 array.flat(depth);
depth = how many levels you want to flatten

Default depth = 1 */
// Basic flatten (1 level)
let arr = [1, 2, [3, 4]];

let result = arr.flat();

console.log(result); 
// [1, 2, 3, 4]
 // Flatten 2 levels
 let array = [1, [2, [3, 4]]];

let results = array.flat(2);

console.log(results);
// [1, 2, 3, 4]

//Deep nesting → use Infinity
 let arrays = [1, [2, [3, [4, [5]]]]];

let resultss = arr.flat(Infinity);

console.log(resultss);
// [1, 2, 3, 4, 5]


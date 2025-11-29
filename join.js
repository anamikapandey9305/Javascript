/*join() converts all elements of an array into a single string, with a separator between them.

1. Returns a string
2. Does NOT change the original array
3. Default separator = comma (,)
SYNTAX: 
array.join(separator);
separator is optional (like " ", "-", "|", etc
*/

// Convert array into string
let arr = ["A", "n", "a", "m", "i", "k", "a"];

let result = arr.join("");

console.log(result); // "Anamika"
 // Join with spaces
 let words = ["Hello", "I", "am", "Anamika"];

let sentence = words.join(" ");

console.log(sentence); // "Hello I am Anamika"
 // join with hyphens
let nums = [2025, 11, 16];

let date = nums.join("-");

console.log(date); // "2025-11-16"

// length
// to know the length of array
var arr = [23,5,67,8,3,50,56,78,]
console.log(arr.length) // gives length of the array

// indexOf()
// to know the index of array
var arr = [23,45,67,2,34,55,2,67]
console.log(arr.indexOf(2)) // agr do jgh hai 2 , so it will return first occurence of 2

// include()
// to know wheather the item is in the array or not
var arr = [23,"ram",null,"sita","radha",89]
console.log(arr.includes("ram")) // if yes returns true otherwise false


// push()
// to insert particular element
var arr = [23,56,78,90,52,2,37]
arr.push("A",34,78)
console.log(arr)

var arr = [4,5,6,7].push(8,9,10) // we have stored a method in a varriable(arr), which simply returns its updated length, which is 7 
console.log(arr)

// pop()
// remove elements from array from top
var arr = [23,2,312,67,8,90,765,9] // will insert out 9 which is last and on the top of stack
console.log(arr.pop()) // jo remove kia h vhi dega
console.log(arr) // after removing will give array


// unshift()
var arr = [2,45,6,7,89,5,6]
arr.unshift(6785 ) // it will insert element in front  or in beggining of array
console.log(arr)

// shift()
// it will remove the first item from an array
var arr = [2,45,6,7,89,5,6]
console.log(arr.shift()) // 2
console.log(arr)







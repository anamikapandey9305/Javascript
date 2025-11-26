// Anything declared outside of functions or blocks.

// Accessible everywhere in the program.
let x = 10;  // global variable

function show() {
  console.log(x); // can access global variable
}

show();

console.log(x); // can access here also

// x is global
//It is accessible inside the function and outside the function
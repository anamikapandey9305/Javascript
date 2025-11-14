// Functions can be defined inside other functions.
function outer() {
  function inner() {
    console.log("Inner function");
  }
  console.log("Outer function");
  inner();
}

outer();


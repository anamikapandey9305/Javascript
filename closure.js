// CLOSURES: A function remembers the values from the place where it was created.
// Even if that place is finished.

function outer() {
  let x = 10;

  function inner() {
    console.log(x);
  }

  return inner;
}

let fun = outer();
fun(); // prints 10


// why did it print 10??

// outer() ended

//But the inner function still remembers x
//  That memory = closure
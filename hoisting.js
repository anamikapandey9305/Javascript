console.log(a); // memeory m phle hi a undefined h, toh error ni aega
var a =10;
greet() // memory m phle hi function ka sara code hai , agr greet naam k variable m koi function h to eecute kro so it will execute

function greet(){
    console.log("Good Morning")
}
// Hoisting means JavaScript moves declarations to the top of their scope before code execution.
// Because of this, you can use variables or functions before they are declared (but with some rules!).
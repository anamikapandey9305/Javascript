function hello(){
    console.log("Hello, welcome!")
}
function greet(a,b){
    console.log(a);
    b()
}
greet(3,function(){
    console.log("callback") // jis function ko hum pass kr rhe hote h vo callback function hota hai

}) // higher order function
greet("Good Morning",hello)

//  the function which is been passed as an argument in another function , is called callback function


// ja kisi function ko tum as a argument pass kroge, usi agrument ko call back function khte h
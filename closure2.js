function counter(){
    var count = 0; // yha p jo internal function h vo iss scope ko remember krta h, even after its exected its code
    
    return function (){
        count ++;
        console.log(count)

    }
}
 var c = counter()
c()
c()
c()


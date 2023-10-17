// immediately invoked function expression(iife)

(function chai(){
    console.log(`DB connected`)
})();

(function aurcode(){
    //named iife
    console.log(`DB connected`)
})();

((name) => {
    console.log(`DB connected ${name}`)
})("yash");
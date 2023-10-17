const usermail="yash.gmail"
if (usermail){
    console.log("executes")
}else{
    console.log("not executes")
}
/*
falsy values
false, 0, -0, BigInt0n, "", null, undefiened, NaN

truthy values
"0", 'false', " ", [], {}, function(){}, 
*/

//nullish coalescing operator(??): null undefiened

val1= 5??10
console.log(val1)
val2=null??10
console.log(val2)
val3=undefined??10
console.log(val3)
val4=undefined??10??15
console.log(val4)

//terniary operator

// condition ? true:false

const iceTeaprice=100
iceTeaprice>=80? console.log("less than 80"):console.log("more than 80")

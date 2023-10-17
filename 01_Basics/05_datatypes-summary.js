// primitive (call by value)
// 7 types: string , number, bigint, boolean, null, undefiened, symbol

const score = 100
const scorevalue = 100.5
const isloggedin = true
const outsidetemp = null
let userEmail;
const id = Symbol('123')
const anotherID= Symbol('123')
console.log(id===anotherID)
const bignum=1234052345678n

// reference (non-primitive)
// 2 types: array, Objects, functions

const heros= ["shaktimaan", "naagRaj", "Doga"]

let myobj={
    name: "yash",
    age:19,
}

const myFunction = function () {
    console.log("hello world")
}
console.log(typeof score)
console.log(typeof scorevalue)
console.log(typeof isloggedin)
console.log(typeof outsidetemp)
console.log(typeof userEmail)
console.log(typeof id)
console.log(typeof bignum)
console.log(typeof heros)
console.log(typeof myobj)
console.log(typeof myFunction)


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack(primitive) , heap(non-primitive)

let myYoutubename="namasteyCollege"
let anotherName=myYoutubename
anotherName="yash gupta"
console.log(myYoutubename)
console.log(anotherName)

let user= {
    email: "user@gmail.com",
    upi :"user@ybl"
}

let usertwo= user

usertwo.email="yash@gmail.com"

console.log(user.email)
console.log(usertwo.email)
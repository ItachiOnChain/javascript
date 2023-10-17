// singleton

// object literals

const mysym = Symbol("key1")
const JsUser={
    name:"Yash",
    "full name":"yash gupta",
    [mysym]:"key1",                // mysym:"key" work as string, will not work as symbol 
    age: 18,
    location:"delhi",
    email:"guptayash1501@gmail.com",
    isloggedin:false,
    lastlogindays:["mon","sat"]
}

console.log(JsUser.name)
console.log(JsUser["email"])
console.log(JsUser["full name"])  // dot method will not work
console.log(JsUser[mysym])
console.log(typeof JsUser[mysym])

JsUser.email="yashgupta1501@gmail.com"
//Object.freeze(JsUser)
JsUser.email="yashgupta1501@outlook.com"
console.log(JsUser)

JsUser.greeting=function(){
    console.log("hello js user")
}

JsUser.greeting2=function(){
    console.log(`hello js user ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greeting2())

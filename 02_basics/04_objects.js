//const tinderuser= new Object()   //singleton obj
const tinderuser={}                //non singleton obj
tinderuser.id="123abc"
tinderuser.name="yash"
tinderuser.isloggedin=false
//console.log(tinderuser)

const regularUser={
    email:"some@gmail.com",
    fullName:{
        userFullName:{
            firstName: "yash",
            lastname:"gupta"
        }
    }
}
//console.log(regularUser.fullName.userFullName.firstName)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}
//const obj3={obj1,obj2}
//const obj3= Object.assign(obj1,obj2)
//const obj3= Object.assign({},obj1,obj2,obj4)
const obj3={...obj1,...obj2,...obj4}    //spread operator
//console.log(obj3)

const users=[
    {
        id:1,
        email: "guptayash1501@gmail.com"
    },
    {
        id:1,
        email: "guptayash1501@gmail.com"
    },
    {
        id:1,
        email: "guptayash1501@gmail.com"
    },
    {
        id:1,
        email: "guptayash1501@gmail.com"
    }
]

users[1].email

console.log(tinderuser)
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))
console.log(tinderuser.hasOwnProperty('isloggedin'))

const course={
    name:"js in hindi",
    price:"0",
    courseinstructor:"yash"
}

//course.courseinstructor
//const {courseinstructor}=course
const {courseinstructor:instructor}=course
console.log(instructor)

// {
//     "name":"yash",
//     "course":"js",
//     "fee":"free"              //json
// }

/*
api can be of json, array format
randomuserme is a famous api
json formatter is a tool to understand such api
*/
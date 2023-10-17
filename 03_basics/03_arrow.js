const user={
    username:"yash",
    priceofbatch:999,

    welcomeMessege: function(){
        console.log(`${this.username} welcome to website`)/
        console.log(this)
    }
}

// user.welcomeMessege()
// user.username="aditya"
// user.welcomeMessege()

//console.log(this)

// function chai(){
//     let username="guptaji"
//     console.log(this.username)          // not work in function
// }

// chai()

// const chai = function(){
//     let username="yash"
//     console.log(this.username)
// }

// chai()

const chai = () => {
    let username="yash"
    console.log(this.username)
}

//chai()

// const addtwo= (num1,num2)=>{
//     return num1+num2
// }

// const addtwo= (num1,num2)=> num1+num2 //implicit return
//const addtwo= (num1,num2)=> (num1+num2)
const addtwo= (num1,num2)=> ({username:"yash"})
console.log(addtwo(2,3))

// const myarr=[1,2,3,4,5,6]

// myarr.forEach()
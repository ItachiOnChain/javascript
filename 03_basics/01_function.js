function saymyname(){
    console.log("y")
    console.log("a")
    console.log("s")
    console.log("h")
}

//saymyname()

// function add(num1,num2){
//     console.log(num1+num2)
// }

function add(num1,num2){ //parameter
    // let sum=num1+num2
    // return sum
    return num1+num2
    console.log(sum) // never execute after return
}

const result= add(2,3) //arguement
//console.log("result: ", result)

function loginmessege(username="yash"){
    if(!username){
        console.log("please enter username")
        return
    }
    return `${username} just logged in`
}

//console.log(loginmessege("yash"))
//console.log(loginmessege())

function calculate(val1,val2,...num){
    return num
}
//console.log(calculate(2,3,4))

const user={
    name:"yash",
    sirname:"gupta"
}

function handleobj(anyobj){
    console.log(`${anyobj.name} is the name and ${anyobj.sirname} is sirname`)
}
//handleobj(user)
handleobj({
    name:"gupta",
    sirname:"yash"
})

const myarr=[1,2,3,4,5,6,7]

function secondval(getarray){
    return getarray[1]
}

//console.log(secondval(myarr))
console.log(secondval([1,2,3,4,5,6]))


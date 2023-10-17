let a=300
if(true){
    let a=10
    const b=20
    var c=30
}

// console.log(a)           //global scope
// //console.log(b)         //block scope
// console.log(c)

// nested scope

function one(){
    const username="yash"

    function two(){
        const website="youtube"
        console.log(username)
    }

    //console.log(website)
    two()
}
//one()

//+++++++++++++++++++ interesting ++++++++++++++++++++++
console.log(addone(5))
function addone(num){
    return num+1
}

//addtwo(5)
const addtwo=function(num){
    return num+2
}

addtwo(5)
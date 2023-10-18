const coding=["java", "js", "python", "cpp", "c"]

const values = coding.forEach( (item)=>{
    //console.log(item)
    return item
} )

// console.log(values)

const myNUM=[1,2,3,4,5,6,7,8,9,10]

// const newnum = myNUM.filter((num)=>num>4)
const newnum = myNUM.filter((num)=>{
    return num>4})
//console.log(newnum)

const newNUM=[]

myNUM.forEach((num)=>{
    if (num > 4){
        newNUM.push(num)
    }
})

//console.log(newNUM)
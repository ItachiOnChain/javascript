const myArr = [1,2,3,4,5,6,7,true,"Yash"]
const myArr2= new Array(1,2,3,4,5,6,7,8)

console.log(myArr[0])

//Array methods       
myArr.push(8)     
myArr.push(9)      // add element at last index
myArr.pop()        // del element at last index

myArr.unshift(9)      // add element at 0 index
myArr.shift()

console.log(myArr.includes(9))
console.log(myArr.indexOf(4))

const newArr= myArr.join()
console.log(newArr)
console.log(typeof newArr)
console.log(myArr)

//slice & splice

console.log("A",myArr)
const myn1= myArr.slice(1,3)
console.log(myn1)
console.log("B",myArr)
const myn2= myArr.splice(1,3)
console.log(myn2)
console.log("C",myArr)
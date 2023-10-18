const myNUM=[1,2,3,4,5,6,7,8,9,10]

const newNUM=myNUM.map((num)=> num+10)
//console.log(newNUM)

const NUM= myNUM
                .map((num)=>num*10)
                .map((num)=>num+1)
                .filter((num)=>num>=40)

console.log(NUM)
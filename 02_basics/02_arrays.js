const marvel=["ironman","spiderman","thor","hulk"]
const dc=["wonder women","sperman","flash","batman"]

marvel.push(dc)
console.log(marvel)
console.log(marvel[4][1])

const all= marvel.concat(dc)
console.log(all)

const allhero= [...dc,...marvel]
console.log(allhero)

const anotherARR=[1,2,3,4,5,[1,2,3,[2,3,4,5,4]]]
const realARR= anotherARR.flat(Infinity)
console.log(realARR)

console.log(Array.isArray("yash gupta"))
console.log(Array.from("yash gupta"))

console.log(Array.from({name:"yash gupta"})) //interesting

let score1 =100
let score2 =200
let score3 =300
console.log(Array.of(score1,score2,score3))
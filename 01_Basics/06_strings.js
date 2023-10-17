const name="yash"
const repocount=1
//console.log(name+repocount)

console.log(`hello my name is ${name} and my repo count is ${repocount}`)

const gameName = new String("yash-gupta-1501")
console.log(gameName)
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf("y"))

const newstr= gameName.substring(0,3)
console.log(newstr)
const anotherstr= gameName.slice(-4,2)
console.log(anotherstr)

const spacestr= "                 yash                        "
console.log(spacestr)
console.log(spacestr.trim())

const url = "https://yash.com/yash%20gupta"
console.log(url.replace('%20','-'))
console.log(url.includes("yash"))

console.log(gameName.split('-'))
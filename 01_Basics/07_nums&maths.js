const score= 500
console.log(score)

const balance= new Number(1000)
console.log(balance)

console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNum = 23.457895
console.log(otherNum.toPrecision(4))

const hundreds=100000000000
console.log(hundreds.toLocaleString())
console.log(hundreds.toLocaleString('en-IN'))

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.MAX_SAFE_INTEGER)

/*+++++++++++++++++++++++++++++++++++++++MATHS++++++++++++++++++++++++++++++++++++++++++++++++ */

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.5))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.1))
console.log(Math.max(2,3,6,5,6,3,9))
console.log(Math.min(1,1,2,3,4,5,6,7,8,9))
console.log(Math.random())
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)

max=20
min=10
console.log(Math.floor(Math.random()*(max-min+1))+min) //important

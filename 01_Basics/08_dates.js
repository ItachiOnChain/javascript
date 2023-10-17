let mydate= new Date()
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toISOString())
console.log(mydate.toJSON())
console.log(mydate.toLocaleDateString())
console.log(mydate.toLocaleString())
console.log(mydate.toLocaleTimeString())
console.log(typeof mydate)

let mycreatedDate1= new Date(2023,0,15)
console.log(mycreatedDate1.toString())

let mycreatedDate2= new Date(2023,0,15,5,3)
console.log(mycreatedDate2.toString())

let mycreatedDate3= new Date("2023-01-15")
console.log(mycreatedDate3.toString())

let mycreatedDate4= new Date("11-1-2023")
console.log(mycreatedDate4.toString())

let mytimestamp= Date.now()
console.log(mytimestamp)
console.log(mycreatedDate1.getTime())
console.log(Math.floor(Date.now()/1000))

let newdate= new Date()
console.log(newdate.getDate())
console.log(newdate.getMonth())
console.log(newdate.getDay())
console.log(newdate.getFullYear())

console.log(newdate.toLocaleString('default',{
    weekday:"long",
}))
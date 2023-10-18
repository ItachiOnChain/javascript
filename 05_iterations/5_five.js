const coding=["java", "js", "python", "cpp", "c"]

coding.forEach( function (val){
    //console.log(val)
} )

coding.forEach( (val)=>{
    //console.log(val)
} )

function printme(item){
    console.log(item)
}

//coding.forEach(printme)

coding.forEach((item,index,arr)=>{
    //console.log(item,index,arr)
})

const mycode=[
    {
        langName:"java",
        file:"java"
    },
    {
        langName:"javascript",
        file:"js"
    },
    {
        langName:"python",
        file:"py"
    }
]

mycode.forEach((item)=>{
    console.log(item.langName)
})


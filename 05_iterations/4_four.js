//for in give keys only in object and arrays both

const myOBJ={
    js:"javascript",
    cpp:"C++",
    rb:"ruby"
}

for (const key in myOBJ) {
    //console.log(key)
    //console.log(`${key} shortcut for ${myOBJ[key]}`)
}


const map = new Map();

map.set('IN',"india")
map.set('us',"united states")

// iteration not works in map
// for (const key in map) {
//     console.log(key);
// }


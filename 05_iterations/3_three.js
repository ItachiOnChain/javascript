//for of
const arr=[1,2,3,4,5];

for (const num of arr) {
    //console.log(num);
}

const greetings="hello world"

for (const greet of greetings) {
    //console.log(`each char is ${greet}`);
}

//maps

const map = new Map();

map.set('IN',"india")
map.set('us',"united states")

console.log(map)

// for (const key of map) {
//     console.log(key);
// }

for (const [key,value] of map) {
    //console.log(key,":-",value);
}

const myOBJ={
    'game1':'NFS',
    'game2':'spiderman'
}

//object are not iterable

for (const game of myOBJ) {
    //console.log(game)
    //console.log(key,":-",value);
}

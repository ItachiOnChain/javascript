//for

for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
}

//break and continue

for (let index = 1; index <=20 ; index++) {
    if (index==5){
        console.log(`detected 5`);
        break;
    }
    console.log(`value of index is ${index}`);
}


for (let index = 1; index <=20 ; index++) {
    if (index==5){
        console.log(`detected 5`);
        continue;
    }
    console.log(`value of index is ${index}`);
}


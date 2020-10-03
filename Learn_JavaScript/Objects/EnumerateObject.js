//enumerating properties of an object
//get all the properties of an object
//check a property is available in an object or not

const circle = {
    radius : 1,
    draw(){
        console.log('draw circle');
    }
}

//1. for in loop
for (const key in circle) {
    if (circle.hasOwnProperty(key)) {
        const element = circle[key];
        console.log(key, element);
    }
}

//2. for of loop
for (const iterator of Object.keys(circle)) {
    console.log(iterator, circle[iterator]);
}

//3. in operator
if('draw' in circle){
    console.log('Available');
}else{
    console.log('Not available');
}

if('price' in circle){
    console.log('Available');
}else{
    console.log('Not available');
}

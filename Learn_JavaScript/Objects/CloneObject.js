//create an object
const circle = {
    radius : 1,
    draw(){
        console.log('draw circle');
    }
}
console.log(circle);

//clone object 
//1. using for in loop
const obj1 = {};
console.log(obj1);

for (const key in circle) {
    obj1[key] = circle[key]
}
console.log(obj1);

//2. Object.assign method
const obj2 = Object.assign({}, circle)  //in empty object
console.log(obj2);

const obj3 = Object.assign({color : 'red'}, circle) //in non empty object
console.log(obj3);

//3. spread... operator
const obj4 = {...circle}
console.log(obj4);

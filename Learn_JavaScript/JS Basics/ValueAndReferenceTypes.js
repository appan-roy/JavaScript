//value types --> number, string, boolean etc.
//reference types --> object, function, array etc.

//value type example
let x = 10;
let y = x;
x = 20;

console.log(x);     //20 as the value of x is changed
console.log(y);     //10 as the reference is different for x and y

//reference type example
let p = {value : 10};
let q = p;
p.value = 20;

console.log(p.value);   //20 as the value of p is changed
console.log(q.value);   //20 as the reference is same for p and q

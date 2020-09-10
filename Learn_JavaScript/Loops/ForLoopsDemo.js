//for loop
for (let i=0; i<10; i++){
    console.log("The "+i+"-th single digit is : "+i)
}

//for in loop
let fruits = ["Apple", "Banana", "Cherry"]

for (x in fruits) {
    console.log(fruits[x])
}

//for of loop
for (x of fruits) {
    console.log(x)
}

//for each loop
fruits.forEach(x => {
    console.log(x)
});

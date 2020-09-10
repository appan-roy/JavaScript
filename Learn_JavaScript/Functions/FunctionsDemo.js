//create a function and return the result and print from the calling function
function add(a, b){
    result = a + b
    return result
}

//create a function with no return type, print from the function itself
function subtract(a, b){
    result = a - b
    console.log("The subtraction result is : "+result)
}

//call addition
add(10, 15)
console.log("The addition result is : "+result)

//call subtraction
subtract(20, 14)

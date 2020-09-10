/* WAP to find the factorial of a no. using recursion */

factorial = function(n){
    if(n == 0){
        return 1
    }else{
        return n * factorial(n-1)
    }
}

//driver code
num = 7

console.log("The factorial of "+num+" is "+factorial(num))

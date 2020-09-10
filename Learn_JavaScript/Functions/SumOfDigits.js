/* WAP to calculate the sum of digits of a 5-digit no. without using recursion */

sum = function(x){
    p = 0
    while(x > 0){
        y = x % 10
        p+=y
        x = Number.parseInt(x / 10)
    }
    return p
}

//driver code
n = 87306

console.log("The sum of the digits of the number "+n+" is : "+sum(n))

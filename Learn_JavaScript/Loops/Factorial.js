/* WAP to find the factorial of a no. using while loop. */

num = 7

fact = 1, temp = num

while(num > 1){
    fact *= num
    num--
}

console.log("The factorial of the number "+temp+" is : "+fact)

/* WAP to check whether a no. is Armstrong or not. (e.g. 153 is an Armstrong no. because 1^3+5^3+3^3=153). 
More example:- 370,371,407. */

num = 407

sum = 0, temp = num

while(num > 0){
    rem = num % 10
    sum += Math.pow(rem, 3)
    num = Number.parseInt(num / 10)
}

if(temp == sum){
    console.log("The number "+temp+" is an armstrong number")
}else{
    console.log("The number "+temp+" is not an armstrong number")
}

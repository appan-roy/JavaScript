/*
WAP to accept a no. & check:
(a) whether the no. is divisible by 2 & 5
(b) whether the no. is divisible by 2 but not by 5
(c) whether the no. is divisible by 5 but not by 2
*/

n = 83

if((n % 2 == 0) && (n % 5 == 0)){
    console.log("The number is divisible by both 2 & 5")
}else if((n % 2 == 0) && (n % 5 != 0)){
    console.log("The number is divisible by 2 but not by 5")
}else if((n % 2 != 0) && (n % 5 == 0)){
    console.log("The number is divisible by 5 but not by 2")
}else{
    console.log("The number is neither divisible by 2 nor by 5")
}

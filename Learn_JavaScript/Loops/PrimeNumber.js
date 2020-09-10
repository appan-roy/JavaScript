/* WAP to check whether a no. is prime or not. */

num = 13

flag = 0

if(num < 1){
    console.log("Sorry !! You have entered a wrong input. Please try again.")
}else if(num == 1){
    console.log("The number "+num+" is not a prime number")
}else if(num == 2){
    console.log("The number "+num+" is a prime number")
}else{
    for(i=2; i<num; i++){
        if(num % i == 0){
            flag = 1
            break
        }
    }
    if(flag == 0){
        console.log("The number "+num+" is a prime number")
    }else{
        console.log("The number "+num+" is not a prime number")
    }
}

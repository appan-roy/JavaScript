/* 
WAP to accept a no. & check whether the no. is perfect or not. e.g. Factors of 6=1,2,3 & also 6=1+2+3.
So 6 is a perfect no. 
*/

num = 6, sum = 0

for(i=0; i<num; i++){
    if(num % i == 0){
        sum += i
    }
}

if(sum == num){
    console.log("The number "+num+" is a perfect number")
}else{
    console.log("The number "+num+" is not a perfect number")
}

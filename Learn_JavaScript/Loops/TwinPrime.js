/* WAP to accept two no.s and check whether they are twin prime no.s or not. 
(Twin prime no.s are the prime no.s whose difference is 2,e.g. (11,13),(17,19) etc) */

m = 17, n = 19

flag1 = 0, flag2 = 0

if((m <= 1) || (n <= 1)){
    console.log("Sorry !! You have entered a wrong input. Please try again.")
}else{
    for(i=2; i<m; i++){
        if(m % i == 0){
            flag1 = 1
        }
    }
    for(j=2; j<n; j++){
        if(n % j == 0){
            flag2 = 1
        }
    }
}

if((flag1 == 0) && (flag2 == 0)){
    console.log("Both the numbers are prime")
    if(Math.abs(m-n) == 2){
        console.log("The numbers are twin prime")
    }else{
        console.log("The numbers are not twin prime")
    }
}else{
    console.log("Either of the numbers or both are not prime")
}

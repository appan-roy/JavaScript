/*
WAP to check whether two no.s are co-prime or not. 
In number theory, two integers a and b are said to be relatively prime, mutually prime, 
or coprime (also written co-prime) if the only positive integer (factor) that divides both of them is 1.
*/

m = 7, n = 12

flag = 0

max = (m > n) ? m : n

for(i=2; i<max; i++){
    if((m % i == 0) && (n % i == 0)){
        flag = 1
    }
}

if(flag == 0){
    console.log("The numbers are co prime")
}else{
    console.log("The numbers are not co prime")
}

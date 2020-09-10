/* WAP to print the n-th term of the following series------
1,12,123,1234,……… */

n = 8

t = 0

for(i=1; i<=n; i++){
    t = t * 10 + i
}

console.log("The "+n+"-th term of the series is : "+t)

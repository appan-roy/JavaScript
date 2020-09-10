/* WAP to print the n-th term of the following series------
2,5,10,17,…… */

n = 5

t = 0

for(i=1; i<=n; i++){
    t = Math.pow(i, 2) + 1
}

console.log("The "+n+"-th term of the series is : "+t)

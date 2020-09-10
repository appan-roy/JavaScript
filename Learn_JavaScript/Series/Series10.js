/* WAP to find the sum of the given series---------
S = 1 + x + x^2/2! + x^3/3! + …… + x^n/n! */

factorial = function(n){
    if(n == 0){
        return 1
    }else{
        return n * factorial(n-1)
    }
}

//driver code
n = 5, x = 2

sum = 1, p = 1

console.log("The series upto "+n+"-th term is : ")
process.stdout.write("(1), ")
for(i=1; i<n; i++){
    process.stdout.write("("+x+"^"+i+"/"+i+"!), ")
    sum += Math.pow(x, i)/factorial(i)
}

console.log()
console.log("The sum of the series upto "+n+"-th term is : "+sum)

/* WAP to find the sum of the given series---------
S = 1 + 3 + 5 + ……. + (2n-1) */

n = 10

sum = 0

console.log("The series upto "+n+"-th term is : ")
for(i=1; i<=(2*n-1); i+=2){
    process.stdout.write(i+"\t")
    sum += i
}

console.log()
console.log("The sum of the series upto "+n+"-th term is : "+sum)

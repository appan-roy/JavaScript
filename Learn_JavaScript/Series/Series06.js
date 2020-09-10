/* WAP to find the sum of the given series---------
S = (1*2) + (2*3) + (3*4) + ………upto n terms */

n = 5

sum = 0

console.log("The series upto "+n+"-th term is : ")
for(i=1; i<=n; i++){
    process.stdout.write("(")
    process.stdout.write(i+"*"+(i+1))
    sum += (i*(i+1))
    process.stdout.write("), ")
}

console.log()
console.log("The sum of the series upto "+n+"-th term is : "+sum)

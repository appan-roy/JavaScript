/* WAP to find the sum of the given series---------
S = 1 + 2/3 + 3/6 + 4/10 + 5/15 + …… + upto n terms */

n = 5

sum = 0, f = 0

console.log("The series upto "+n+"-th term is : ")
for(i=1; i<=n; i++){
    process.stdout.write("("+i)
    f += i
    process.stdout.write("/"+f+"), ")
    sum += i/f
}

console.log()
console.log("The sum of the series upto "+n+"-th term is : "+sum)

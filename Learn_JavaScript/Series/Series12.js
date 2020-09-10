/* WAP to find the sum of the given series---------
S = 1^10 + 2^9 + 3^8 + 4^7 + ……… + 10^1 */

n = 10

sum = 0

console.log("The series upto "+n+"-th term is : ")
for(i=1; i<=n; i++){
    process.stdout.write("("+i+"^"+(11-i)+"), ")
    sum += Math.pow(i, (11-i))
}

console.log()
console.log("The sum of the series upto "+n+"-th term is : "+sum)

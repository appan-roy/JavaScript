/* WAP to find the sum of the given series---------
S = (1+2)/(2*3) + (2+3)/(3*4) + (3+4)/(4*5) + ……upto n terms */

n = 5

sum = 0

console.log("The series upto "+n+"-th term is : ")
for(i=1; i<=n; i++){
    process.stdout.write("("+i+"+"+(i+1)+")/("+(i+1)+"*"+(i+2)+"), ")
    sum += (i+(i+1))/((i+1)*(i+2))
}

console.log()
console.log("The sum of the series upto "+n+"-th term is : "+sum)

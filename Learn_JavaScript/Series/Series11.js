/* WAP to find the sum of the given series---------
S = a - a^3/5  + a^5/9 - a^7/13 + ……upto n terms */

n = 5, a = 2

sum = 0

console.log("The series upto "+n+"-th term is : ")
for(i=1; i<=n; i++){
    process.stdout.write("("+a+"^"+(2*i-1)+"/"+(4*i-3)+"), ")
    if(i % 2 == 0){
        sum -= Math.pow(a, (2*i-1))/(4*i-3)
    }else{
        sum += Math.pow(a, (2*i-1))/(4*i-3)
    }
}

console.log()
console.log("The sum of the series upto "+n+"-th term is : "+sum)

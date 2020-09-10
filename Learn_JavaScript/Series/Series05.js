/* WAP to find the sum of the given series---------
S = (1) + (1+2) + (1+2+3) + ……upto n terms */

n = 5

sum = 0

console.log("The series upto "+n+"-th term is : ")
for(i=1; i<=n; i++){
    process.stdout.write("(")
    for(j=1; j<=i; j++){
        if(j != i){
            process.stdout.write(j+"+")
        }else{
            process.stdout.write(j+"")
        }
        sum += j
    }
    process.stdout.write("), ")
}

console.log()
console.log("The sum of the series upto "+n+"-th term is : "+sum)

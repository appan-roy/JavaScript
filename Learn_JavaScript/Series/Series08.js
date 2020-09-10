/* WAP to find the sum of the given series---------
S = 1 - 1/2! + 1/3! - 1/4! + ……upto n terms */

n = 5

sum = 0, f = 1

console.log("The series upto "+n+"-th term is : ")
for(i=1; i<=n; i++){
    process.stdout.write("(1/"+i+"!), ")
    f *= i
    if(i % 2 == 0){
        sum -= 1/f
    }else{
        sum += 1/f
    }
}

console.log()
console.log("The sum of the series upto "+n+"-th term is : "+sum)

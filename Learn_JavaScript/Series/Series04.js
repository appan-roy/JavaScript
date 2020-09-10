/* WAP to find the sum of the given series---------
S = 2 - 4 + 6 - 8 +…….upto n terms */

n = 10

sum = 0, j = 0, k = 0

console.log("The series upto "+n+"-th term is : ")
for(i=1; i<=n; i++){
    if(i % 2 == 0){
        j = i * (-2)
        sum += j
        process.stdout.write(j+"\t")
    }else{
        k = i * 2
        sum += k
        process.stdout.write(k+"\t")
    }
}

console.log()
console.log("The sum of the series upto "+n+"-th term is : "+sum)

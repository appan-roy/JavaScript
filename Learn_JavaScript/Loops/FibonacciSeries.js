/* WAP to print the Fibonacci series upto n-th term. */

terms = 10, t1 = 1, t2 = 0, sum = 0

console.log("The Fibonacci series upto "+terms+" terms is : ")
for(i=0; i<terms; i++){
    process.stdout.write(sum+"\t")
    sum = t1 + t2
    t1 = t2
    t2 = sum
}

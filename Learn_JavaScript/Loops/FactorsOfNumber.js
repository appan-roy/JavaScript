/* WAP to accept a no. & find all the factors of that no. e.g. 15=1,3,5,15. */

num = 105

console.log("The factors of the number "+num+" are : ")
for(i=1; i<=num; i++){
    if(num % i == 0){
        process.stdout.write(i+"\t")
    }
}

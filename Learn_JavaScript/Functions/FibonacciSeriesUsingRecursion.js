/* WAP to display the Fibonacci series using recursion */

fibonacci = function(n){
    if(n == 0){
        return 0
    }else if(n == 1){
        return 1
    }else{
        return (fibonacci(n-1) + fibonacci(n-2))
    }
}

//driver code
terms = 10

process.stdout.write("The first "+terms+" terms of Fibonacci series are : ")

for(i=0; i<terms; i++){
    process.stdout.write(fibonacci(i)+"\t")
}

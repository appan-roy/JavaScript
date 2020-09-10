/* WAP to find the sum of digits of any no. */

num = 96471, sum = 0

while(num > 0){
    rem = num % 10
    sum += rem
    num = Number.parseInt(num / 10)
}

console.log("The sum of digits of the number is "+sum)

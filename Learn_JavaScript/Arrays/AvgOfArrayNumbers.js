/* WAP to calculate the average of a series of no.s using array */

arr = [13, 37, 21, 45, 9]
sum = 0

for(i = 0; i < arr.length; i++){
    sum += arr[i]
}

avg = sum / arr.length

console.log("The average of the numbers is : "+avg)

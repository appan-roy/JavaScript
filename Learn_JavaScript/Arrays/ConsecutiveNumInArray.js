/* 
WAP to create an array with 10 no.s & find how many sets of consecutive no.s are present in 
consecutive pocket. 
*/

arr = [13, 37, 21, 45, 9, 10, 77, 90, 91, 100]

c = 0

for(i=0; i<arr.length; i++){
    if((arr[i] + 1) == arr[i+1]){
        c++
    }
}

console.log("The total number of consecutive sets are : "+c)

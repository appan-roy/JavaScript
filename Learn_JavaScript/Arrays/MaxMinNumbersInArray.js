/* WAP to print the maximum & minimum no. & also the sum of the all no.s of an array without sorting */

arr = [13, 37, 21, 45, 9]

max = arr[0], min = arr[0]

for(i=0; i<arr.length; i++){
    if(arr[i] > max){
        max = arr[i]
    }
    if(arr[i] < min){
        min = arr[i]
    }
}

console.log("Max number : "+max+", Min number : "+min)

/* WAP to sort an array using Bubble Sort technique. */

arr = [73, 9, 21, 35, 17, 58, 66, 90, 41, 83]

for(i=0; i<arr.length; i++){
    for(j=i+1; j<arr.length; j++){
        if(arr[i] > arr[j]){
            temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
}

console.log("The sorted array is : ")
for(i=0; i<arr.length; i++){
    process.stdout.write(arr[i]+"\t")
}

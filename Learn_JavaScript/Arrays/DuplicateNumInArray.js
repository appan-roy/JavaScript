/* WAP to create an array with 10 no.s. Some no.s are duplicate. Print the duplicate no.s once only. */

arr = [13, 9, 21, 45, 9, 10, 21, 90, 91, 13]

for(i=0; i<arr.length; i++){
    flag = 0
    for(j=i+1; j<arr.length; j++){
        if(arr[i] == arr[j]){
            flag = 1
        }
    }
    if(flag == 1){
        console.log(arr[i])
    }
}


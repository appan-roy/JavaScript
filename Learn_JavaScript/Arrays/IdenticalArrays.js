/* WAP to create two arrays with 10 elements & check the arrays are identical or not. */

arr1 = [13, 37, 21, 45, 9]
arr2 = [13, 37, 22, 45, 9]

c = 0

for(i=0; i<arr1.length; i++){
    for(j=0; j<arr2.length; j++){
        if(arr1[i] == arr2[j]){
            c++
        }
    }
}

if(c == arr1.length){
    console.log("The arrays are identical")
}else{
    console.log("The arrays are not identical")
}

/* 
WAP to search an element in an array using Linear Search. If present, also display the position of the number
in the array.
*/

arr = [73, 9, 21, 35, 17, 58, 66, 90, 41, 83]

num = 83, flag = 0

for(i=0; i<arr.length; i++){
    if(num == arr[i]){
        flag = 1
        break
    }
}

if(flag == 1){
    console.log("The number "+num+" is present in the array at "+(i+1)+"-th position")
}else{
    console.log("The number "+num+" is not present in the array")
}

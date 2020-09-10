/* 
WAP to search an element in an array using Binary Search. If present, also display the position of the number
in the array.
*/

arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

num = 100, flag = 0, beg = 0, end = arr.length-1

while(beg <= end){
    mid = Number.parseInt((beg + end) / 2)
    if(num > arr[mid]){
        beg = mid + 1
    }else if(num < arr[mid]){
        end = mid - 1
    }else{
        flag = 1
        break;
    }
}

if(flag == 1){
    console.log("The number "+num+" is present in the array at "+(mid+1)+"-th position")
}else{
    console.log("The number "+num+" is not present in the array")
}

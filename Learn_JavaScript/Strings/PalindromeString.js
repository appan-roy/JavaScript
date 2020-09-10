/*
WAP to check whether a given string is palindrome or not. e.g. RADAR, MADAM, MALAYALAM.
*/

str = "MALAYALAM"

arr = str.split("")

flag = 0, end = arr.length-1

if(arr.length % 2 == 0){
    mid = arr.length/2
}else{
    mid = (arr.length-1)/2
}

for(beg=0; beg<mid; beg++){
    if(arr[beg] != arr[end]){
        flag = 1
        break
    }else{
        end--
        continue
    }
}

if(flag == 0){
    console.log("The string "+str+" is a palindrome")
}else{
    console.log("The string "+str+" is not a palindrome")
}

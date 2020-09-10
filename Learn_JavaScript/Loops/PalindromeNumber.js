/* WAP to check a no. is palindrome or not. e.g. 717 is a palindrome no. */

num = 9865689

final = 0, temp = num

while(num > 0){
    rem = num % 10
    num = Number.parseInt(num / 10)
    final = final * 10 + rem
}

if(final == temp){
    console.log("The number "+temp+" is a palindrome")
}else{
    console.log("The number "+temp+" is not a palindrome")
}

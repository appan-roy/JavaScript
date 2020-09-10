/* WAP check whether a no. is perfect square or not. */

num = 48

sq_root = Math.sqrt(num)
sq_root_int = Number.parseInt(sq_root)

if(sq_root == sq_root_int){
    console.log("The number "+num+" is a perfect square")
}else{
    console.log("The number "+num+" is not a perfect square")
}

//Try-Catch Block
a = 10, b = 0

try {
    if( b == 0){
        throw("Divide by zero error !!")
    }else{
        res = a / b
        console.log("The division result is : "+res)
    }
} catch (error) {
    console.log("Error : "+error)
} finally {
    console.log("Exception is handled properly")
}

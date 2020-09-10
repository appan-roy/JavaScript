/*************** Arithmetic Operators ***************/

let a = 10, b=3

//addition
let sum = a + b
console.log("The sum result is : "+sum)     //13

//subtraction
let sub = a - b
console.log("The sub result is : "+sub)     //7

//multiplication
let mul = a * b
console.log("The mul result is : "+mul)     //30

//division
let div = a / b
console.log("The div result is : "+div)     //3.3333333333333335

//modulo - the remainder
let mod = a % b
console.log("The mod result is : "+mod)     //1

//power
let pow = a ** b
console.log("The pow result is : "+pow)     //1000

//post increamental
let post_inc = 2 * a++
console.log("The post incremented mul result is : "+post_inc)   //20

//pre increamental
let pre_inc = 2 * ++a
console.log("The pre incremented mul result is : "+pre_inc)     //24

//post decremental
let post_dec = 2 * b--
console.log("The post decremented mul result is : "+post_dec)   //6

//pre decremental
let pre_dec = 2 * --b
console.log("The pre decremented mul result is : "+pre_dec)     //2


/*************** Assignment Operators ***************/

let x = 20, y = 2

//add & assign
x += y
console.log("The result is : "+x)   //22

//sub & assign
x -= y
console.log("The result is : "+x)   //20

//mul & assign
x *= y
console.log("The result is : "+x)   //40

//div & assign
x /= y
console.log("The result is : "+x)   //20

//mod & assign
x %= y
console.log("The result is : "+x)   //0


/*************** Comparison Operators ***************/

//equal to
console.log(10 == "10")     //true

//equal value and equal type
console.log(10 === "10")    //false

//not equal to
console.log(10 != "10")     //false

//not equal value and type
console.log(10 !== "10")    //true

//greater than
console.log(10 > 10)        //false

//greater than or equal to
console.log(10 >= 10)       //true

//less than
console.log(10 < 10)        //false

//less than or equal to
console.log(10 <= 10)       //true

//ternary operator
console.log(10 > 7 ? 10: 7) //10


/*************** Logical Operators ***************/

let c = true, d = false

//logical AND
console.log(c && d)     //false

//logical OR
console.log(c || d)     //true

//logical NOT
console.log(! c)        //false


/*************** Type Operators ***************/

//typeof operator
console.log(typeof 123)         //number
console.log(typeof 123.25)      //number
console.log(typeof "Appan")     //string
console.log(typeof true)        //boolean
console.log(typeof NaN)         //number
console.log(typeof {name:"Appan", age:30})  //object
console.log(typeof [1, 2, 3])   //object
console.log(typeof new Date())  //object
console.log(typeof null)        //object
console.log(typeof function() {})   //function
console.log(typeof myClass)     //undefined

//instanceof operator
let firstName = "Appan"
let lastName = new String("Roy")
let number1 = 123
let number2 = new Number(456)

console.log(firstName instanceof String)    //false
console.log(lastName instanceof String)     //true
console.log(number1 instanceof Number)      //false
console.log(number2 instanceof Number)      //true


/*************** Bitwise Operators ***************/

let A = 3       //0011
let B = 5       //0101

//bitwise AND
console.log(A & B)      //1 means 0001

//bitwise OR
console.log(A | B)      //7 means 0111

//bitwise NOT
console.log(~A)         //-4 means 1100 [first bit as sign bit 1 means (-ve) and then 100 means 4]

//bitwise XOR
console.log(A ^ B)      //6 means 0110

//left shift <<
console.log(A << B)     //96 means 0011 00000 [A(0011) is shifted left by B(00000)]

//right shift >>
console.log(A >> B)     //0 means 0000 [A(0011) is shifted right by B(00000)]


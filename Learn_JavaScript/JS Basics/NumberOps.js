/******************************** Number Operations *******************************/

//The toString() method returns a number as a string. This is number to string conversion
x = 123
y = x.toString()
console.log(typeof x)   //number
console.log(typeof y)   //string

//toExponential() returns a string, with a number rounded and written using exponential notation.
//A parameter defines the number of characters behind the decimal point
x = 9.656
console.log(x.toExponential(2))     //9.66e+0
console.log(x.toExponential(4))     //9.6560e+0
console.log(x.toExponential(6))     //9.656000e+0

//toFixed() returns a string, with the number written with a specified number of decimals
console.log(x.toFixed(0))           //10
console.log(x.toFixed(2))           //9.66
console.log(x.toFixed(4))           //9.6560

//toPrecision() returns a string, with a number written with a specified length
console.log(x.toPrecision())        //9.656
console.log(x.toPrecision(2))       //9.7
console.log(x.toPrecision(4))       //9.656

//valueOf() returns a number as a number
console.log(x.valueOf())            //9.656

//Number() can be used to convert JavaScript variables to numbers
console.log(Number(true))           // returns 1
console.log(Number(false))          // returns 0
console.log(Number("10"))           // returns 10
console.log(Number("  10"))         // returns 10
console.log(Number("10  "))         // returns 10
console.log(Number(" 10  "))        // returns 10
console.log(Number("10.33"))        // returns 10.33
console.log(Number("10,33"))        // returns NaN
console.log(Number("10 33"))        // returns NaN
console.log(Number("John"))         // returns NaN

//Number() can also convert a date to a number.
//The Number() method above returns the number of milliseconds since 1.1.1970
console.log(Number(new Date("2020-09-01")))     //1598918400000

//parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned
//If the number cannot be converted, NaN (Not a Number) is returned
console.log(parseInt("10"))         //returns 10
console.log(parseInt("10.33"))      //returns 10
console.log(parseInt("10 20 30"))   //returns 10
console.log(parseInt("10 years"))   //returns 10
console.log(parseInt("years 10"))   //returns NaN

//parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned
//If the number cannot be converted, NaN (Not a Number) is returned
console.log(parseFloat("10"))           //returns 10
console.log(parseFloat("10.33"))        //returns 10.33
console.log(parseFloat("10 20 30"))     //returns 10
console.log(parseFloat("10 years"))     //returns 10
console.log(parseFloat("years 10"))     //returns NaN

//MAX_VALUE returns the largest possible number in JavaScript
console.log(Number.MAX_VALUE)       //1.7976931348623157e+308

//MIN_VALUE returns the lowest possible number in JavaScript
console.log(Number.MIN_VALUE)       //5e-324

//POSITIVE_INFINITY is returned on overflow
console.log(Number.POSITIVE_INFINITY)   //Infinity
console.log(1/0)                        //Infinity

//NEGATIVE_INFINITY is returned on overflow
console.log(Number.NEGATIVE_INFINITY)   //-Infinity
console.log(-1/0)                       //-Infinity

//The Number.MAX_SAFE_INTEGER constant represents the maximum safe integer in JavaScript (2^53 - 1)
console.log(Number.MAX_SAFE_INTEGER)    //9007199254740991

//The Number.MIN_SAFE_INTEGER constant represents the minimum safe integer in JavaScript (-(2^53 - 1))
console.log(Number.MIN_SAFE_INTEGER)    //-9007199254740991

//isFinite() Checks whether a value is a finite number
console.log(Number.isFinite(0/1))      //true
console.log(Number.isFinite(1/0))      //false

//isInteger() Checks whether a value is an integer
console.log(Number.isInteger(1234))     //true
console.log(Number.isInteger(12.34))    //false

//The Number.isSafeInteger() method determines whether a value is a safe integer
//A safe integer is an integer that can be exactly represented as an IEEE-754 double precision number 
//(all integers from (2^53 - 1) to -(2^53 - 1))
console.log(Number.isSafeInteger(123))                  //true
console.log(Number.isSafeInteger(-123))                 //true
console.log(Number.isSafeInteger(5-2))                  //true
console.log(Number.isSafeInteger(0))                    //true
console.log(Number.isSafeInteger(0.5))                  //false
console.log(Number.isSafeInteger(Math.pow(2, 53)))      //false
console.log(Number.isSafeInteger(Math.pow(2, 53) - 1))  //true
console.log(Number.isSafeInteger('123'))                //false
console.log(Number.isSafeInteger(false))                //false
console.log(Number.isSafeInteger(Infinity))             //false
console.log(Number.isSafeInteger(-Infinity))            //false
console.log(Number.isSafeInteger(0 / 0))                //false

//The Number.isNaN() method determines whether a value is NaN (Not-A-Number).
//Number.isNaN() is different from the global isNaN() function. 
//The global isNaN() function converts the tested value to a Number, then tests it.
console.log(Number.isNaN(123))          //false
console.log(Number.isNaN(-1.23))        //false
console.log(Number.isNaN(5-2))          //false
console.log(Number.isNaN(0))            //false
console.log(Number.isNaN('123'))        //false
console.log(Number.isNaN('Hello'))      //false
console.log(Number.isNaN('2005/12/12')) //false
console.log(Number.isNaN(''))           //false
console.log(Number.isNaN(true))         //false
console.log(Number.isNaN(undefined))    //false
console.log(Number.isNaN('NaN'))        //false
console.log(Number.isNaN(NaN))          //true
console.log(Number.isNaN(0 / 0))        //true


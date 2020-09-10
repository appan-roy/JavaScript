/************************************ String Operations *******************************/

/******* String Length *********/

//The length property returns the length of a string
str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
len = str.length
console.log(len)    //26

/************ Finding a String in a String *************/

//The indexOf() method returns the index of (the position of) the first occurrence of a specified text 
//in a string
str = "Please locate where 'locate' occurs!"
pos = str.indexOf("locate")
console.log(pos)    //7

//The lastIndexOf() method returns the index of the last occurrence of a specified text in a string.
//Both indexOf(), and lastIndexOf() return -1 if the text is not found.
pos = str.lastIndexOf("locate")
console.log(pos)    //21

//Both methods accept a second parameter as the starting position for the search. The lastIndexOf() methods 
//searches backwards (from the end to the beginning), meaning: if the second parameter is 15, the search starts 
//at position 15, and searches to the beginning of the string
pos = str.indexOf("locate", 15)
console.log(pos)    //21
pos = str.lastIndexOf("locate", 15)
console.log(pos)    //7

//The search() method searches a string for a specified value and returns the position of the match
pos = str.search("locate")
console.log(pos)    //7

/************** search() vs indexOf() ***************/

//The search() method cannot take a second start position argument
//The indexOf() method cannot take powerful search values (regular expressions)

/************** Extracting String Parts ***************/

//slice() extracts a part of a string and returns the extracted part in a new string
//The method takes 2 parameters: the start position, and the end position (end not included)
str = "Apple, Banana, Kiwi"
res = str.slice(7, 13)     //returns 7 to 12 indexed characters, but not the 13th character
console.log(res)            //Banana

//If a parameter is negative, the position is counted from the end of the string
res = str.slice(-12, -6)   //returns -12 to -7 indexed characters, but not the (-6)th character
console.log(res)            //Banana

//If you omit the second parameter, the method will slice out the rest of the string
res = str.slice(7)
console.log(res)    //Banana, Kiwi
res = str.slice(-12)
console.log(res)    //Banana, Kiwi

//substring() is similar to slice()
//The difference is that substring() cannot accept negative indexes
res = str.substring(7, 13)
console.log(res)    //Banana

//If you omit the second parameter, substring() will slice out the rest of the string
res = str.substring(7)
console.log(res)    //Banana, Kiwi

//substr() is similar to slice()
//The difference is that the second parameter specifies the length of the extracted part
res = str.substr(7, 6)
console.log(res)    //Banana

//If you omit the second parameter, substr() will slice out the rest of the string
res = str.substr(7)
console.log(res)    //Banana, Kiwi

//If the first parameter is negative, the position counts from the end of the string
res = str.substr(-4)
console.log(res)    //Kiwi

/************** Replacing String Content ***************/

//The replace() method replaces a specified value with another value in a string
//The replace() method does not change the string it is called on. It returns a new string
str = "Please visit Microsoft!"
n = str.replace("Microsoft", "Google")
console.log(n)      //Please visit Google!

//By default, the replace() method replaces only the first match.
str = "Please visit Microsoft and Microsoft!"
n = str.replace("Microsoft", "Google")
console.log(n)      //Please visit Google and Microsoft!

//By default, replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work
str = "Please visit Microsoft!"
n = str.replace("MICROSOFT", "Google")
console.log(n)      //Please visit Microsoft!

//To replace case insensitive, use a regular expression with an /i flag (insensitive)
n = str.replace(/MICROSOFT/i, "Google")
console.log(n)      //Please visit Google!

//To replace all matches, use a regular expression with a /g flag (global match)
str = "Please visit Microsoft and Microsoft!"
n = str.replace(/Microsoft/g, "Google")
console.log(n)      //Please visit Google and Google!

/************** Converting to Upper and Lower Case ***************/

//A string is converted to upper case with toUpperCase()
text1 = "Hello World!"
text2 = text1.toUpperCase()
console.log(text2)  //HELLO WORLD!

//A string is converted to lower case with toLowerCase()
text2 = text1.toLowerCase()
console.log(text2)  //hello world!

/************** The concat() Method ***************/

//concat() joins two or more strings
text1 = "Hello";
text2 = "World!";
text3 = text1.concat(" ", text2);
console.log(text3)  //Hello World!

//The plus operator also concatenates two strings
text = "Hello" + " " + "World!"
console.log(text3)  //Hello World!

// All string methods return a new string. They don't modify the original string.
// Formally said: Strings are immutable: Strings cannot be changed, only replaced.

//The trim() method removes whitespace from both sides of a string
var str = "       Hello World!        "
n = str.trim()
console.log(n)      //Hello World!

/************** Extracting String Characters ***************/

//The charAt() method returns the character at a specified index (position) in a string
str = "HELLO WORLD"
console.log(str.charAt(0))      //H

//The charCodeAt() method returns the unicode of the character at a specified index in a string
console.log(str.charCodeAt(0))  //72

//ECMAScript 5 (2009) allows property access [ ] on strings
console.log(str[0])             //H

//Property access might be a little unpredictable. It makes strings look like arrays (but they are not)
//If no character is found, [ ] returns undefined, while charAt() returns an empty string.
//It is read only. str[0] = "A" gives no error (but does not work!)

str[0] = "A"            //Gives no error, but does not work
console.log(str[0])     //H

/************** Converting a String to an Array ***************/

//A string can be converted to an array with the split() method
txt = "a,b,c,d,e"
res = txt.split(",")        //Split on commas
console.log(res)            //[ 'a', 'b', 'c', 'd', 'e' ]         

//If the separator is omitted, the returned array will contain the whole string in index [0]
//If the separator is "", the returned array will be an array of single characters

txt = "Hello"
console.log(txt.split(""))  //[ 'H', 'e', 'l', 'l', 'o' ]

//startsWith() Checks whether a string begins with specified characters
str = "Hello World"
console.log(str.startsWith('Hello'))    //true

//endsWith() Checks whether a string ends with specified string/characters
console.log(str.endsWith('World'))      //true

//includes() Checks whether a string contains the specified string/characters
console.log(str.includes('Hell'))       //true

//repeat() Returns a new string with a specified number of copies of an existing string
txt = str.repeat(2)
console.log(txt)        //Hello WorldHello World

//valueOf() Returns the primitive value of a String object
console.log(str.valueOf())  //Hello World

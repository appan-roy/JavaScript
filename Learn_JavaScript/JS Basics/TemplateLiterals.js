let msg1 = 'Hello world, welcome to JavaScript'
console.log(msg1);

let msg2 = 'Hello world,\nwelcome to JavaScript'
console.log(msg2);

let msg3 = 'Hello world,'
            +'\nwelcome to \'JavaScript\''
console.log(msg3);

//template literal
let name = 'John'
let product = function(){
    return 'pen drive'
}

let mailBody = 
`Hi ${name},

Hope you are doing good !

I have sent you ${1+1} ${product()}s. Please check and let me know.

Regards,
Appan
`
console.log(mailBody);

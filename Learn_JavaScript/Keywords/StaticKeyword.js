class Static{
    
    static var1 = 'This is a static variable'
    var2 = 'This is a non static variable'
    
    static method1(){
        console.log('This is a static method');
    }
    method2(){
        console.log('This is a non static method');
    }

}

//access static variable and method direclty using class name
console.log(Static.var1);
Static.method1()

//access non static variable and method of a class by creating a class object
let a = new Static()
console.log(a.var2);
a.method2()

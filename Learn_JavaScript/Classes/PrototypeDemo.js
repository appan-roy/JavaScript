//create a constructor. This constructor is created without a class
EmpDetails = function(name, age){
    this.name = name
    this.age = age
}

//create a prototype for name [every function has a prototypr in JS]
EmpDetails.prototype.getName = function(){
    return this.name
}

//create a prototype for age [every function has a prototypr in JS]
EmpDetails.prototype.getAge = function(){
    return this.age
}

//create objects of the constructor
emp1 = new EmpDetails('John', 30)
emp2 = new EmpDetails('Jack', 40)

//access the objects and the prototypes
console.log(emp1.getName())     //John
console.log(emp1.getAge())      //30
console.log(emp2.getName())     //Jack
console.log(emp2.getAge())      //40

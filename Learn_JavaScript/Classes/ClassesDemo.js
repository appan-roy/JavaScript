//create a class
class Employee{
    
    //create a constructor
    constructor(name, id){
        this.name = name
        this.id = id
    }

    //create a method
    setDetails(name, id){
        this.name = name
        this.id = id
    }

}

//access the class object - constructor...the constructor will always be called while the class object will be created
emp1 = new Employee('John', 1111)
console.log('Emp Name : '+emp1.name+', Emp ID : '+emp1.id)  //Emp Name : John, Emp ID : 1111

//access the class object - method
emp2 = new Employee()
emp2.setDetails('Glenn', 2222)
console.log('Emp Name : '+emp2.name+', Emp ID : '+emp2.id)  //Emp Name : Glenn, Emp ID : 2222

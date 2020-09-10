//create a base class
class Animals{
    
    //create a constructor
    constructor(name){
        this.name = name
    }

    //create a method
    eats(){
        console.log(this.name+' eats food')
    }

}

//create a child class
class Human extends Animals{

    //create a method
    eats(){
        console.log(this.name+' eats chicken')
    }

}

//create an object of child class
child = new Human('John')

/* eats() method is present in both base and child class but as child being the object of child class so the 
preference is given to the child class, not the parent class. This is also known as method overriding a.k.a.
run time polymorphism */

//access the method eats
child.eats()      //John eats chicken

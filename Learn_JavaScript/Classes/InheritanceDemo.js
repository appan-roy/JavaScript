//create a base class
class Car{

    setName(name){
        this.name = name
    }

    startEngine(){
        console.log('Engine started for '+this.name)
    }

    stopEngine(){
        console.log('Engine stopped for '+this.name)
    }

}

//create a child class
class Honda extends Car{

    topSpeed(speed){
        console.log('Top speed for '+this.name+' is '+speed+' mph')
    }

}

//object created for Honda class
myCar = new Honda() 

//access the base class object
myCar.setName('Honda City') 

//access the base class object
myCar.startEngine()                 //Engine started for Honda City

//access the base class object
myCar.stopEngine()                  //Engine stopped for Honda City

//access the child class object
myCar.topSpeed(200)                 //Top speed for Honda City is 200 mph

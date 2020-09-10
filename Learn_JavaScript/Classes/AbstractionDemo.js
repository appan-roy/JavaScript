//create a constructor Employee without a class
function Employee(name, age, basicSalary, monthlyVariable){

    this.name = name
    this.age = age
    this.basicSalary = basicSalary
    
    //make the monthlyVariable as private or we can say the scope is made limited so that ouside this 
    //constructor this variable can't be used
    monthlyVariable = 2000

    //create function calculateMonthlySalary()
    calculateMonthlySalary = function(){
        finalSalary = basicSalary + monthlyVariable
        console.log('Final salary is : '+finalSalary)
    }

     //create a function getEmpDetails()
     this.getEmpDetails = function(){
        console.log('Name : '+this.name+', Age : '+this.age)
        calculateMonthlySalary()
    }

}

//create an object of the Employee
emp1 = new Employee('John', 30, 10000)

//call the function getEmpDetails()
emp1.getEmpDetails()    //[The computation of the final salary is kept hidden from the user]

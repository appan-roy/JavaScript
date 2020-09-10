//create a class
class Employee{

    //create setter method
    setEmpDetails(name, id, phoneNo){
        this.name = name
        this.id = id
        this.phoneNo = phoneNo
    }

    //create getter method
    getEmpName(){
        return this.name
    }

    getEmpId(){
        return this.id
    }

    getEmpPhoneNo(){
        return this.phoneNo
    }

}

//access the class objects
emp1 = new Employee();

//set the values
emp1.setEmpDetails('Frank', 1111, 9876543210)

//get the values
console.log('Employee Name : '+emp1.getEmpName())               //Employee Name : Frank
console.log('Employee ID : '+emp1.getEmpId())                   //Employee ID : 1111
console.log('Employee Phone Number : '+emp1.getEmpPhoneNo())    //Employee Phone Number : 9876543210

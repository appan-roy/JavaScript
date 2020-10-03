//constructor function - it produce objects
//design the template
CreateCircle = function(radius, x, y){
    this.radius = radius
    this.x = x
    this.y = y
    this.draw = function(){
        console.log('draw circle');
    }
}

//create objects using the template and print
const c1 = new CreateCircle(1, 3, 4)
console.log(c1);            //prints object
console.log(c1.radius);     //prints object property

const c2 = new CreateCircle(2, 4, 5)
console.log(c2);            //prints object
console.log(c2.x, c2.y);    //prints object property

const c3 = new CreateCircle(3, 5, 6)
console.log(c3);            //prints object
console.log(c3.draw());     //prints object property

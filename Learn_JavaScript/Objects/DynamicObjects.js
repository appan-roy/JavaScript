//dynamic nature of objects

//create object circle
const circle = {
    radius : 1,
    color : 'red',
    log(){
        console.log('log', this.radius);
    }
}

//access object
console.log(circle);

//add more properties in the circle object
circle.isPresent = true;
circle.draw = function(){
    console.log('draw circle');
}
console.log(circle);

//delete some properties fron the circle object
delete circle.isPresent;
delete circle.draw;
console.log(circle);

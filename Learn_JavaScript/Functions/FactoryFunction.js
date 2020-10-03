//factory function - it produce objects
//design the template
createCircle = function(radius, x, y){
    return {
        Radius : radius,
        isVisible : true,
        location : {
            X : x,
            Y : y
        },
        draw : function(){
            console.log('draw circle');
        }
    }
}

//create objects using the template and print
const c1 = createCircle(1, 3, 4)
console.log(c1);            //prints object
console.log(c1.Radius);     //prints object property

const c2 = createCircle(2, 4, 5)
console.log(c2);            //prints object
console.log(c2.isVisible);  //prints object property

const c3 = createCircle(3, 5, 6)
console.log(c3);            //prints object
console.log(c3.location);   //prints object property

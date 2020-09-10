//check the triangle is possible or not by using the sides
let side1 = 3, side2 = 4, side3 = 5

if(((side1 + side2) >= side3) && ((side2 + side3) >= side1) && ((side3 + side1) >= side2)){
    
    console.log("Triangle is possible")

    if((side1 == side2) && (side2 == side3)){
        console.log("The triangle is equilateral")
    }else if((side1 == side2) || (side2 == side3) || (side3 == side1)){
        console.log("The triangle is isosceles")
    }else{
        console.log("The triangle is scalene")
    }

}else{
    console.log("Triangle is not possible")
}

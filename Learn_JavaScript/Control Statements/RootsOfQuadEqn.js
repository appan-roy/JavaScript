/*
The standard form of quadratic equation is given by: ax^2 + bx + c =0; 
where D = b^2 - 4ac, is known as discriminant which determines the nature of the roots:-
If D>0 Roots are real & unequal     [a=3, b=5, c=2]
If D=0 Roots are real & equal       [a=1, b=2, c=1]
If D<0 Roots are imaginary          [a=3, b=2, c=1]
WAP to determine the nature of the roots of a quadratic equation. Also, find the roots of the equation.
*/

a = 1, b = -5, c = 6

D = Math.pow(b, 2) - 4*a*c

if(D > 0){
    console.log("The roots are real and unequal")
    root1 = (-b + Math.sqrt(D))/(2*a)
    root2 = (-b - Math.sqrt(D))/(2*a)
    console.log("The roots are : "+root1+" & "+root2)
}else if(D == 0){
    console.log("The roots are real and equal")
    root1 = (-b + Math.sqrt(D))/(2*a)
    root2 = (-b - Math.sqrt(D))/(2*a)
    console.log("The roots are : "+root1+" & "+root2)
}else{
    console.log("The roots are imaginary")
}

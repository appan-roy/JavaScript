/* WAP to check if 3 points are co-linear or not [e.g., (1,4), (3,-2) & (4,-5) points are collinear]*/

point1_x = 1, point1_y = 4
point2_x = 3, point2_y = -2
point3_x = -3, point3_y = 16

dist12 = Math.sqrt(Math.pow((point2_x - point1_x), 2) + Math.pow((point2_y - point1_y), 2))
dist23 = Math.sqrt(Math.pow((point3_x - point2_x), 2) + Math.pow((point3_y - point2_y), 2))
dist31 = Math.sqrt(Math.pow((point1_x - point3_x), 2) + Math.pow((point1_y - point3_y), 2))

if((dist12 + dist23 == dist31) || (dist23 + dist31 == dist12) || (dist31 + dist12 == dist23)){
    console.log("The points are collinear")
}else{
    console.log("The points are not collinear")
}

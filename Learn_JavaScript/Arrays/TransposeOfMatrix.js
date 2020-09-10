/* WAP to transpose a matrix */

mx = [ 
        [1, 2, 3], 
        [4, 5, 6], 
        [7, 8, 9], 
    ];

console.log("The original matrix is : ")
console.log(mx)

for(i=0; i<mx.length; i++){
    for(j=0; j<i; j++){
        temp = mx[i][j]
        mx[i][j] = mx[j][i]
        mx[j][i] = temp
    }
}

console.log("The transposed matrix is : ")
console.log(mx)

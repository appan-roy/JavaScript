/* 
1	3	5	7	9	
3	5	7	9	
5	7	9	
7	9	
9
*/

n = 5

for(i=1; i<=(2*n-1); i+=2){
    for(j=i; j<=(2*n-1); j+=2){
        process.stdout.write(j+"\t")
    }
    console.log()
}

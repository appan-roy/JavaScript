/* 
1	2	3	4	5	6	7	8	9	
	1	2	3	4	5	6	7	
		1	2	3	4	5	
			1	2	3	
				1
*/

n = 5

for(i=1; i<=n; i++){
    for(j=1; j<i; j++){
        process.stdout.write("\t")
    }
    for(k=1; k<=(2*n-1)-((i-1)*2); k++){
        process.stdout.write(k+"\t")
    }
    console.log()
}

/* 
				1	
			2	3	2	
		3	4	5	4	3	
	4	5	6	7	6	5	4	
5	6	7	8	9	8	7	6	5
*/

n = 5

for(i=1; i<=(2*n-1); i+=2){
    for(j=1; j<=((2*n-1-i)/2); j++){
        process.stdout.write("\t")
    }
    for(k=((i+1)/2); k<=i; k++){
        process.stdout.write(k+"\t")
    }
    for(l=(i-1); l>=((i+1)/2); l--){
        process.stdout.write(l+"\t")
    }
    console.log()
}

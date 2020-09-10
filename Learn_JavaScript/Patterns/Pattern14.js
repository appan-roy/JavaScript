/* 
				1	
			2	3	2	
		3	4	5	4	3	
	4	5	6	7	6	5	4	
5	6	7	8	9	8	7	6	5	
		3	4	5	4	3	
			2	3	2	
				1	
*/

n = 5

for(i=1; i<=(2*n-1); i+=2){
    for(j=1; j<=(2*n-1-i)/2; j++){
        process.stdout.write("\t")
    }
    for(k=(i+1)/2; k<=i; k++){
        process.stdout.write(k+"\t")
    }
    for(l=i-1; l>=(i+1)/2; l--){
        process.stdout.write(l+"\t")
    }
    console.log()
}

for(x=5; x>0; x-=2){
    for(y=1; y<=(2*n-1-x)/2; y++){
        process.stdout.write("\t")
    }
    for(z=(x+1)/2; z<=x; z++){
        process.stdout.write(z+"\t")
    }
    for(w=x-1; w>=(x+1)/2; w--){
        process.stdout.write(w+"\t")
    }
    console.log()
}

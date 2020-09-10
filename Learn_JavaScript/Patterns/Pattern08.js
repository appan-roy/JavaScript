/* 
				1	
			2	1	
		3	2	1	
	4	3	2	1	
5	4	3	2	1	
	4	3	2	1	
		3	2	1	
			2	1	
				1
*/

n = 5

for(i=1; i<=n; i++){
    for(j=i; j<n; j++){
        process.stdout.write("\t")
    }
    for(k=i; k>=1; k--){
        process.stdout.write(k+"\t")
    }
    console.log()
}

for(x=(n-1); x>=1; x--){
    for(y=(n-1); y>=x; y--){
        process.stdout.write("\t")
    }
    for(z=x; z>=1; z--){
        process.stdout.write(z+"\t")
    }
    console.log()
}

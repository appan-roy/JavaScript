/* 
5	4	3	2	1	
	5	4	3	2	
		5	4	3	
			5	4	
				5	
			5	4	
		5	4	3	
	5	4	3	2	
5	4	3	2	1
*/

n = 5

for(i=1; i<=n; i++){
    for(j=i; j>1; j--){
        process.stdout.write("\t")
    }
    for(k=n;k>=i;k--){
        process.stdout.write(k+"\t")
    }
    console.log()
}

for(x=n-1; x>=1; x--){
    for(y=x; y>1; y--){
        process.stdout.write("\t")
    }
    for(z=n; z>=x; z--){
        process.stdout.write(z+"\t")
    }
    console.log()
}

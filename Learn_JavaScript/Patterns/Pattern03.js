/* 
				5	
			4	5	
		3	4	5	
	2	3	4	5	
1	2	3	4	5
*/

n = 5

for(i=n; i>=1; i--){
    for(j=1; j<i; j++){
        process.stdout.write("\t")
    }
    for(k=i; k<=n; k++){
        process.stdout.write(k+"\t")
    }
    console.log()
}

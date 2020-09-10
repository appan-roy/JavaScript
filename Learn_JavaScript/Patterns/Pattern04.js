/* 
1	2	3	4	5	
	2	3	4	5	
		3	4	5	
			4	5	
				5
*/

n = 5

for(i=1; i<=n; i++){
    for(j=i; j>1; j--){
        process.stdout.write("\t")
    }
    for(k=i; k<=n; k++){
        process.stdout.write(k+"\t")
    }
    console.log()
}

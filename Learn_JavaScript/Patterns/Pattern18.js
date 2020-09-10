/* 
1	1	1	1	1	
	2	2	2	2	2	
		3	3	3	3	3	
			4	4	4	4	4	
				5	5	5	5	5
*/

n = 5

for(i=1; i<=n; i++){
    for(j=i; j>1; j--){
        process.stdout.write("\t")
    }
    for(k=1; k<=n; k++){
        process.stdout.write(i+"\t")
    }
    console.log()
}

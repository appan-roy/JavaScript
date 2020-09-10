/* 
1	2	3	4	5	4	3	2	1	
	1	2	3	4	3	2	1	
		1	2	3	2	1	
			1	2	1	
				1	
			1	2	1	
		1	2	3	2	1	
	1	2	3	4	3	2	1	
1	2	3	4	5	4	3	2	1	
*/

n = 5

for(i=n; i>1; i--){
    for(j=i; j<n; j++){
        process.stdout.write("\t")
    }
    for(k=1; k<=i; k++){
        process.stdout.write(k+"\t")
    }
    for(l=i-1; l>0; l--){
        process.stdout.write(l+"\t")
    }
    console.log()
}

for(x=1; x<=n; x++){
    for(y=x; y<n; y++){
        process.stdout.write("\t")
    }
    for(z=1; z<=x; z++){
        process.stdout.write(z+"\t")
    }
    for(w=x-1; w>0; w--){
        process.stdout.write(w+"\t")
    }
    console.log()
}

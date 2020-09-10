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
    for(j=i; j>=1; j--){
        process.stdout.write(j+"\t")
    }
    console.log()
}

for(k=(n-1); k>=1; k--){
    for(l=k; l>=1; l--){
        process.stdout.write(l+"\t")
    }
    console.log()
}

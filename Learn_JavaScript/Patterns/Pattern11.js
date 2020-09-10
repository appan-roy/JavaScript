/* 
5	4	3	2	1	
4	3	2	1	
3	2	1	
2	1	
1	
2	1	
3	2	1	
4	3	2	1	
5	4	3	2	1
*/

n = 5

for(i=n; i>=1; i--){
    for(j=i; j>=1; j--){
        process.stdout.write(j+"\t")
    }
    console.log()
}

for(x=2; x<=n; x++){
    for(y=x; y>=1; y--){
        process.stdout.write(y+"\t")
    }
    console.log()
}

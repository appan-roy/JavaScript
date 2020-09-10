/* 
1	2	3	4	5	4	3	2	1	
2	3	4	5		5	4	3	2	
3	4	5				5	4	3	
4	5						5	4	
5								5
*/

n = 5

m = 1

for(x=1; x<=n; x++){
    if(x != 1){
        for(i=x; i<=n; i++){
            process.stdout.write(i+"\t")
        }
        for(j=m; j>=1; j--){
            process.stdout.write("\t")
        }
        for(k=n; k>=x; k--){
            process.stdout.write(k+"\t")
        }
        m+=2
    }else{
        for(y=x; y<=n; y++){
            process.stdout.write(y+"\t")
        }
        for(z=(n-1); z>=x; z--){
            process.stdout.write(z+"\t")
        }
    }
    console.log()
}

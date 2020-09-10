/* 
5								5	
4	5						5	4	
3	4	5				5	4	3	
2	3	4	5		5	4	3	2	
1	2	3	4	5	4	3	2	1	
2	3	4	5		5	4	3	2	
3	4	5				5	4	3	
4	5						5	4	
5								5	
*/

n = 5

p = (2*(n-1)-1), q = 1

for(i=n; i>0; i--){
    if(i != 1){
        for(j=i; j<=n; j++){
            process.stdout.write(j+"\t")
        }
        for(k=1; k<=p; k++){
            process.stdout.write("\t")
        }
        for(l=n; l>=i; l--){
            process.stdout.write(l+"\t")
        }
        p-=2
    }else{
        for(m=i; m<=n; m++){
            process.stdout.write(m+"\t")
        }
        for(r=n-1; r>=i; r--){
            process.stdout.write(r+"\t")
        }
    }
    console.log()
}

for(x=2; x<=n; x++){
    for(y=x; y<=n; y++){
        process.stdout.write(y+"\t")
    }
    for(z=q; z>0; z--){
        process.stdout.write("\t")
    }
    for(w=n; w>=x; w--){
        process.stdout.write(w+"\t")
    }
    q+=2
    console.log()
}

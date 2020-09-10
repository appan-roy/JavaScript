/* 
1	2	3	4	5	4	3	2	1	
2	3	4	5		5	4	3	2	
3	4	5				5	4	3	
4	5						5	4	
5								5	
4	5						5	4	
3	4	5				5	4	3	
2	3	4	5		5	4	3	2	
1	2	3	4	5	4	3	2	1	
*/

n = 5

t = 2*n-5, s = 1

for(x=1; x<=n; x++){
    if(x != 1){
        for(i=x; i<=n; i++){
            process.stdout.write(i+"\t")
        }
        for(j=s; j>0; j--){
            process.stdout.write("\t")
        }
        for(k=n; k>=x; k--){
            process.stdout.write(k+"\t")
        }
        s+=2
    }else{
        for(y=x; y<=n; y++){
            process.stdout.write(y+"\t")
        }
        for(z=n-1; z>=x; z--){
            process.stdout.write(z+"\t")
        }
    }
    console.log()
}

for(a=n-1; a>0; a--){
    if(a != 1){
        for(p=a; p<=n; p++){
            process.stdout.write(p+"\t")
        }
        for(q=1; q<=t; q++){
            process.stdout.write("\t")
        }
        for(r=n; r>=a; r--){
            process.stdout.write(r+"\t")
        }
        t-=2
    }else{
        for(b=a; b<=n; b++){
            process.stdout.write(b+"\t")
        }
        for(c=n-1; c>=a; c--){
            process.stdout.write(c+"\t")
        }
    }
    console.log()
}

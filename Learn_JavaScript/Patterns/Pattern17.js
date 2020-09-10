/* 
				1		
			2		3		
		4		5		6		
	7		8		9		10		
11		12		13		14		15
*/

n = 5

p = 0

for(x=1; x<=n; x++){
    for(y=n; y>x; y--){
        process.stdout.write("\t")
    }
    for(z=1; z<=x; z++){
        process.stdout.write((++p)+"\t\t")
    }
    console.log()
}

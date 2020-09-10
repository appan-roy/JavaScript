/* 
				1		
		2		2		2		
3		3		3		3		3		
	4		4		4		4		
		5		5		5		
			6		6		
				7
*/

for(i=1; i<=3; i++){
    for(j=i; j<3; j++){
        process.stdout.write("\t\t")
    }
    for(k=1; k<=(i*2-1); k++){
        process.stdout.write(i+"\t\t")
    }
    console.log()
}

for(x=4; x<=7; x++){
    for(y=x; y>3; y--){
        process.stdout.write("\t")
    }
    for(z=1; z<=8-x; z++){
        process.stdout.write(x+"\t\t")
    }
    console.log()
}

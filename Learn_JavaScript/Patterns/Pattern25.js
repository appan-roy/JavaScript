/* 
				1		
			2		2		
		3		3		3		
	4		4		4		4		
5		5		5		5		5		
		6		6		6		
				7
*/

for(i=1; i<=5; i++){
    for(j=i; j<5; j++){
        process.stdout.write("\t")
    }
    for(k=1; k<=i; k++){
        process.stdout.write(i+"\t\t")
    }
    console.log()
}

for(x=6; x<=7; x++){
    for(y=x; y>5; y--){
        process.stdout.write("\t\t")
    }
    for(z=1; z<=5-((x-5)*2); z++){
        process.stdout.write(x+"\t\t")
    }
    console.log()
}

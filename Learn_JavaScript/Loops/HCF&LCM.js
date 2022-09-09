/* WAP to find the HCF & LCM of two no.s. */

a = 56, b = 84, hcf = 0, lcm = 0

product = a * b

for(i=1; i<product; i++){
    if((a % i == 0) && (b % i == 0)){
        hcf = i
    }
}

lcm = product / hcf

console.log("HCF : "+hcf+", LCM : "+lcm)

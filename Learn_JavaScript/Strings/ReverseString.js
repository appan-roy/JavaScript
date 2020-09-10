str = "GOOGLE"

arr = str.split("")

for(i=arr.length-1; i>=0; i--){
    process.stdout.write(arr[i])
}

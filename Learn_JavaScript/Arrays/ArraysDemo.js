//number array
numbers = [ 1, 2, 3, 4, 5 ]
console.log(numbers)    //[ 1, 2, 3, 4, 5 ]

//string array
fruits = [ 'Apple', 'Banana', 'Cherry', 'Guava', 'Pineapple' ]
console.log(fruits)     //[ 'Apple', 'Banana', 'Cherry', 'Guava', 'Pineapple' ]

//string array as objects
footballers = new Array('Messi', 'Ronaldo', 'Neymar')
console.log(footballers)    //[ 'Messi', 'Ronaldo', 'Neymar' ]

//add element to an array at the end
footballers.push('Mbappe')
console.log(footballers)    //[ 'Messi', 'Ronaldo', 'Neymar', 'Mbappe' ]

//add element to an array at the beginning
footballers.unshift('Suarez')
console.log(footballers)    //[ 'Suarez', 'Messi', 'Ronaldo', 'Neymar', 'Mbappe' ]

//remove element from the end
footballers.pop()
console.log(footballers)    //[ 'Suarez', 'Messi', 'Ronaldo', 'Neymar' ]

//remove element from the beginning
footballers.shift()
console.log(footballers)    //[ 'Messi', 'Ronaldo', 'Neymar' ]

//remove element from any particular index
delete footballers[1]
console.log(footballers)    //[ 'Messi', <1 empty item>, 'Neymar' ]

//assign an element to the empty index
footballers[1] = 'Muller'
console.log(footballers)    //[ 'Messi', 'Muller', 'Neymar' ]

//remove a series of elements
footballers.splice(1, 2)    //index 1 to index 2 will be popped out
console.log(footballers)    //[ 'Messi' ]

//add a series of elements
footballers.splice(2, 0, 'Coutinho', 'Dybala')
console.log(footballers)    //[ 'Messi', 'Coutinho', 'Dybala']

//slice into another array from an array
barcaFootballers = footballers.slice(0, 2)  //index 0 to index 1 will be popped out, not index 2
console.log(footballers)            //[ 'Messi', 'Coutinho', 'Dybala']
console.log(barcaFootballers)       //[ 'Messi', 'Coutinho' ]

//length of array
console.log(footballers.length)

//iterate throuth each element - method 1
for(i=0; i<footballers.length; i++){
    console.log(footballers[i])
}

//iterate throuth each element - method 2
for (i in footballers) {
    console.log(footballers[i])
}

//iterate through each element - method 3
for (i of footballers) {
    console.log(i)
}

//iterate through each element - method 4
footballers.forEach(i => {
    console.log(i)
});

//array concatenation
oddNumbers = [1, 3, 5, 7, 9]
evenNumbers = [2, 4, 6, 8, 10]
numbers = oddNumbers.concat(evenNumbers)
console.log(numbers)        //[1, 3, 5, 7, 9, 2, 4, 6, 8, 10]
primeNumbers = [2, 3, 5, 7]
allNumbers = primeNumbers.concat(oddNumbers, evenNumbers)
console.log(allNumbers)     //[2, 3, 5, 7, 1, 3, 5, 7, 9, 2, 4, 6, 8, 10]



function Count(){
    let count = 0;

    let n = 259;

// divide the n/10 to count the number;

    while(n>0){
        n = Math.floor(n/10);
        count++;
        // Math.floor rounds down the value, if it contains point numbers, it will round the numbers
    }
    return count;
}

console.log(Count());


console.log(Math.ceil(10.1)) // it will round up or increase the number;
console.log(Math.abs(-10))// it will change the negative number to Positive



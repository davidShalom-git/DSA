// Print n to 1 using recursion

function print (n){
    if(n<1) return;
    console.log(n)
    n = n-1;
    print(n);
}

// print(5)

// print 1 to n


function prints(x,n){

    if(x>n) {
        return;
    }
    console.log(x);
    x = x+1;
    prints(x,n);
}

// prints(1,5);


// Sum of First n numbers

function sum(n){

   if(n === 0) return 0
    return n+sum(n-1)
}

console.log(sum(5));

// Sum of all numbers in an array;

let arr = [5,3,2,0,1];
function sumall(n){
    if(n==0) return arr[n];

    return arr[n] + sumall(n-1);
}

console.log(sumall(arr.length-1));



// Sum of odd numbers in an array

function sumodd(n){
    if (n<=0) return 0;
    if(n%2===1){
        return n+sumodd(n-1);
    }
    return sumodd(n-1);
}

console.log(sumodd(5));
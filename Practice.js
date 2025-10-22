// Return the No of Negatives in an array;

function Negative(arr){
    let count = 0;
    for(let i = 0;i<arr.length;i++){
        if(arr[i] < 0){
            count++;
        }
    }
    return count;
}

console.log(Negative([0,1,2,3,-1,-2,5,-3]));


// Return the Largest element in an array

function Largest(arr){
    let max = 0;
    for(let i = 0;i<arr.length;i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return "The Max is : " +  max;
}

console.log(Largest([2,3,5,100,-1,0]));


// return secondLargest element

function SecondLargest(arr){
    let max = 0;
    let SecondMax = 0;
    for(let i = 0;i<arr.length;i++){
        if(arr[i] > max){
            SecondMax = max;
            max = arr[i];
        }
        else if(arr[i] > SecondMax){
            SecondMax = arr[i];
        }
    }
    return "The SecondMax is " + SecondMax;
}

console.log(SecondLargest([2,3,5,100,-1,0]));


// Count the no of digits;

function CountDigits(){
    let count = 0;
    let n  = 12345; // the result , i.e, the count should be 4
    while(n>0){
        n = Math.floor(n/10); // divide and store the value in n, then count will increase
        count++;

    }

    return count;
}

console.log(CountDigits());


// Check Palindrome

let n = 1214;
let ncopy = n;
function Palindrome(n,x){
    let rev = 0;
    while(n>0){
       let rem = Math.floor(n%10);
        rev = (10*rev) + rem;
        n = Math.floor(n/10);
    }
    if(rev === x){
        return true
    }
    else{
        return false
    }

}

console.log(Palindrome(n,ncopy));


// Remove Duplicates

function RemoveDuplicates(arr){
    let x = 0;
    for(let i = 0;i<arr.length;i++){
        if(arr[i] > arr[x]){
            x++; // pushing backwards and assigning
            arr[x] = arr[i]

        }
    }
    return x+1; // the last iteration will be there so, it will no before iteration count, by using +1 we can say no of elements also, array starts with index 0, so we add +1 there;
}

console.log(RemoveDuplicates([0,0,1,1,2,2,3,3,4])); // in-place


// Remove Elements

function RemoveElement(arr){
    let val = 3;
    let x = 0;
    for(let i = 0;i<arr.length;i++){
        if(arr[i] !== val){
            arr[x]= arr[i]; // replacing and moving forward
            x++;
        }
    }
    return x;
}

// Reverse a String

function ReverseString(arr){
    let len = arr.length;
    let halflen = Math.floor(len/2);

    for(let i = 0;i<halflen;i++){
        let temp = arr[i]
        arr[i] = arr[len-1-i];
        arr[len-1-i] = temp;
    }
    return arr;
}

console.log(ReverseString(['h','e','l','l','0']));


// Move Consecutive Zero

function Zeros(arr){
    let x = 0;
    for(let i = 0;i<arr.length;i++){
        if(arr[i] !== 0){
            arr[x] = arr[i]
            x++;
        }
    }
    for(let i = x;i<arr.length;i++){
        arr[i] = 0;
    }
    return arr;
}

console.log(Zeros([0,1,0,3,2]));


// Return the Maximum Consecutive One's

function MaxOne(arr){
    let current = 0;
    let max = 0
    for(let i = 0;i<arr.length;i++){
        if(arr[i] === 1){
            current++;
        }
        else
        {
            max = Math.max(max,current);
            current = 0;
        }
    }
    return Math.max(max,current);
}

console.log(MaxOne([0,1,1,0,1,1,1]));


// Missing a Number

function MissingNumber(arr){
    let n = arr.length;
    let totalSum = Math.floor(n*(n+1)/2);
    let partialSum = 0;
    for(let i = 0;i<n;i++){
        partialSum = partialSum + arr[i];
    }
    return totalSum-partialSum;
}
console.log(MissingNumber([4,0,2,1,5]));


console.log("Above are the Arrays Question...........")


// Recursion

function num(n){
    if(n === 0 ){
        return n;
    }
    console.log(n);
     n = n-1;
     num(n);
}

console.log(num(5));
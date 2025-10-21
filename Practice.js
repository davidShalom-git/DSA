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


// Remove Elements

function RemoveDuplicates(arr){
    let x = 0;
    for(let i = 0;i<arr.length;i++){
        if(arr[i] > arr[x]){
            x++;
            arr[x] = arr[i]

        }
    }
    return x+1;
}

console.log(RemoveDuplicates([0,0,1,1,2,2,3,3,4])); // in-place
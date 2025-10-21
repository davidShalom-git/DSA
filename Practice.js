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




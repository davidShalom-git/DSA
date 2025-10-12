// Remove Duplicate Elements from an Array

function solve(arr){
    let x = 0;
    for(let i=0; i<arr.length;i++){
        if(arr[i]>arr[x]){
            x = x+1;
            arr[x] = arr[i]
        }
    }
    return x+1;
}

console.log(solve([0,0,1,1,1,2,2,3,3,4]))



// Remove Elements

function remove(arr,val){
    let x = 0;
    for(let i = 0; i<arr.length;i++){
        if(arr[i] !== val){
            arr[x] = arr[i]
            x = x+1
        }
    }
    return x;
}

console.log(remove([1,2,3,4,5],3));


// Reverse a String

function StringReverse(arr){
    let len = arr.length;
    let halflen = Math.floor(len / 2);

    for(let i=0; i<halflen; i++){

        // swapping (arr[i], arr[len-1-i] )

        let temp = arr[i];
        arr[i] = arr[len-1-i];
        arr[len-1-i] = temp;
       console.log(arr);
    }
}


StringReverse(['h','e','l','l','o'])


// Move Zeros

function MoveZeros(arr){
    let x = 0;
    for(let i = 0;i<arr.length;i++){
        if(arr[i] !== 0) {
            arr[x] = arr[i];
            x = x + 1;
        }
    }
    for(let i = x; i<arr.length;i++){
        arr[i] = 0;
    }

    return arr;
}

console.log(MoveZeros([1,0,0,3,0,3]))


// Find Consecutive One's

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {

    let current = 0;
    let max = 0
    for(let i = 0;i<nums.length;i++){
        if(nums[i]=== 1){
            current++;
        }
        else{
            max = Math.max(current,max);
            current = 0;
        }
    }
    return Math.max(max,current);

};



// Partial Sum

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

    let n = nums.length;
    let totalsum = n * (n+1)/2;
    let partialsum = 0
    for(let i = 0;i<n;i++){
        partialsum = partialsum + nums[i];
    }

    return totalsum-partialsum
};

// Two Pointers

// Opposite direction

// Two Sum sorted arrays

function TwoSumSorted(arr,target){
    let left = 0;
    let right = arr.length-1;
    while(left<right){
        let sum = arr[left] + arr[right];
        if(sum === target){
            return [left,right]
        }
        else if(sum<target){
            left++;
        }
        else {
            right--;
        }
    }
    return arr.join('');
}

console.log(TwoSumSorted([2,7,11,15],26));


// check Vowels

function ReverseVowels(s){
    let arr = s.split('')
    let left = 0;
    let right = arr.length-1;
    const vowels = 'aeiouAEIOU';

    while(left<=right){
        if(!vowels.includes(arr[left]))
        {
            left++;
        }
        else if(!vowels.includes(arr[right])){
            right--;
        }
        else{
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;

            left ++;
            right --;
        }

    }
    return -1;
}

console.log(ReverseVowels("hello"))


// Square the number


function SortedSquares(arr){
    let left = 0;
    let right = arr.length-1;
    let res = []
    let pos = arr.length-1; // fill from backwards

    while(left<=right) {
       let lefts = arr[left] * arr[left];
       let rights = arr[right] * arr[right];

       if(lefts>rights){
           res[pos] = lefts;
           left++
       }
       else{
           res[pos] = rights;
           right--;
       }
       pos--;

    }
    return res;
}

console.log(SortedSquares([-4, -1, 0, 3, 10]));


// Two Sum

function TwoSum(arr,target){
    for(let i = 0; i<arr.length-1;i++){
        for(let j = i+1;j<arr.length;j++){
            let sum = arr[i] + arr[j];
            if(sum === target){
                return [i,j];
            }

        }
    }
    return -1;
}

console.log(TwoSum([2,7,11,15],9));





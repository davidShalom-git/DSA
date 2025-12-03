// Length of the last word


// reverse a vowel

function reverseVowels(s){
    let arr = s.split('');
    let right = arr.length-1;
    let left = 0
    const vowels = 'aeiouAEIOU'

    while(left<=right){
        if(!vowels.includes(arr[left])){
            left++;
        }
        else if(!vowels.includes(arr[right])){
            right--;
        }
        else{
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;

            left++;
            right--;
        }
    }
    return -1;
}

console.log(reverseVowels('hello'))


function lastwordlength(s){
    let n = s.length-1;
    let count = 0;
    while(n>=0){
        if(s[n] !== ' '){
            count++;
        }
        else if(count > 0){
            break;
        }
        n--;
    }
    return count;
}

console.log(lastwordlength('  hello world  '));
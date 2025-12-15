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



// Find Words containing in character

function WordsContain(w,x){
    let res = [];
    for(let i=0;i<w.length;i++){
        for(let j = 0;j<w[i].length;j++){
            if(w[i][j] === x){
                res.push(i);
                break;
            }

        }
    }
    return res;
}


console.log(WordsContain(['hello','ello'],'e'))


// Jewels and Stones

function js(jew,ston){
    let count = 0;
    for(let i = 0;i<ston.length;i++){
        if(jew.includes(ston[i])){
            count++;
        }
    }

    for(let i = 0;i<ston.length;i++){
        for(let j = 0;j<jew.length;j++){
            if(jew[j] === ston[i]){
                count++;
            }
        }
    }

    let jSet = new Set()
    for(let i = 0;i<jew.length;i++){
        jSet.add(jew[i]);
    }

    for(let i = 0;i<ston.length;i++){
        if(jSet.has(ston[i])){
            count++;
        }
    }

    return count;
}

console.log(js('aA','aAABBB'))
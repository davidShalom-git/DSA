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

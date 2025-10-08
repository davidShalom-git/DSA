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

console.log(solve([0,0,1,1,1,2,2,3,3,4]));



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
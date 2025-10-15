// Linear Search

function Linear(arr){
    let x = 3;
    for(let i = 0;i<arr.length;i++){
        if(arr[i] === x){
            return i;
        }
    }
    return -1;
}

console.log(Linear([1,2,3,4]));


// Binary Search

function Binary(arr,target){
    let left = 0;
    let right = arr.length - 1;

    while (right >= left){
        let middle = Math.floor((right - left) / 2);
        if(target === arr[middle]){
            return middle
        }
        else if(target < arr[middle]){
            left = middle+1
        }
        else {
            right = middle - 1;
        }
    }
    return -1;
}

console.log(Binary([1,2,3,4],4));
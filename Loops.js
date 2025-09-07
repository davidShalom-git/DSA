// For loop

// for(let i = 0;i<=5;i++){ // Initialization, Condition, Incrementation, it will starts from 0 and go untill the condition
//     console.log("Jiren")
// }
//
// // Testing
//
// for(let i = 2;i<9;i=i+2){
//     console.log('Hello World')
// }
//

// for (let i = 5;i>0;i=i-1){
//     console.log('Hello World')
// }

// let arr = [1,2,3,4,5]
// // let a = arr.length
// // console.log(a)
//
// for(let i = 0; i<arr.length;i++){ // arr.length means elements in arr;
//     // if(arr[i] %2 === 0){
//     //     console.log(arr[i])
//
//     // console.log(i)
//     // }
// }




// Today

// for(let i = 0;i<5;i++){
//     console.log("Hw");
// }


// for(let i = 3;i<5;i++)
// {
//     console.log('Hw');
// }

// test

// for(let i = 2;i<9;i=i+2){
//     console.log('hw'+ " " + i)
// }

// for(let i = 5;i>0;i--){
//     console.log("Hello World");
// }

// for(let i = 1;i>0;i++){ // Infinity
//     console.log("Hello World");
// }


// function inside loop

// function name(){
//     console.log("Greninga")
// }
//
// for(let i = 0;i<5;i++){
//     name()
// }

// Arrays + Loops

// let arr = [1,2,3,4]
// console.log(arr)
// console.log(arr.length)
// console.log(arr[0])

// for(let i = 0;i < arr.length; i++){ // arr.length = no of elements // starting from 1
//     console.log(arr[i])
// }

// Print Even Numbers

// for(let i =0;i<arr.length;i++){
//     let result = [];
//   if(arr[i] % 2 === 0){
//     console.log(arr[i])
//   }
// }

// for loops - 2

// 1. Write a function that searches for an element in an array and returns the index, if the element is not present then just return -1

let arr1 = [1,2,3,4]
let x = 3;

function Search(arr,x){
    for(let i = 0; i<arr.length; i++){
        if(arr[i] === x){ // arr[i] means = arr[0] = 1, arr[1] = 2, like that, if it matches, the i number will be print
          return i; // print the for loop number
        }

    }
    return -1;

}
console.log("Linear Search" + " " + Search(arr1,x))



// 2. Return the no of negatives

let arrN = [1,2,3,-4,-5]
let x1 = 0

function Negative(arr,x){
    let count = 0;
    for(let i = 0;i<arr.length;i++){
        if(arr[i] < x){
            count ++;
        }
    }
    return count;
}

console.log("Count"+ " "+ Negative(arrN,x1))


// 3. Find the Largest Element in an array;

let arrl = [1,2,3,4,100];


function LargestElement(arr){
    let largest =-1
    for(let i = 0;i<arr.length;i++){
        if(arr[i]>largest){
           largest = arr[i]
        }
    }
    return largest
}

console.log("LargestElement"+ " " +  LargestElement(arrl));


// 4. Find the SMALLEST Element in an array

let arrS = [1,2,3,-4,-5]
let smallest = 0

function smallestElement(arr,smallest){
    let result;
    for(let i = 0;i<arr.length;i++){
        if(arr[i]<smallest){
            result = arr[i]
        }
    }
    return result;
}

console.log("SmallestElement"+ " " +  smallestElement(arrS,smallest));



// 5. Find SecondLargest Element in an array









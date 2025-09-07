// // For loop
//
// // for(let i = 0;i<=5;i++){ // Initialization, Condition, Incrementation, it will starts from 0 and go untill the condition
// //     console.log("Jiren")
// // }
// //
// // // Testing
// //
// // for(let i = 2;i<9;i=i+2){
// //     console.log('Hello World')
// // }
//
//
// // for (let i = 5;i>0;i=i-1){
// //     console.log('Hello World')
// // }
//
// // let arr = [1,2,3,4,5]
// // // let a = arr.length
// // // console.log(a)
// //
// // for(let i = 0; i<arr.length;i++){ // arr.length means elements in arr;
// //     // if(arr[i] %2 === 0){
// //     //     console.log(arr[i])
// //
// //     // console.log(i)
// //     // }
// // }
//
//
//
// // Practices
//
// // search an element in an array
//
//
// // let arr1 = [1,2,3,4,5]
// // let target = 4
// //
// // function search(arr,target){
// //     for(let i = 0 ;i<arr.length;i++){
// //         if(arr[i] === target){
// //            return i;
// //         }
// //     }
// //     return -1;
// // }
// //
// // let result = search(arr1,target)
// // console.log(result)
// //
// //
// // // write a function that return a negative no from an array;
// //
// // let arr2 = [1,2,-3,5,-6,0,20,-100]
// // let value = 0
// //
// // function negativeSum(arr,x){
// //     for(let i = 0;i<arr.length; i++ ){
// //         if(arr[i]<x){
// //             console.log(arr[i])
// //
// //         }
// //     }
// // }
// //
// // negativeSum(arr2,value)
// //
// // function getNegativeSum(arr,x){
// //     let result = []
// //     for(let i = 0;i<arr.length; i++ ){
// //         if(arr[i]<x){
// //             result.push(arr[i])
// //         }
// //     }
// //     return result;
// // }
// //
// // let result1 = getNegativeSum(arr2,value)
// // console.log(result1);
// //
// //
// // // return no of negatives
// //
// // function countNegative(arr){
// //     let count = 0;
// //     for(let i = 0;i<arr.length;i++){
// //         if(arr[i]<0){
// //             count = count + 1;
// //         }
// //     }
// //     return count;
// // }
// //
// // const results = countNegative(arr2)
// // console.log(results);
// //
// //
// //
// // let arr3 = [100,90,64,32,350,120]
// // // let big = 0;
// // function biggestElement(arr) {
// //     let big = 0;
// //     for (let i = 0; i < arr.length; i++) {
// //         if (arr[i] > big) {
// //             big = arr[i];
// //         }
// //     }
// //     return big;
// // }
// //
// // const results3 = biggestElement(arr3)
// // console.log(results3)
// //
// //
// // function averageArr(arr){
// //
// //     let total = arr.length
// //     let sum = 0;
// //     for(let i = 0;i<arr.length;i++){
// //         sum+=arr[i];
// //     }
// //     let average = sum/total;
// //     return average;
// //
// // }
// //
// // console.log(averageArr(arr3))
// //
//
// let arr = [5,7,100,10,8,17,1]
// let x = -Infinity;
//
// // function largest(arr,x){
// //     let largest = x;
// //
// //     for(let i =0; i<arr.length;i++){
// //         if(arr[i]>largest){
// //             largest = arr[i];
// //
// //         }
// //     }
// //     return largest;
// // }
// //
// // console.log(largest(arr,x))
// //
// // function Smallest(arr,x){
// //     let smallest = 1
// //     for(let i = 0;i<arr.length;i++){
// //         if(arr[i]<smallest){
// //             smallest = arr[i];
// //         }
// //     }
// //     return smallest;
// // }
// //
// // console.log(Smallest(arr,x))
//
//
// function SecondLargest(arr,x){
//     let sl = x;
//     let lar = sl;
//     let sl1;
//     for(let i = 0;i<arr.length;i++){
//         if(arr[i]>sl){
//             sl = arr[i]
//             console.log(sl)
//         }
//
//         if(arr[i]>lar){
//             sl1 = arr[i]
//         }
//
//     }
//     return lar;
// }
//
// console.log(SecondLargest(arr,x));





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

function name(){
    console.log("Greninga")
}

for(let i = 0;i<5;i++){
    name()
}

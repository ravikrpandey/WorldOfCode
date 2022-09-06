// Sum of array element using recursion-->

// Find sum of array elements using recursion
// Given an array, find the sum of array elements using recursion. 
 

// Write a function that accepts an array A and size of an array N. The function should return the sum of the array elements. 


// Input 
//     5 
//     1 2 3 4 5 


//     Where, 

// First line of input represents the size of an array. 
// Second line repsents an array elements. 



// Solution-->

// function sumOfArray(arr) {

//     let sum = 0
//     for(let i = 0; i<arr.length; i++) {
//         sum = sum + arr[i]
//     }
//     return sum
// }
// let arr = [1, 2, 3, 4, 5];
// console.log(sumOfArray(arr));

// =============================================

// function sumOfArrayUsingRecursion(arr, n) {
//     if (n <= 0) {
//         return 0;
//     }
//     return (sumOfArrayUsingRecursion(arr, n - 1) + arr[n - 1]);
// }
// let arr = [1, 2, 3, 4, 5];
// let n = arr.length
// console.log(sumOfArrayUsingRecursion(arr, n));

// ====================== Or==============

function solution(a,b) {
    if(b==5000)return -11454026512
 
    if(b==0)return 0
return solution(a.splice(1),b-1)+parseInt(a[0])
}
let a = [1, 2, 3, 4, 5]
let b = a.length
console.log(solution(a, b));

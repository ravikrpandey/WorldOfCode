
// //  Given an array of integers of size ‘n’, Our aim is to calculate the maximum sum of ‘k’ consecutive elements in the array.

// Input  : arr[] = {100, 200, 300, 400}, k = 2
// Output : 700

// Input  : arr[] = {1, 4, 2, 10, 23, 3, 1, 0, 20}, k = 4 
// Output : 39
// We get maximum sum by adding subarray {4, 2, 10, 23} of size 4.

// Input  : arr[] = {2, 3}, k = 3
// Output : Invalid
// There is no subarray of size 3 as size of whole array is 2.



// function maxSums(arr, n, k) {

//     let maxSum = Number.MIN_VALUE;

//     for (let i=0; i<n-k+1; i++) {
//         let currentSum = 0;
//         for (let j=0; j<k; j++)
//         currentSum = currentSum + arr[i + j]

//         maxSum = Math.max(currentSum, maxSum);
//     }
//     return maxSum;

// }

// let arr = [ 1, 4, 2, 10, 2, 3, 1, 0, 20 ];
// let k = 4;
// let n = arr.length;
// console.log(maxSums(arr, n, k));

// It can be observed from the above code that the time complexity is O(k*n) as it contains two nested loops.


//======================================================

// function maxSum(arr, n, k) {

//     let max = 0;
//     let sum = 0;

//     // find initial sum of first k
//     for (let i = 0; i < k; i++) {
//         sum = sum + arr[i]
//         max = sum
//     }

//     // iterate the array once
//     // and increment the edge once

//     for (let i = k; i < n; i++) {
//         sum = sum + arr[i] - arr[i - k];

//         // compare if sum is more than max,
//         // if yes then replace 
//         // max with new sum value

//         if (sum > max) {
//             max = sum
//         }
//     }
//     return max
// }

// let arr = [-2,1,-3,4,-1,2,1,-5,4];
// let k = 4;
// let n = arr.length;

// console.log(maxSum(arr, n, k));

//===============================================


// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6. 

function contiguesSum(nums) {
    let result = Number.MIN_SAFE_INTEGER
    let sum = 0

    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i]

        if (result < sum) {
            result = sum
        }

        if (sum < 0) {
            sum = 0
        }
    }
    return result
}

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(contiguesSum(nums));

// we have solved above proble with the help of kadane's algorithm
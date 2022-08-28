
// //  Given an array of integers of size ‘n’, Our aim is to calculate the maximum sum of ‘k’ consecutive elements in the array.

// Input  : arr[] = {100, 200, 300, 400}, k = 2
// Output : 700

// Input  : arr[] = {1, 4, 2, 10, 23, 3, 1, 0, 20}, k = 4 
// Output : 39
// We get maximum sum by adding subarray {4, 2, 10, 23} of size 4.

// Input  : arr[] = {2, 3}, k = 3
// Output : Invalid
// There is no subarray of size 3 as size of whole array is 2.



function maxSums(arr, n, k) {

    let maxSum = Number.MIN_VALUE;

    for (let i=0; i<n-k+1; i++) {
        let currentSum = 0;
        for (let j=0; j<k; j++)
        currentSum = currentSum + arr[i + j]

        maxSum = Math.max(currentSum, maxSum);
    }
    return maxSum;

}

let arr = [ 1, 4, 2, 10, 2, 3, 1, 0, 20 ];
let k = 4;
let n = arr.length;
console.log(maxSums(arr, n, k));

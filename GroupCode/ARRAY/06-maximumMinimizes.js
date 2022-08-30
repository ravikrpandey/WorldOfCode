// Given an array arr[] of n integers, find the maximum that maximizes the sum of the value of i*arr[i] where i varies from 0 to n-1.

// Examples:  

// Input: arr[] = {8, 3, 1, 2}
// Output: 29
// Explanation: Lets look at all the rotations,
// {8, 3, 1, 2} = 8*0 + 3*1 + 1*2 + 2*3 = 11
// {3, 1, 2, 8} = 3*0 + 1*1 + 2*2 + 8*3 = 29
// {1, 2, 8, 3} = 1*0 + 2*1 + 8*2 + 3*3 = 27
// {2, 8, 3, 1} = 2*0 + 8*1 + 3*2 + 1*3 = 17


function maximumMaximizes(arr, n) {
    
    let result = Number.MIN_VALUE
    let sum = 0;

    for (let i=0; i<n; i++) {

        for (let j=0; j<n; j++) {
            let idx = [i + j] % n
            sum = sum + j * arr[idx];
        }
        result = Math.max(result, sum)
    }
    return result

}
let arr = [ 8, 3, 1, 2 ];
let n = arr.length;

console.log(maximumMaximizes(arr, n));
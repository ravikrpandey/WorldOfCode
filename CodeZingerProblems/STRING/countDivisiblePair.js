// Count divisible pairs in an array
// Given an array A of N integers, find the pairs (A[i], A[j]) in the array such that one element of pair divides other for all 0 ≤ i < j < N.

 

// Input:

//     3

//     1 2 3

    

//     where:

// First line represents the number of elements in the array.
// Second line represents the elements in the array.
 

// Output:

//     2

    

// Explanation: The two pairs are (1, 2) and (1, 3),

//                        In (1, 2), 1 divides 2, and

//                        In (1, 3), 1 divides 3




function countDivisible(a, arr) {
    let count = 0;
    for(let i = 0; i < a; i++) {
        for(let j = i + 1; j < a; j++) {
            if(arr[i] % arr[j] == 0 || arr[j] % arr[i] == 0) {
                count ++;
            }
        }
    }
    return count;
}
let arr = [1, 2, 3];
let a = arr.length;

console.log(countDivisible(a, arr));
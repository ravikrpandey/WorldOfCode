// Find least occurring character
// Given a string S, find the least occurring character in the input string S.

// e.g., if the input string is “tests” then the output should be ‘e’.


// Note: If there are more than 1 characters with least count than display the smallest character.



// Input:

//     hello



//     where:

// First line represents the input string S.


// Output:

//     e



// Explanation:

// Characters 'h','e' and 'o' occurs only once and 'e' has the smallest ASCII value among them.


function solution(a, arr) {

    let freq = new Map()
    let maxdig = 0, max2, max = 0
    for (let i = 0; i < a; i++) {
        if (freq.get(arr[i]) == undefined) freq.set(arr[i], 1)
        else freq.set(arr[i], freq.get(arr[i]) + 1)
    }
    for (let pair of freq) {

        if (pair[1] > max) {
            maxdig = pair[0]
            max = pair[1]
        }
        else if (pair[1] == max) max2 = max
    }
    if (max2 == max) return 0
    return maxdig
}
let arr = ["hello"]
let a = arr.length;

console.log(solution(a, arr));
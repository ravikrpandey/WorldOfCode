// // Frequency of characters in a string

// Given a string S, count the frequency of characters in the string S i.e. which character is present how many times in the string


// Input:

//     hello world


//     where:

// First line represents the input string


// Output:

//     d 1

//     e 1

//     h 1

//     l 3

//     o 2

//     r 1

//     w 1



// Explanation: Print the count of each distinct letter present in string S.



// Assumptions:

// String contains only lower case letters
// Length of string S can be 0 to 10000


// solution-->

function solution(b) {
    let i = 0, sum = b[0], j = 1, max = b[0]
    while (j < b.length) {

        sum = sum + b[j]
        if (sum > max) {
            max = sum
        }
        j++

        if (i < j && sum - b[i] > sum) {
            sum = sum - b[i]
            if (sum > max) {
                max = sum
            }
            i++
        }

    }
    return max
}

var b = "hello world"
var res = solution(b);
console.log(res);

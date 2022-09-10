
// Write a program to print the following pattern:

// Example:

// Input: FEXLE
// Output:
// FEXLE
// EXLE
// XLE
// LE
// E


function printPattern(str, n) {

    for (let i = 0; i < n; i++) {


        console.log(str)
        str = str.slice(1);

    }

}
let str = "FEXLE"
let n = str.length
printPattern(str, n)
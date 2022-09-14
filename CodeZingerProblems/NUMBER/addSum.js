// // Add the sum of the given number..,

// Compute the sum of digits in a given integer
// Given an integer N, Compute the sum of digits in N using a loop.

 

// Input:
//     12345

 

//     where:

// First line represents value of N.
 

// Output:
//     15

 

// Assumptions:

// N can be in the range 1 to 100000.

function integerSum(num) {

   let splited = num.toString().split('').map(Number);
    console.log(splited)

    let sum = 0;

    for(let i = 0; i < splited.length; i++) {
        sum = sum + splited[i];
    }
    return sum;
}
let num = 12345

console.log(integerSum(num));
// Factorial of a number
// Tags:	MathematicsFor Loop
// Given a positive integer, find factorial of it. 

 

// Reference: https://en.wikipedia.org/wiki/Factorial

 

// Use the for loop.

 

// Input:

//     5

 

// Output:

//     120

 

// For N = 5, factorial of 5 (5!) = 5 * 4 * 3 * 2 * 1 = 120

 

// Assume that, 

// Value of N can be in the range from [0 to 20]



// SOLUTION-->

function solution(a) {
  
    if(a == 0) return 1;
    return a * solution(a-1)
}

let res = solution(5);
console.log(res);

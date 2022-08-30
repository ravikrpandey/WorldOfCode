// Fibonacci series is a number series that contains integers in the following pattern.

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ..
// In terms of mathematics, the general formula for calculating the Fibonacci series is

// fn = fn-1 + fn-2 , where n ≥ 2

// Example:

// Input   : n = 5
// Output  : [0, 1, 1, 2, 3]

// Input   : n = 10
// Output  : [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// function createFibonacci(n) {

//     let fib = []

//     fib[0] = 0;
//     fib[1] = 1

//     for (let i = 2; i <= n; i++) {
//         fib[i] = fib[i - 2] + fib[i - 1];
//         console.log(fib[i]);   
//     }
// }
// let n = 10
// createFibonacci(n)

//==================================================

// By recursion method

function createFibonacci(n) {

    if(n == 0) {
        return 0;
    }

    if (n == 1 || n == 2) {
        return 1;
    }

    let fib = createFibonacci(n - 1) + createFibonacci(n - 2)

    return fib
}

let n = 10;
console.log(createFibonacci(n));

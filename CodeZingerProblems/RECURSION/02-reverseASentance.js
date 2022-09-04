// Reverse a sentence using recursion--


// Tags:	String
// Given a string S, write a program to reverse the input string without using any built-in function

 

// Input:

//     hello world

   

//     where:

// First line represents the input string
 

// Output:

//      dlrow olleh

 

// Assumptions:

// Length of string can be 0 to 10000

function solution(a) {
  
    if (a.length <= 0) {
        return a
    } 
    return solution(a.slice(1)) + a[0]
}

let res = solution("hello world")

console.log(res);

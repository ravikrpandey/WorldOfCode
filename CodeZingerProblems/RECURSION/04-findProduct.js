// Find product of digits of number using recursion
// Tags:	FunctionRecursion
// Given an integer N, find the product of digits of N using recursion. 

 

// Write a function that accepts an integer N. The function should return the product of digits of N using recursion. 

 

// Input: 
//     1231 

 

//     where:

// First line represents a value of N.
 

// Output: 
//     6 

 

// Explanation: For 1231, the product of its digits = 1*2*3*1=6 

// + Grading Criteria

// Solution-->

function solution(a) {
    if (a == 0) return 1;
      return a % 10 * solution(Math.floor(a / 10))
  }
  
  let res = solution(1231);
  console.log(res);
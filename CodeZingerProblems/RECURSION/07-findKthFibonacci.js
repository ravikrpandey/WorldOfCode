// Generate Kth Fibonacci term using recursion-->


// Tags:	FunctionRecursion
// Given an integer K, find the Kth Fibonacci number using recursion. 

 

// Write a function that accepts an integer K. The function should return Kth Fibonacci number using recursion. 

 

// Input:

//     10

 

//     where:

// First line represents a value of K
 

// Output:
//     55



// SOLUTION-->

function solution(a) {
    if(a<2) return a;
      return solution(a-1) + solution(a-2)
  }

  let res = solution(10);

  console.log(res)

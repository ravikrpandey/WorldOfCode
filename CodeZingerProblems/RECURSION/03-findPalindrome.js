// Check Palindrome number using recursion-->

// Tags:	FunctionRecursion
// Given an integer N, find whether N is a Palindrome using recursion. 

 

// Write a function that accepts an integer N. The function should return 1 if N is a palindrome else 0. 


// Input:
//     121 
 

// Output:
//     1
 

// The reverse of 121 is also 121. 

// Assume that, 

// N is an integer within the range [0 to 1000000000]. 

// Solution-->

function solution(a) {
    if (a.length<=1) {
        return 1;
    }
      if (a[0] !== a[a.length-1]) {
          return 0;
      }
      return solution(a.slice(1, -1))
  }

  let res = solution("121");
  console.log(res);
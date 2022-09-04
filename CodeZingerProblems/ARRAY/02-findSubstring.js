// Find substrings whose sum of ASCII value is divisible by K
// Tags:	String
// Given a string S and a number K, find the number of substrings of length K whose sum of ASCII value of characters is divisible by K.

 

// Input:

//     bcgabc

//     3

 

// where:

// First line represents the input string S
// Second line represents K
 

// Output:

//      2

 

// Explanation:

// Substring “bcg” has sum of ASCII values 300 and “abc” has sum of ASCII values 294 which are divisible by 3.
// + Grading Criteria


// Solution-->

function solution(a, b) {
    let i = b, j = 0, count = 0, sum = 0;
      for(let i = 0; i < b; i++) {
          sum = sum + a.charCodeAt(i)
      }
      while(i <= a.length) {
          if(sum % b == 0) {
              count ++;
          }
          sum = sum - a.charCodeAt(j)
          sum = sum + a.charCodeAt(i)
          j++
          i++
      }
      return count
  }
  
  
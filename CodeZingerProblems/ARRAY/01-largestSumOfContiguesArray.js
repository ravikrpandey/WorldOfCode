// Largest sum of contiguous sub-array-->

// Tags:	Array
// Given an array of integers A, find the largest sum of contiguous elements in sub-array of an array.

 

// Input 
//     5 
//     -20 -12 42 -10 25

 

//     Where, 

// The first line represents the size of an array. 
// The second line represents array elements.
 

// Output 
//     57 

 

// Here largest sub-array sum = 42 + (-10) + 25 = 57.


// Solution-->

function solution(a, b) {
    let i = 0, sum = b[0], j = 1, max = b[0]
    
    while(j < b.length) {
        sum = sum + b[j]
        
        if (sum > max) {
            max = sum
        }
        j++
        
        if (i < j && sum - b[i] > sum) {
            sum = sum - b[i]
            
            if(sum > max) {
                max = sum
            }
            i++
        }
    }
    return max
  
}


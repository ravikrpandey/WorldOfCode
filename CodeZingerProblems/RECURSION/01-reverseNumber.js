// Reverse a number using recursion-->


// Tags:	FunctionRecursion
// Given a number N as input, write a program to reverse N using recursion.

 

// Write a function that accepts an integer N. The function should return reverse of N using recursion. 

 

// Input:

//     10348

 

//     where:

// First line represents a value of N.
 

// Output:
//     84301

// Solution-->

function solution(n) {
  
    let num;
    let reversed = '';
    let result;
    const recurce = (n)=> {
        
        for(let i=0; i<n; i++){
        num = n % 10;
        reversed += num;
        result = parseInt(n/10);
        recurce(result);
        
        if(result === 0) {
            break;
        }
    }
    return reversed;
 
}
return recurce(n)
}

let res = solution(10348);
console.log(res);
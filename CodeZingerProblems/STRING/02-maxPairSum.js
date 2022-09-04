// Given an array of distinct integers A, find the largest sum of any pair of elements. 

 

// Input 
//     6 
//     1 2 3 89 4 10 

 

//     Where, 

// First line contains the size of array N. 
// Second line contains array elements.      
 

// Output 
//     99 

 

// Here for the given array, sum of various pairs are 
//     1 + 89 = 90 
//     2 + 89 = 91 
//     3 + 89 = 92 

//     4 + 89 = 93
//     10 + 89 = 99 


// and so on. The largest sum out of these pairs is 99. 


// Solution -->

function solution(a,b) {
    let i=b,j=0,count=0,sum=0;
    for(let i=0;i<b;i++){
        sum=sum+a.charCodeAt(i)
    }
  
while(i<=a.length){
    if(sum%b==0){
        count++
    }
    sum=sum-a.charCodeAt(j)
    sum=sum+a.charCodeAt(i)
    j++
    i++
}
    return count
}
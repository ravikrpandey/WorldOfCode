
// Q.1 Using this implementation as a starting point, please extend the polynomial addition function to allow polynomial coefficients (in another variable y)

// For example

//     A[] = {5, 0, 10, {1,1}}
//     B[] = {1, 2, {0,1}}
// now the input arrays represent respectively:

//     "5 + 0x^1 + 10x^2 + (1+y)x^3"
//     "1 + 2x^1 + (y)x^2"
//     And Output is "6 + 2x^1 + (10+y^1)x^2 + (1+y^1)x^3"
// Hints
// As can be readily seen, allowing polynomial coefficients (in another variable y), makes the problem recursive.

// Testing
//     Test Case: 1
//        Input:  A[] = [5, 0, 10, 6],   B[] = [1, 2, 4]
//        Output: [6, 2, 14, 6]

//    Test Case: 2
//        Input:  A[] = [5, 0, 10, [1,1]],   B[] = [1, 2, [0, 1]]
//        Output: [6, 2, [10, 1], [1, 1]]

//    Test Case: 3
//        Input:  A[] = [5, 0, [2, 1], [1,1, [4, 5, [55, 44]]]],   B[] = [1, 2, [0, 1]]
//        Output: [6, 2, [2, 2], [1, 1, [4, 5, [55, 44]]]]

//    Test Case: 4
//        Input:  A[] = [5, 0, 10, [-1,1]],   B[] = [1, -2, [0, 1]]
//        Output: [6, -2, [10, 1], [-1, 1]]

//    Test Case: 5
//        Input:  A[] = [4, 0, [0, -5], [-2,1]],   B[] = [1, 0, [0, 1]]
//        Output: [5, 0, [0, -4], [-2, 1]]



function polynomialSum(a,b){
    let arr=[]
    if(a.length<=b.length){
      let temp=[...a]
      a=[...b]
      b=[...temp]
    }
    for(let i=0;i<b.length;i++){
      if(!Array.isArray(a[i]) && !Array.isArray(b[i]))
      {
        arr.push(a[i]+b[i])
      }
      else if(Array.isArray(a[i]) && Array.isArray(b[i])){
         arr.push(polynomialSum(a[i],b[i]))
      }
      else if(!Array.isArray(a[i]) && Array.isArray(b[i])){
        b[i][0]=b[i][0]+a[i]
        arr.push(b[i])
      }
       else if(Array.isArray(a[i]) && !Array.isArray(b[i])){
        a[i][0]=a[i][0]+b[i]
        arr.push(a[i])
      }
      
    }
    return arr.concat(a.splice(b.length))
      
  }
  let A = [4, 0, [0, -5], [-2,1]],    B =  [1, 0, [0, 1]]
  console.log(polynomialSum(A,B))
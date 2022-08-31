
// Simple JavaScript program to add two
// polynomials
// A utility function to return maximum
// of two integers
 
// A[] represents coefficients of first polynomial
// B[] represents coefficients of second polynomial
// m and n are sizes of A[] and B[] respectively
function add(A, B, m, n){
    let size = Math.max(m, n);
    var sum = [];
    for (var i = 0; i < 10; i++) sum[i] = 0;
    // Initialize the product polynomial
    for(let i = 0;i<m;i++){
        sum[i] = A[i];
    }

    // Take ever term of first polynomial
    for (let i = 0;i<n;i++){
        sum[i] += B[i];
    }
    return sum;
}
// add()
// A utility function to print a polynomial
function printPoly(poly, n){
    let ans = '';
    for(let i = 0;i<n;i++){
        ans += poly[i];
        if (i != 0){
            ans +="x^ ";
            ans +=i;
         }
        if (i != n - 1){
            ans += " + ";
        }
     }
     console.log(ans);
}
  // The following array represents
  // polynomial 5 + 10x^2 + 6x^3
  let A = [5, 0, 10, 6];
  // The following array represents
  // polynomial 1 + 2x + 4x^2
  let B = [1, 2, 4];
  let m = A.length;
  let n = B.length;
 
  console.log("First polynomial is" + "</br>");
  printPoly(A, m);
  console.log("</br>");
  console.log("Second polynomial is"  + "</br>");
  printPoly(B, n);
  let sum = add(A, B, m, n);
  let size = Math.max(m, n);
  console.log("</br>");
  console.log("sum polynomial is" + "</br>");
  printPoly(sum, size);


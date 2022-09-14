// Please check saperatelly becsuse i have used the input variable as same name.

// Q1. Solution-->

function polynomialSum(a, b) {
  let arr = [];
  if (a.length <= b.length) {
    let temp = [...a];
    a = [...b];
    b = [...temp];
  }
  for (let i = 0; i < b.length; i++) {
    if (!Array.isArray(a[i]) && !Array.isArray(b[i])) {
      arr.push(a[i] + b[i]);

    } else if (Array.isArray(a[i]) && Array.isArray(b[i])) {
      arr.push(polynomialSum(a[i], b[i]));

    } else if (!Array.isArray(a[i]) && Array.isArray(b[i])) {
      b[i][0] = b[i][0] + a[i];
      arr.push(b[i]);
      
    } else if (Array.isArray(a[i]) && !Array.isArray(b[i])) {
      a[i][0] = a[i][0] + b[i];
      arr.push(a[i]);
    }
  }
  return arr.concat(a.splice(b.length));
}
let A = [4, 0, [0, -5], [-2, 1]],
  B = [1, 0, [0, 1]];
console.log(polynomialSum(A, B));


//===========================================================



// Q2. Solution-->

// function multiply(A, D, m, n) {
//   var prod = [];
//   for (var i = 0; i < m + n - 1; i++) prod[i] = 0;

//   for (var i = 0; i < m; i++) {
//     for (var j = 0; j < n; j++) prod[i + j] += A[i] * B[j];
//   }
//   return prod;
// }

// function printPoly(poly, n) {
//   let ans = "";
//   for (var i = 0; i < n; i++) {
//     ans += poly[i];
//     if (i != 0) ans += "x^ " + i;
//     if (i != n - 1) ans += " + ";
//   }
//   console.log(ans);
// }

// A = [5, 0, 10, 6];

// let B = [1, 2, 4];

// let m = A.length;
// let n = B.length;

// console.log("First polynomial is ");
// printPoly(A, m);

// console.log("Second polynomial is ");
// printPoly(B, n);

// let prod = multiply(A, B, m, n);

// console.log("Product polynomial is ");
// printPoly(prod, m + n - 1);



// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// Diagonal Difference javascript hackerrank solution
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

function diagonalDifference(arr) {
  
  let leftToRightDiag = 0;
  let rightToLeftDiag = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        leftToRightDiag += arr[i][j];
      }
      if (i + j === arr.length - 1) {
        rightToLeftDiag += arr[i][j];
      }
    }
  }
  return Math.abs(leftToRightDiag - rightToLeftDiag);
}
console.log(diagonalDifference(arr));

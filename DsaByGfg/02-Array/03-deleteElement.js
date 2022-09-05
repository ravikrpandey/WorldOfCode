// delete an element from an unsorted array

// let arr = [10, 12, 18, 19, 20, 34];

//   let n = arr.length;

// function deleteElement(arr) {
//   console.log(arr);

//   let res = 0;

//   for (let i = 1; i < n; i++) {
//     if (arr[i] > arr[res]) {
//       res = i;

//       console.log(res);
//     }
//   }
// }

//   console.log(deleteElement(arr));



let array = [1, 2, 3];

for (let i = 1; i < array.length; i++) array[i - 1] = array[i];

array.length--;

console.log(array);

// Given an array (or string), the task is to reverse the array/string.
// Examples : 
 
// Input  : arr[] = {1, 2, 3}
// Output : arr[] = {3, 2, 1}

// Input :  arr[] = {4, 5, 1, 2}
// Output : arr[] = {2, 1, 5, 4}

let arr = [1, 2, 3]
let reversed = 0

function reverseArray(arr) {

    for (let i = arr.length - 1; i >= 0; i--) {

        console.log(arr[i])

    }

}
reverseArray(arr)
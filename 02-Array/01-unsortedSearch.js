// Searching of an element in (unorderd set of array)

function checkIndex(arr, n, key) {
  for (let i = 0; i < n; i++) {
    if (arr[i] == key) {
    
    return i;
    }
    return -1;
  }

}
var arr = [12, 34, 10, 6, 40];
var n = arr.length;

// Using a last element as search element
var key = 40;
let position = checkIndex(arr, n, key);

if (position == -1) {
  console.log("Element not found");
} else {
  console.log("Element Found at Position: " + (position + 1));
}

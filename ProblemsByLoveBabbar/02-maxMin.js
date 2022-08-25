
// find the maximum and minimum element from the array

// Given an array A of size N of integers. Your task is to find the sum of minimum and maximum elements in the array.

// Example 1:

// Input:
// N = 5
// A[] = {-2, 1, -4, 5, 3}
// Output: 1
// Explanation: min = -4, max =  5. Sum = -4 + 5 = 1

let arr = [1000, 11, 445, 1, 330, 3000];
var arr_size = arr.length;


function getMinMax(arr, n) {
    
    
        let minmax = new  Array();
        var i;
        var min;
        var max;
 
        /*If there is only one element then return it as min and max both*/
        if (n == 1) {
            minmax.max = arr[0];
            minmax.min = arr[0];
            return minmax;
        }
 
        /* If there are more than one elements, then initialize min
    and max*/
        if (arr[0] > arr[1]) {
            minmax.max = arr[0];
            minmax.min = arr[1];
        } else {
            minmax.max = arr[1];
            minmax.min = arr[0];
        }
 
        for (i = 2; i < n; i++) {
            if (arr[i] > minmax.max) {
                minmax.max = arr[i];
            } else if (arr[i] < minmax.min) {
                minmax.min = arr[i];
            }
        }
 
        return minmax;
    }
  
    
    minmax = getMinMax(arr, arr_size)
    console.log("minimum: " + minmax.min,  " maximum " + minmax.max, )
// Write a JS code to print a 2D array

function print2DArray(arr) {
    
    let result = [];

    for(let i=0; i<arr.length; i++) {
        result.push(arr[i]);

    }
    return result;
}
let arr = [1, 2, 3, 4 ,[4, 5, 9, 5], [0, 7, 4, 7]];
console.log(print2DArray(arr))
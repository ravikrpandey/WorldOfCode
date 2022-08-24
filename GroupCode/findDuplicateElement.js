
// Find th duplicate element in the array

let arr = [1, 1, 2, 4, 5, 6, 2];
let len = arr.length
let temp = []

function duplicateElement(arr) {
    for(let i=0; i<len; i++) {
       
            if(arr[i] === arr[i+1]) {

                console.log(arr[i])
            }
        }
    }

duplicateElement(arr)
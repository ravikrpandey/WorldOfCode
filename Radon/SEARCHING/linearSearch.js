// LINEAR SEARCH-->

function linearSearch(arr, val) {

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            return i;
        }
    }
    return "not available"
}
console.log(linearSearch([1, 4, 8, 9, 4, 0, 5, 3], 5));

// Captalise the first character of eacah word-->

function captaliseFn(arr) {
    
let result = []

    if (arr.length == 0) {
        return []
    }

    // pull out arr[0] and captalise 1st character of arr[0].. "abc" = "A" + "bc" => "Abc"

    let s = arr[0] [0].toUpperCase() + arr[0].slice(1)
    result.push(s); // ["Abc"]
   
    return result.concat(captaliseFn(arr.slice(1)));
}
let arr = ["abc", "pqr", "xylshfhggslkdj", "ravi"]
console.log(captaliseFn(arr));
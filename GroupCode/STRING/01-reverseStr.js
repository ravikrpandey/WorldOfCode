// Reverse a string

function reverseString(str) {

    if(str.length <= 1) {
        return true
    }
    return reverseString(str.slice(1) + str[0]) // recursion core logic
}
let result = reverseString("ravi")
console.log(result);
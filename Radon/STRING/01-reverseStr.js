// Reverse a string

function reverseString(str) {

    if(str.length <= 1) {
        return str
    }
    return reverseString(str.slice(1)) + str[0] // recursion core logic
}
let result = reverseString("ravi")
console.log(result);


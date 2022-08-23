// Write a function which takes a string and returns counts of each character in the string.

// function countCharacter(str) {
//   console.log(str);

//   // make a variable to return at the end
//   let result = {};

//   for (let i = 0; i < str.length; i++) {
//     var char = str[i];

//     if (result[char > 0]) {
//       result[char]++;
//     } else {
//       result[char] = 1;
//     };

    
//   }
// return result
  
// }

// console.log(countCharacter("ravi"));

//--------------------------------------------or------------------------------------------

function charCount(str) {

    let obj = {}

    for(let char of str) {
        if(isAlphaNumaric(char)) {
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1
        }

    }
    return obj
}

function isAlphaNumaric(char) {
    let code = char.charCodeAt(0);
    if((!code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)) {
        return false
    }
    return true
}

console.log(charCount("Ravi is a good boy 1234"))
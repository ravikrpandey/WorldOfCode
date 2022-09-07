// // String Methods:-
// Everything in JavaScript is an object. A string is a primitive data type that means we can not modify it once it is created. The string object has many string methods. There are different string methods that can help us to work with strings.

// 1. toUpperCase() ==>
// this method changes the string to uppercase letters.

// let name = "ravi"

// let upName = name.toUpperCase(name);

// console.log(upName);

//================================


// 2. toLowerCase() ==>
// this method changes the string to lowercase letters

// let fName = "RavI"

// let lowerFname = fName.toLowerCase(fName);

// console.log(lowerFname);

//================================

// 3. substr() ==>
// It takes two arguments, the starting index and number of characters to slice.

// let string = 'ravikumar'

// let subStr = string.substr(3, 6);

// console.log(subStr);

//================================

// 4. substring() ==> It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.


let string1 = 'javascript'
let subString = string1.substring(3, 10);

console.log(subString);

//================================


// 5. split() ==> The split method splits a string at a specified place.

let string2 = '30 days of javascript'
let splitString = string2.split();

console.log(splitString); // Changes to an array => [ '30 days of javascript' ]
console.log(string2.split(' ')); // => [ '30', 'days', 'of', 'javascript' ]
console.log(string2.split(''));


let firstName = 'ravikumar'

console.log(firstName.split(','));
console.log(firstName.split(' , '))


// =================================

// 6. trim() ==> Removes trailing space in the beginning or the end of a string.

let fullName = 'ravi kumar pandey '

console.log(fullName.trim())

//==================================


// 7. includes() ==> It takes a substring argument and it checks if substring argument exists in the string. includes() returns a boolean. If a substring exist in a string, it returns true, otherwise it returns false.


// let string = '30 Days Of JavaScript'

// console.log(string.includes('Days'))     // true
// console.log(string.includes('days'))     // false - it is case sensitive!
// console.log(string.includes('Script'))   // true
// console.log(string.includes('script'))   // false
// console.log(string.includes('java'))     // false
// console.log(string.includes('Java'))     // true

// let country = 'Finland'

// console.log(country.includes('fin'))     // false
// console.log(country.includes('Fin'))     // true
// console.log(country.includes('land'))    // true
// console.log(country.includes('Land'))    // false


//=================================================


// 8. replace() ==> takes as a parameter the old substring and a new substring.

// string.replace(oldsubstring, newsubstring)
// let string = '30 Days Of JavaScript'
// console.log(string.replace('JavaScript', 'Python')) // 30 Days Of Python

// let country = 'Finland'
// console.log(country.replace('Fin', 'Noman'))       // Nomanland


// ==============================================


// 9. charAt() ==> Takes index and it returns the value at that index

// string.charAt(index)


// let string = '30 Days Of JavaScript'
// console.log(string.charAt(0))        // 3

// let lastIndex = string.length - 1
// console.log(string.charAt(lastIndex)) // t

// ==============================================

// 10. charCodeAt() ==> Takes index and it returns char code (ASCII number) of the value at that index

// string.charCodeAt(index)


// let string = '30 Days Of JavaScript'
// console.log(string.charCodeAt(3))        // D ASCII number is 68

// let lastIndex = string.length - 1
// console.log(string.charCodeAt(lastIndex)) // t ASCII is 116

// =============================================


// 11. indexOf(): Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1

// string.indexOf(substring)


// let string = '30 Days Of JavaScript'

// console.log(string.indexOf('D'))          // 3
// console.log(string.indexOf('Days'))       // 3
// console.log(string.indexOf('days'))       // -1
// console.log(string.indexOf('a'))          // 4
// console.log(string.indexOf('JavaScript')) // 11
// console.log(string.indexOf('Script'))     //15
// console.log(string.indexOf('script'))     // -1

// =============================================

// 12. lastIndexOf() ==> Takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1

// //syntax
// string.lastIndexOf(substring)


// let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'

// console.log(string.lastIndexOf('love'))       // 67
// console.log(string.lastIndexOf('you'))        // 63
// console.log(string.lastIndexOf('JavaScript')) // 38

// ==============================================

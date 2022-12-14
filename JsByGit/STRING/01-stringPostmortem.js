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


// 13. concat() ==> it takes many substrings and joins them.

// string.concat(substring, substring, substring)


// let string = '30'
// console.log(string.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript

// let country = 'Fin'
// console.log(country.concat("land")) // Finland


// =============================================

// 14. startsWith() ==> it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).

// //syntax
// string.startsWith(substring)


// let string = 'Love is the best to in this world'

// console.log(string.startsWith('Love'))   // true
// console.log(string.startsWith('love'))   // false
// console.log(string.startsWith('world'))  // false

// let country = 'Finland'

// console.log(country.startsWith('Fin'))   // true
// console.log(country.startsWith('fin'))   // false
// console.log(country.startsWith('land'))  //  false

// ============================================

// 15. endsWith() ==> it takes a substring as an argument and it checks if the string ends with that specified substring. It returns a boolean(true or false).

// string.endsWith(substring)


// let string = 'Love is the most powerful feeling in the world'

// console.log(string.endsWith('world'))         // true
// console.log(string.endsWith('love'))          // false
// console.log(string.endsWith('in the world')) // true

// console.log(country.endsWith('land'))         // true
// console.log(country.endsWith('fin'))          // false
// console.log(country.endsWith('Fin'))          //  false

// ============================================

// 16. search() ==> it takes a substring as an argument and it returns the index of the first match. The search value can be a string or a regular expression pattern.

// string.search(substring)

// let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'

// console.log(string.search('love'))          // 2
// console.log(string.search(/javascript/gi))  // 7

// ============================================

// 17. match() ==> it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign.

// let string = 'love'

// let patternOne = /love/     // with out any flag
// let patternTwo = /love/gi   // g-means to search in the whole text, i - case insensitive


// Match syntax

// // syntax
// string.match(substring)
// let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'

// console.log(string.match('love'))
// ["love", index: 2, input: "I love JavaScript. If you do not love JavaScript what else can you love.", groups: undefined]

// let pattern = /love/gi
// console.log(string.match(pattern))   // ["love", "love", "love"]

// Let us extract numbers from text using a regular expression. This is not the regular expression section, do not panic! We will cover regular expressions later on.

// let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'

// let regEx = /\d+/

// // d with escape character means d not a normal d instead acts a digit
// // + means one or more digit numbers,
// // if there is g after that it means global, search everywhere.

// console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
// console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]

// =============================================

// 18. repeat() ==> it takes a number as argument and it returns the repeated version of the string.

// string.repeat(n)

// let string = 'love'
// console.log(string.repeat(10)) // lovelovelovelovelovelovelovelovelovelove

// ==============================================















// Changing Data Type (Casting) ==>
// Casting: Converting one data type to another data type. We use parseInt(), parseFloat(), Number(), + sign, str() When we do arithmetic operations string numbers should be first converted to integer or float if not it returns an error.

// String to Int ==>

// We can convert string number to a number. Any number inside a quote is a string number. An example of a string number: '10', '5', etc. We can convert string to number using the following methods:

// parseInt()
// Number()
// Plus sign(+)


// let num = '10'
// let numInt = parseInt(num)
// console.log(numInt) // 10
// let num = '10'
// let numInt = Number(num)

// console.log(numInt) // 10
// let num = '10'
// let numInt = +num

// console.log(numInt) // 10

// =========================================================


// String to Float ==>
// We can convert string float number to a float number. Any float number inside a quote is a string float number. An example of a string float number: '9.81', '3.14', '1.44', etc. We can convert string float to number using the following methods:

// parseFloat() ==>

// Number()
// Plus sign(+)

// let num = '9.81'
// let numFloat = parseFloat(num)

// console.log(numFloat) // 9.81
// let num = '9.81'
// let numFloat = Number(num)

// console.log(numFloat) // 9.81
// let num = '9.81'
// let numFloat = +num

// console.log(numFloat) // 9.81

// =========================================================

// Float to Int ==>

// We can convert float numbers to integers. We use the following method to convert float to int:

// parseInt()==>

// let num = 9.81
// let numInt = parseInt(num)

// console.log(numInt) // 9
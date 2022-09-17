// Split string by space into words
// Given a string S, Write a program to split the string into words.

 

// Input:

//     How are you

   

//     where:

// First line represents the input string
 

// Output:

//     How

//     are

//     you

 

// Assumptions:

// Length of the string S can be 0 to 10000


function splitString(str) {
    
    let s = ''
    for (let i=0; i<=str.length; i++) {
        if(str[i] == ' ' || i == str.length) {
            console.log(s);
            s = ''
        } else {
            s = s + str[i]
        }

    }
}
let str = "How are you";

splitString(str);
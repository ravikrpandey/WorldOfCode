// // Given a Integer array A[] of n elements. Your task is to complete the function PalinArray. Which will return 1 if all the elements of the Array are palindrome otherwise it will return 0.

// Example:
// Input:
// 2
// 5
// 111 222 333 444 555
// 3
// 121 131 20

// Output:
// 1
// 0



let arr = 111;

let sum = 0;
// sum = Math.floor(sum)



function checkPalindrome(arr) {

    let temp = arr    
    while (arr > 0) {
        let r = arr % 10;
        sum = (sum * 10) + r;
        arr = Math.floor(arr / 10);
        
    }
    console.log(sum);
    if (temp == sum) {
        console.log("true");
    } else {
        console.log('false')
    }
}
checkPalindrome(arr)

// ============================================

// let arr = 111
// let splt = (""+arr).split('');
// let n = splt.length
// console.log(splt)

// function checkPalindrome(splt) {

//     for (let i=n-1; i >= 0; i--) {

//          if (splt[i] !== splt) {
//             return false
//         }
//     }
//     return true
//     }

// let result = checkPalindrome(splt)
// console.log(result)


// ==============================================



// function palindrome(str) {

//     var len = str.length;
//     var mid = Math.floor(len/2);

//     for ( var i = 0; i < mid; i++ ) {
//         if (str[i] !== str[len - 1 - i]) {
//             return "Not a palindrome";
//         }
//     }
//     return "It's a palindrome"
// }
// let result = palindrome("121");
// console.log(result);

// function series(x){
//     let j=3
//     for (let i=1;i<=x;i++){
   
     
//          j=i*i*i+2
//           console.log(j)
//     }
//   }
//   series(5)





// #include <iostream>
// #include <algorithm>
// using namespace std;

// int main() {
//     string str = "you shall not pass";  
//     cout << "Original string: " << str << endl;

//     // Use the built-in reverse to get char-by-char reversal.
//     reverse(str.begin(), str.end()); 

//     string buffer = "";
//     string ans = "";

//     // This for loop then reverses each individual
//     // word in the string.
//     for (int i=0; i < str.length(); i++)
//     {
//       if (str[i] != ' ')
//       {
//         buffer += str[i];
//       }
//       else
//       {
//         reverse(buffer.begin(), buffer.end());
//         ans += buffer + " ";
//         buffer = "";
//       }
//     }
//     // Reversing the last word in the string outside the loop:
//     reverse(buffer.begin(), buffer.end());
//     ans += buffer;
//     cout << "Reversed string: " << ans << endl;
// }
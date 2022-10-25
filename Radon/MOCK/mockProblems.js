// what is javascript 
// what is stack 
// what is data structure 
// what is closure 
// what is dfs bfs 
// sql and nosql difference 


// // 5) write down the syntax for promise. && callback function
// // 6) write a function to identify integer number only.


// What is javascript-->

// -->  JavaScript is a client-side as well as a server-side scripting language. 
// This scripting language can be written into HTML pages (also could use CSS for styling the pages), and web browsers understand the page.

// This scripting language also acts like an object-oriented programming language but not a class-based object-oriented language.

//-------------------------------------------------------

// scriptinng vs programming language-->

// Conversion	Scripting languages convert high-level instructions into machine language.	Programming languages help in converting the full program into the machine language (at once).

// Compilation-->	You don’t need to compile these languages.	These languages first need a compilation.
// Design	These make the coding process simple and fast.	These provide full usage of the languages.

// File Type-->	Scripting languages don’t create any file types.	Programming languages create .exe files.
// Complexity	These are very easy to use and easy to write.	These are pretty complex in terms of writing and usage.

// Type of Coding-->	Scripting languages help write a small piece of an entire code.	Programming languages help write the full code concerning a program.

// Developing Time-->	These take less time because they involve lesser code.	These take more time because a programmer must write the entire code.

// Interpretation-->	We usually interpret a scripting language in another program.	The compile results of a programming language are stand-alone. No other program needs to interpret it.

//-----------------------------------------------------------

// what is stack ?

// Stack-->

// A stack is a linear data stracture consisting of a set of homogeneous elements. And its based on the LIFO principle.

// --------------------------------------------------------

// what is data structure ?

// In computer science, a data structure is a data organization, management,
// and storage format that enables efficient access and modification. 

// --------------------------------------------------------

// what is closure ?

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 

// In other words, a closure gives you access to an outer function's scope from an inner function.

// ---------------------------------------------------------

// what is dfs bfs ?

// BFS -->

// 1. We can start breath first search form any vertaces as we like.

// 2. When we are exploring any vertaces then we can visit its adjacent vertaces in any order as we like.

// 3. Rule--> When we are selecting a vertex for exploration we must visit all its adjacent vertaces then only we should go for the next vertaces for exploration.

// We should select the next vertex for exploration from a quae only.

// Time complexity O(n).




// DFS-->

// Defth forst searchn--> Once we have visited one vertaces still vertaces is remaining leave that we will see it after words.

// We use stack for maintaining its order.

// Time complexity O(n).

// --------------------------------------------------



// // 5) write down the syntax for promise. && callback function

//  function prom(req, res){
//     const prom = new Promise(res,rej){
//         res();
//         rej();

//     }
//     prom.then(function(value){
//         //code success
//     },
//         function(error){
//             //code error
//         }
//     )
// }


// Syntax for callback-->

/*
A callback function is a function passed into another function
as an argument, which is then invoked inside the outer function
to complete some kind of routine or action. 
*/

// function greeting(name) {
//     console.log('Hello ' + name);
//   }
  
//   function processUserInput(callback) {
//     var name = console.log('Please enter your name.');
//     callback(name);
//   }
  
//   processUserInput(greeting);

  // The above example is a synchronous callback, as it is executed immediately.

  // ---------------------------------------------


  // 6) write a function to identify integer number only.

  function checkInteger(val) {

if (typeof val == 'number' && !isNaN(val)) {
console.log(`${val} is number`)
  } else {
    console.log(`${val} is not a number`)
  }
}
checkInteger(12.5);

//-------------------------------------------------




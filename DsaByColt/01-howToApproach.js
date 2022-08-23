// Write a function which takes a string and returns counts of each character in the string.

function countCharacter(str) {
  console.log(str);

  // make a variable to return at the end
  let result = {};

  for (let i = 0; i < str.length; i++) {
    var char = str[i];

    if (result[char > 0]) {
      result[char]++;
    } else {
      result[char] = 1;
    };

    
  }
return result
  
}

console.log(countCharacter("ravi"));

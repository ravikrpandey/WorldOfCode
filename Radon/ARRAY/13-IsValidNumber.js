// Check provided input [1, 5, 7, 4, 6, 3, 7, 2, 8] is a valid Number or not

function isValidNumber(input) {

   
    for(let i=0; i<input.length; i++) {
         
         
    
        if (input[i] >= 0 && input[i] >= 9) {


            return "valid number"

        }

        else {
            return "not a valid number"
        }
    
    }
}

console.log(isValidNumber(["157463729"]));
console.log(isValidNumber(["157463o729"]));
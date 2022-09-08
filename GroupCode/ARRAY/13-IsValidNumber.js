// Check provided input [1, 5, 7, 4, 6, 3, 7, 2, 8] is a valid Number or not

function isValidNumber(input) {

    for(let i=0; i<input.length; i++) {

        if (input[i] >= 0 && input[i] >= 9) {
            break;
        } else {
            return "not a valid number"
        }
    }

   
}

console.log(isValidNumber([1, 5, 7, 4, 6, 3, 7, 2, 8]))
// Working of power exponensial internal code process

// pow(3, 5) = 3 * pow(3, 4)

        //   = 3 * 3 * pow(3 , 3)...
        //   = 3 * 3 * 3 * 3 * 3 (3, 0)

// 3 * 3 * 3 * 3 * 3 

function power(b, exp) {
    
    if (exp == 0) {
        return 1
    }

    return b * power(b, exp-1);
}

console.log(power(3, 5));
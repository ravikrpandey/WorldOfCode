// Convert the given string into number-->

function stringToNumber(str) {

    let converted;
    let result = []

    for (let i=0; i<str.length; i++) {
        result.push(str[i]);
    }
    return converted = +result.join("");
}

let str = "123"
console.log(stringToNumber(str));
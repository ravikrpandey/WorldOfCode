// Print a number and if number is multiple of 3 log 'Foo', if number is multiple of 5 log 'Bar' and if number is multiple of both 5 and 7 then log 'FooBar'. if number is not a multiple of either then log 'Nothing'.

function printConditionMsg(num) {

    if (num % 3 === 0) {
        console.log("Foo");
    } else if (num % 5 === 0 && num % 7 !== 0) {
        console.log('Bar');

    } else if (num % 5 === 0 && num % 7 === 0) {
        console.log('FooBar');
    } else {
        console.log('Nothing');
    }
}
printConditionMsg(10);
printConditionMsg(9);
printConditionMsg(35);
printConditionMsg(2.8)
// Given an array [2, 5, 4, 5, 6, 7, 6, 5, 7, 8, 65, 34] => here we have to remove the dublicates elements and log the unique elements.

function checkUnique(arr) {

    let set = new Set(arr)
    console.log(set);
    // return [...set]
}

checkUnique([2, 5, 4, 5, 6, 7, 6, 5, 7, 8, 65, 34]);
//Compare two array..,

function CompareTwoArray(arr1, arr2) {
    
    if(arr1.length !== arr2.length) {
        return false;
    }

    for(let i=0; i<arr1.length; i++) {

            if(arr1[i] !== arr2[i]) {

                return false;
            }
        }
        return true;
    }
    


arr1 = [10, 11, 12, 13];
arr2 = [10, 11, 12, 13];
console.log(CompareTwoArray(arr1, arr2));
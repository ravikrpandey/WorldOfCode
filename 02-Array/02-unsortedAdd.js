

// add an element in unsorted array 

let arr = [10, 11, 12, 14, 16, 18, 20];
let n = 7
let key = 24;
let cap = 10
let i;
    // Javascript program to implement insert
    // operation in an unsorted array.
     
    // Function to insert a given
    // key in the array. This
    // function  returns n + 1
    // if insertion is successful,
    // else n.
    function insertSorted(arr, n, key, capacity) {
          
        // Cannot insert more elements
        // if n is already more than
        // or equal to capacity
        if (n >= capacity)
            return n;
      
        arr[n] = key;
        return (n + 1);
    }
     

    console.log("Before Insertion: ");
    for (i = 0; i < n; i++)
    console.log(arr[i]+" ");
    
 
    // Inserting key
    n = insertSorted(arr, n, key, capacity);
 
    console.log("After Insertion: ");
    for (i = 0; i < n; i++)
    console.log(arr[i]+" ");
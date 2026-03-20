// Return a new array with all numbers doubled

// Input:  [1, 2, 3]
// Output: [2, 4, 6]

function doubleArray(arr) {
    let newArr = []
    for(let i =0; i <arr.length; i++){
        newArr.push(arr[i] * 2); 
    }

    return newArr;
}

console.log(doubleArray([1, 2, 3]));

// Check if array has duplicate elements

// Input:  [1, 2, 3, 1]
// Output: true

// Input:  [1, 2, 3, 4]
// Output: false

function hasDuplicate(arr) {
    let seen = {};

    for(let i=0; i<arr.length;i++){
        if (seen[arr[i]] !== undefined){
            return true
        }else{
            seen[arr[i]] = true;
        }
    }

    return false;
}

console.log(hasDuplicate([1, 2, 3, 1]));
console.log(hasDuplicate([1, 2, 3, 4]));
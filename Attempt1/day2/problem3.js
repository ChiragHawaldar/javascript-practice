// Flatten a nested array one level.
// Input:  [1, [2,3], [4,5]]
// Output: [1,2,3,4,5]


function flattenArray(arr) {
    return arr.flat();
}

console.log(flattenArray([1, [2,3], [4,5]]));
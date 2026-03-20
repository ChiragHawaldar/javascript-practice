// Count how many even numbers are in the array

// Input:  [1, 2, 3, 4, 5, 6]
// Output: 3

function countEvens(arr) {
    let length = arr.length;
    if (length < 0) return "empty array";
    let count = 0;
    for (let i = 0; i < length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}

console.log(countEvens([1, 2, 3, 4, 5, 6]));
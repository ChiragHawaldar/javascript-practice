// Find the first non-repeating number

// Input:  [4, 5, 1, 2, 0, 4]
// Output: 5

function firstUnique(arr) {
    let freq = {};

    for (let i = 0; i < arr.length; i++) {
        freq[arr[i]] = (freq[arr[i]] || 0) + 1;
    }

    for (let i = 0; i < arr.length; i++) {
        if (freq[arr[i]] === 1) {
            return arr[i];
        }
    }

    return null; 
}

console.log(firstUnique([4, 5, 1, 2, 0, 4]));
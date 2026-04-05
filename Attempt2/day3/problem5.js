// Find length of longest subarray with unique elements

// Input:  [1, 2, 3, 1, 2, 3, 2, 2]
// Output: 3  // [1,2,3]

function longestUnique(arr) {
    let seen = {};
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < arr.length; right++) {
        if (seen[arr[right]] !== undefined && seen[arr[right]] >= left) {
            left = seen[arr[right]] + 1;
        }

        seen[arr[right]] = right;

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

console.log(longestUnique([1, 2, 3, 1, 2, 3, 2, 2]));
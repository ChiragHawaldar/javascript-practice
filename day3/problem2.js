// Find all missing numbers from 1..n

// Input:  [1,3,5,6]
// Output: [2,4]

function findMissingNumbers(arr) {
    let missing = [];
    let max = Math.max(...arr);

    for (let i = 1; i <= max; i++) {
        if (!arr.includes(i)) {
            missing.push(i);
        }
    }

    return missing;
}

console.log(findMissingNumbers([1,3,5,6]));
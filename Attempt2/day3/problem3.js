// Find two numbers that add up to target

// Input:  [2, 7, 11, 15], target = 9
// Output: [2, 7]

function twoSum(arr, target) {

    let seen = {};
    let neededNum = null;

    for (let i = 0; i < arr.length; i++) {

        let neededNum = target - arr[i];

        if (seen[neededNum] !== undefined) {

            return [neededNum, arr[i]];

        } else {
            seen[arr[i]] = true;
        }

    }

    return null;
}

console.log(twoSum([2, 7, 11, 15], 9));
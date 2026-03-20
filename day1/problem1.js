// Find the sum of all numbers in an array

// Input:  [1, 2, 3, 4]
// Output: 10

function sumArray(arr) {
    let sum = 0;
    for(let i=0 ; i<arr.length;i++){
        sum += arr[i];
    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4]));
// Find the largest number in an array

// Input:  [3, 7, 2, 9, 5]
// Output: 9

function findMax(arr) {
    let largestNum = arr[0];
    for(let i=1; i <arr.length; i++){
        if(largestNum < arr[i]){
            largestNum = arr[i];
        }
    }
    return largestNum;
}

console.log(findMax([3, 7, 2, 9, 5]));
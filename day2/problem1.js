
// Find second largest number

// Input:  [10, 5, 8, 20]
// Output: 10

function secondLargest(arr) {
    let largestNum = -Infinity;
    let SecondLargestNum = -Infinity ;

    for(let i=0; i<arr.length; i++){

        if(arr[i] > largestNum){
            SecondLargestNum = largestNum;
            largestNum = arr[i];
        }else if (arr[i] > SecondLargestNum && arr[i]!== largestNum) {
            SecondLargestNum = arr[i];
        }

    }

    return SecondLargestNum;
}

console.log(secondLargest([10, 5, 8, 20]));
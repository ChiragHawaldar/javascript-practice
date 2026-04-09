// Find the smallest and second smallest number

// Input:  [10, 5, 8, 20]
// Output: [5, 8]

function twoSmallest(arr) {
    let smallest = +Infinity;
    let second = +Infinity;
    let newArr = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i] < smallest){
            second = smallest;
            smallest = arr[i];
        }else if(arr[i] < second && arr[i] > smallest){
            second = arr[i];
        }
    }

    newArr.push(second);
    newArr.push(smallest);

    return newArr;
}

console.log(twoSmallest([10, 5, 8, 20]));
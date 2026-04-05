// Return a new array with only odd numbers

// Input:  [1, 2, 3, 4, 5]
// Output: [1, 3, 5]

function getOdds(arr) {
    let newArr =[];
     for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 !== 0){
            newArr.push(arr[i]);
        }
     }
     return newArr;
}

console.log(getOdds([1, 2, 3, 4, 5]));
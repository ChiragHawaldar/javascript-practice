// Remove duplicates from sorted array

// Input:  [1, 1, 2, 2, 3]
// Output: [1, 2, 3]

function removeDuplicates(arr) {
  
    let newArr = [];


    for(let i=0; i<arr.length; i++){
        if (i===0 || arr[i]!==arr[i-1]) {
            newArr.push(arr[i]);
            
        }
    }
    
    return newArr;
}

console.log(removeDuplicates([1, 1, 2, 2, 3]));
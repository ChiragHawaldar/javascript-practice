// Check if two arrays have any common element

// Input:  [1, 2, 3], [4, 5, 2]
// Output: true

// Input:  [1, 2, 3], [4, 5, 6]
// Output: false

function hasCommon(arr1, arr2) {

    let obj = {};

    for(let i =0; i<arr1.length;i++){
            obj[arr1[i]] = true;
    }

    for(let i =0; i<arr2.length;i++){
        
        if(obj[arr2[i]] !==undefined){
            return true;
        }
    }    

    return false;
}

console.log(hasCommon([1, 2, 3], [4, 5, 2]));
console.log(hasCommon([1, 2, 3], [4, 5, 6]));
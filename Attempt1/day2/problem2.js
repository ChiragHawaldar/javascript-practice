// Count how many times each number appears in an array.

// Input:  [1,2,2,3,3,3,4]
// Output: {1:1, 2:2, 3:3, 4:1}


function countFrequency(arr) {
    let newObj = {};

    for (let i = 0; i < arr.length; i++) {
        if(newObj[arr[i]] ){
          newObj[arr[i]] += 1;
    
        }else{
            newObj[arr[i]]=1;
        }
    }

    return newObj;
}

console.log(countFrequency([1,2,2,3,3,3,4]));
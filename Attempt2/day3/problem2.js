// Find the intersection of two arrays (common elements)

// Input:  [1, 2, 3], [2, 3, 4]
// Output: [2, 3]

function intersection(arr1, arr2) {

    let obj={};
    let intersecArr = [];
    

    for(let i =0; i<arr1.length; i++){
        obj[arr1[i]] = 1;
    }
    
    for(let i =0; i<arr2.length; i++){
        if(obj[arr2[i]] == 1){
            obj[arr2[i]] +=1;
            intersecArr.push(arr2[i]);
        }
    }

    return intersecArr;
}

console.log(intersection([1, 2, 3], [2,2, 3, 4]));
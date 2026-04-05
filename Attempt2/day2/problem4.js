// Return elements that appear only once

// Input:  [1, 2, 2, 3, 4, 4]
// Output: [1, 3]

function uniqueElements(arr) {
    let freq= {};

    for(let i=0;i<arr.length;i++){
        if(freq[arr[i]] !== undefined){
            freq[arr[i]] += 1;
        }else{
            freq[arr[i]] = 1;
        }
    }

    let elementsArr = [];

    for(let i=0;i<arr.length;i++){
        if(freq[i] == 1){
            elementsArr.push(Number(i));
        }
    }
    return elementsArr;
}

console.log(uniqueElements([1, 2, 2, 3, 4, 4]));
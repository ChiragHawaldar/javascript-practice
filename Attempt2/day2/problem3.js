// Find the number that appears the most times

// Input:  [1, 2, 2, 3, 1, 2]
// Output: 2

function mostFrequent(arr) {
    let freq = {};

    for(let i=0;i<arr.length;i++){
        if(freq[arr[i]] !==undefined){
            freq[arr[i]] += 1; 
        }else{
            freq[arr[i]] = 1;
        }
    }

    let maxCount = 0;
    let result = null;
    for(key in freq){
        if(freq[key] > maxCount){
            maxCount = freq[key];
            result = Number(key);
        }
    }

    return result;
}


console.log(mostFrequent([1, 2, 2, 3, 1, 2]));
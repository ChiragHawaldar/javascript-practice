// Find the first repeating number

// Input:  [1, 2, 3, 4, 2, 5]
// Output: 2

function firstRepeating(arr) {
    let freq ={};
    for(let i=0; i<arr.length;i++){
        
        if(freq[arr[i]] !== undefined){
            return arr[i];
        }else{
            freq[arr[i]] =1;
        }
    }

    return null;

}

console.log(firstRepeating([1, 2, 3, 4, 2, 5]));
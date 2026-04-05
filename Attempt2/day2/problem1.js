// Count frequency of each number in array

// Input:  [1, 2, 2, 3, 1, 2]
// Output: {1: 2, 2: 3, 3: 1}

function countFrequency(arr) {
     let obj = {};

     for(let i=0; i<arr.length;i++){
          if(obj[arr[i]]){
               obj[arr[i]] +=1;
          }else{
               obj[arr[i]] =1;
          }
     }

     return obj;
}


console.log(countFrequency([4, 5, 1, 2, 0, 4]));
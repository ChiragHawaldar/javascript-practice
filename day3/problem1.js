// Find the second largest number in an array.

// Input:  [10, 5, 8, 20, 3]
// Output: 10

function secondLargest(arr) {
    let largest = - Infinity;
    let secLargest =- Infinity;

    for(let i=0; i<arr.length; i++){
        let num = arr[i]
        
        if(num > largest){
            secLargest = largest;
            largest =num;
        }else if(secLargest < num && num < largest){
            secLargest = num;
        }
    }

    return secLargest;
}


console.log(secondLargest([10, 5, 8, 20, 3]));
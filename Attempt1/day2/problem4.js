// Find all numbers divisible by both 3 and 5.
// Input:  [3,5,10,15,20,30]
// Output: [15,30]



function divisibleByThreeAndFive(arr) {
    return arr.filter(num => num % 3 ===0 && num % 5===0);
}

console.log(divisibleByThreeAndFive([3,5,10,15,20,30]));
// Write a function that returns the sum of numbers divisible by 3.

function sumDivisibleByThree(arr) {
    return arr.filter(num => num%3 ===0).reduce((total , num)=> total+num,0);
}

console.log(sumDivisibleByThree([3,5,6,8,9]));
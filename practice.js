// console.log("Hii World");
// Write a function that: takes an array of numbers returns the sum of all even numbers

// function sumEvenNumbers(arr) {
//     let sum = 0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] % 2 === 0){
//             sum+= arr[i];
//         }
//     }

//    console.log(sum);
// }


// sumEvenNumbers([1, 2, 3, 4, 5, 6]);



// Write a function that returns the smallest number in an array.



// function findSmallest(arr) {
//     let smallest  = arr[0];
//      for(let i=1; i< arr.length;i++){
//         if(smallest  > arr[i]){
//             smallest  = arr[i];
//         }
//      }

//      return smallest ;
// }

// let smallestNumber = findSmallest([8, 3, 12, 1, 6]);

// console.log(smallestNumber);


// Write a function that counts how many even numbers are in an array.




// function countEven(arr) {
//     let count = 0;

//     for(let i=0; i<arr.length;i++){
//         if(arr[i] % 2 === 0){
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countEven([2, 7, 4, 9, 6]));


// Write a function that returns a new array containing only even numbers.


// function getEvenNumbers(arr) {
    
//     let evenArr = [];


//     for(let i=0; i<arr.length; i++){
//         if(arr[i] % 2 ===0 ){
//             evenArr.push(arr[i]);
//         }
//     }

//     return evenArr;

// }


// console.log(getEvenNumbers([1,2,3,4,5,6]))


// Write a function that returns the sum of odd numbers in an array.


// function sumOddNumbers(arr) {
//     let sum=0;
//     let sumArr = arr.filter(num => num % 2 !==0);
//         for(let i=0; i<sumArr.length;i++){
//             sum += sumArr[i];
//         }

//         return sum;
// }


// console.log(sumOddNumbers([1,2,3,4,5,6]));



// Write a function that returns the average of all numbers in an array.

// function average(arr) {
//     if (arr.length === 0) return 0;
    
//     let sum= arr.reduce((total,num) => total+num,0);
//     return sum/arr.length;
// }


// console.log(average([10, 20, 30]));

// Write a function that returns the sum of numbers greater than 5.



// function sumGreaterThanFive(arr) {

//     return arr.filter(num=> num>5).reduce((total , num)=>total+num,0);

// }

// console.log(sumGreaterThanFive([2, 6, 3, 10, 4]));


// Write a function that returns how many numbers are odd.


// function countOdd(arr) {
//     return arr.filter(num => num % 2 !==0);
// }


// console.log(countOdd([1,2,3,4,5,6]));



// Reverse an array


// function reverseArray(arr) {
//     let revArr = [];
//     let length = arr.length-1;

//     if(length < 1) return arr;

//     for(let i = length; i >=0;i--){
//         revArr.push(arr[i]);
//     }

//     return revArr;
// }

// console.log(reverseArray([1,2,3,4]));



// Find the second largest number.


function secondLargest(arr) {
    let temp = arr[0];
    let secNum = 0;
     for(let i=1; i<arr.length;i++){
             if(arr[i] > temp){
                secNum = temp;
                temp = arr[i];
            }else if(arr[i] > secNum && arr[i] !== temp){
                secNum = arr[i];
            }

     }
     return secNum;
}

console.log(secondLargest([10, 5, 8, 9]));
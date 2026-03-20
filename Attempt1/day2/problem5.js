// Check if a word is a palindrome.

// Input:  "racecar"
// Output: true

// Input:  "hello"
// Output: false


function isPalindrome(word) {
    let newStr = [];

    for (let i = word.length-1; i >= 0; i--) {
        newStr.push(word[i]);
    }
   
    return newStr.join("") == word; 



}


console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
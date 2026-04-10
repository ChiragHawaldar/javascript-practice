// Check if a string is a palindrome

// Input:  "madam"
// Output: true

// Input:  "hello"
// Output: false

function isPalindrome(str) {
    let arrStr = str.split("");
    let newArr=[];
    if(str.length < 1) return "empty string";
    for(let i = arrStr.length-1; i >=0;i--){
        newArr.push(arrStr[i]);
    }
    return str===newArr.join("")?true:false;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));

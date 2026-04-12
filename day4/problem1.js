// Check if a string is a palindrome

// Input:  "madam"
// Output: true

// Input:  "hello"
// Output: false

function isPalindrome(str) {

    let left = 0;
    let right = str.length-1;

    while (left < right) {
        
    if(str[left] === str[right]){
        left++;
        right--;                                                                                                                  
    }else {
        return false;
    }

}
return true;

}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));

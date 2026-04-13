// Reverse words in a string

// Input:  "hello world"
// Output: "world hello"

function reverseWords(str) {
    let strArr = str.split(" ");
    let reverseArr=[];
    for(let i=strArr.length-1; i>=0;i--){
        reverseArr.push(strArr[i]);
    }

    return reverseArr.join(" ");
}

console.log(reverseWords("hello world"));
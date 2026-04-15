// Find the longest word in a sentence

// Input:  "I love JavaScript programming"
// Output: "programming"

function longestWord(str) {
    let s = str.split(" ");
    let largestStr="" ,tempLength =0;
    for(let i=0; i<s.length;i++){
        let slength = s[i].length;

        if(slength > tempLength){
            tempLength = slength;
            largestStr =s[i];

        }
    }

    return largestStr;
}

console.log(longestWord("I love JavaScript programming")); 
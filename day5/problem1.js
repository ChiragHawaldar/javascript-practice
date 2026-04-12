// Count vowels in a string

// Input:  "hello"
// Output: 2

function countVowels(str) {
   let newStr = str.toLowerCase();
    let count =0;

    for(let i=0; i<str.length; i++){
        if(newStr[i]==='a' || newStr[i]==='e' || newStr[i]==='i' || newStr[i]==='o' || newStr[i]==='u'){
            count++;
        }
    }

    return count;
}

console.log(countVowels("hello"));
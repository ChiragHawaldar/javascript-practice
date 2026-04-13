// Find first non-repeating character in a string

// Input:  "aabccde"
// Output: "b"

function firstUniqueChar(str) {
    let seen = {};
    for (let i = 0; i < str.length; i++) {
        if(seen[str[i]] === undefined){
            seen[str[i]] = 1;
        }else{
            
            seen[str[i]] += 1;
        }
        
    }

    for(let i = 0; i<str.length;i++){
        if(seen[str[i]] === 1){
            return str[i];
        }
    }

    return null;
}

console.log(firstUniqueChar("aabccde"));
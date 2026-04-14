// Check if two strings are anagrams

// Input:  "listen", "silent"
// Output: true

// Input:  "hello", "world"
// Output: false

function isAnagram(s1, s2) {

    let seen = {};

    if (s1.length === s2.length) {
        for (let i = 0; i < s1.length; i++) {
            if (seen[s1[i]] === undefined) {
                seen[s1[i]] = 1;
            } else {
                seen[s1[i]] += 1;
            }
        }
        
        for (let i = 0; i < s2.length; i++) {
            if (seen[s2[i]] === undefined ) {
                return false;
            } else {
                seen[s2[i]] -=1;
                if(seen[s2[i]] < 0){
                    return false;
                }
            }

        }

        return true;

    }else{
        return false;
    }
}



console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));
// Check if a string contains only digits

// Input:  "12345" → true
// Input:  "123a5" → false

function isNumeric(str) {

    for(let i=0;i<str.length;i++){
        if(str[i] < '0' || str[i] >'9'){
            return false;
        }
    }
    return true;

}

console.log(isNumeric("12345"));
console.log(isNumeric("123a5"));
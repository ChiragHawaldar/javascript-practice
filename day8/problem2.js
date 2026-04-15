// Capitalize first letter of each word

// Input:  "hello world"
// Output: "Hello World"

function capitalizeWords(str) {
   return  str.split(" ").map((item) => item[0].toUpperCase() + item.slice(1)).join(" ");

}

console.log(capitalizeWords("hello world"));
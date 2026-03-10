// Write a function that capitalizes the first letter of every word in a sentence.

function capitalizeWords(str) {
    return str.split(" ").map(word=> word ? word[0].toUpperCase()+ word.slice(1) : "").join(" ");
}

console.log(capitalizeWords("hello world from javascript"));
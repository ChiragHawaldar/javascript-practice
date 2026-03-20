// Return the longest word in a sentence.

function longestWord(sentence) {
    let sentenceArr = sentence.split(" ");
    let longestSentence = sentenceArr[0];
    for(let i=1; i <sentenceArr.length; i++){
        if(sentenceArr[i].length > longestSentence.length){
            longestSentence =sentenceArr[i];
        }
    }

    return longestSentence;
}


console.log(longestWord("javascript is powerful"));

// Reverse the word of the full sentance-->
// eg.., "ravi is a good boy" => "ivar si a doog yob"


// Approach-->

// split the sentence based on space => ["ravi" "is" "a" "good" "boy"]

// loop over the array and reverse each word using reverse function and keep counting with next words "ivar si a doog yob"

function reverse(str) {

    if (str.length == 0) {
        return ""
    }
    return reverse(str.slice(1)) + str[0]
}

function reverseWord(sent) {

    let words = sent.split(" ")
    for(let i = 0; i < words.length; i++) {
        words[i] = reverse(words[i])
    }
    return words.join(" ");
    
}

console.log(reverseWord("ravi is a good boy"));
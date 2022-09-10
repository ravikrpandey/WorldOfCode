
// Find longest substring

function longestSubstring(str) {
    
    if(str.length == 0) {
        return 0;
    }

    let start = 0; // start of the window
    let lastOccurence = 0; // contains last occurence index of a character
    let maxWindowSize = 1;

    for(let end = 0; end < str.length; end++) {

        //if character occured previsouly
        if(lastOccurence[str[end]] != undefined && lastOccurence[str[end]] >= 0) {

            start = Math.max(start, lastOccurence[str[end]] + 1);
        }
        lastOccurence[str[end]] = end;

        maxWindowSize = Math.max(maxWindowSize, end - start + 1)
    }
console.log(maxWindowSize)

}
longestSubstring("ravi1235")
// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    freq = {}
    for(let char of str){
        if(Object.keys(freq).indexOf(char) == -1){
            freq[char] = 1
        } else {
            freq[char]++
        }
    }
    return Object.keys(freq)[Object.values(freq).indexOf(Math.max(parseInt(Object.values(freq))))]
    
}

module.exports = maxChar;

// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'



// function reverse(str) {
//     return str.split("").reverse().join("")
// }

function reverse(str){
    reversed = "";
    for(i = str.length - 1; i >= 0; i--){
        reversed += (str[i])
    }
    return reversed
}



module.exports = reverse;

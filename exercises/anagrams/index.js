// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    
    if (stringA.length != stringB.length){
        return false;
    }
    let A = stringA.toLowerCase().split("").sort().join("");
    let B = stringB.toLowerCase().split("").sort().join("");
    while(true){
        if(A.charCodeAt(0) < 97){
            A.shift();
        }else{
            break;
        }
    }
    while(true){
        if(A.charCodeAt(A.length - 1) > 122){
            A.pop();
        }else{
            break;
        }
    }
    while(true){
        if(B.charCodeAt(0) < 97){
            B.shift();
        }else{
            break;
        }
    }
    while(true){
        if(B.charCodeAt(B.length - 1) > 122){
            B.pop();
        }else{
            break;
        }
    }
    if(A == B){
        return true;
    }else{
        return false
    }
    }


module.exports = anagrams;



console.log(anagrams("A", "a"))
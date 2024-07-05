function palindrome(str){

    return (str.split("").reverse().join("")) === str
}

console.log(palindrome("abba"))
console.log(palindrome("abc"))
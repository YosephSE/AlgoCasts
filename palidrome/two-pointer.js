function palindrome(str){
    str = str.split("")
    let left = 0, right = str.length - 1
    while(left < right){
        if (str[left] !== str[right]){
            return false
        }
        left++
        right--
    }
    return true
}


console.log(palindrome("abba"))
console.log(palindrome("abc"))

function reverseString(str){
    str = str.split("")
    let left = 0, right = str.length - 1
    while(left < right){
        let temp = str[right]
        str[right] = str[left]
        str[left] = temp

        left++
        right--
    }
    return str.join("")
}

console.log(reverseString("apple"))
console.log(reverseString("hello"))
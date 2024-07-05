function reverseString(str){
    let reversed = []
    for(item of str){
        reversed.unshift(item)
    }
    return reversed.join("")
}


console.log(reverseString("apple"))
console.log(reverseString("hello"))
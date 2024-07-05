function reverseString(str){
    let reversed = ''
    for(item of str){
        reversed = item + reversed;
    }
    return reversed
}


console.log(reverseString("apple"))
console.log(reverseString("hello"))
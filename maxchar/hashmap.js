function maxChar(str){
    hashmap = {}
    for(i of str){
        if (Object.keys(hashmap).includes(i)){
            hashmap[i] += 1
        }else{
            hashmap[i] = 1
        }
    }
    return Object.keys(hashmap)[Object.values(hashmap).indexOf(Math.max(...Object.values(hashmap)))]
    
}

console.log(maxChar("abcccca"))
console.log(maxChar("apple"))
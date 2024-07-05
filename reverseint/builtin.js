function reverseInt(num){
    if(num < 0){
        return Number(Math.abs(num).toString().split("").reverse().join("")) * -1
    }
    return Number(num.toString().split("").reverse().join(""))
}

console.log(reverseInt(15))
console.log(reverseInt(981))
console.log(reverseInt(500))
console.log(reverseInt(-15))
console.log(reverseInt(-90))
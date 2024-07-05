function reverseInt(num){
    return Number(Math.abs(num).toString().split("").reverse().join("")) * Math.sign(num)
}

console.log(reverseInt(15))
console.log(reverseInt(981))
console.log(reverseInt(500))
console.log(reverseInt(-15))
console.log(reverseInt(-90))
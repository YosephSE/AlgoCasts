function reverseInt(num){
    let sign = Math.sign(num)

    num = Math.abs(num).toString().split("")
    let l = 0, r = num.length - 1
    while (l < r){
        temp = num[l]
        num[l] = num[r]
        num[r] = temp
        l++
        r--
    }
    return (Number(num.reduce((x, y) => x + y))) * sign
}

console.log(reverseInt(54))
console.log(reverseInt(15))
console.log(reverseInt(981))
console.log(reverseInt(500))
console.log(reverseInt(-15))
console.log(reverseInt(-90))
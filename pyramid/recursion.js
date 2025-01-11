function pyramid(n, i = 1, stairs = 1){
    if (n <= 0) return

    console.log(" ".repeat(n - i) + "*".repeat(stairs) + ' '.repeat(n - i))

    pyramid(n - 1, i, stairs + 2)

}

pyramid(15)
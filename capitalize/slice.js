function capitalize(str){
    let arr = str.split(" ")
    for(let i in arr){
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
    }

    return arr.join(" ")
}


console.log(capitalize("hello world"))
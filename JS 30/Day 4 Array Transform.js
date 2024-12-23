let map = function(arr, fn){
    const res = []
    for(let i in arr){
        res.push(fn(arr[i], i))
    }
    return res;
    // return arr.map(fn)
}
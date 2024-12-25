let arr = [0, 10, 20, 30];
let fn = (n) => {
  return n > 10;
};

// let filter = function(arr, fn){
//     return arr.filter(fn)

// }
let filter = function(arr, fn){
    let res = []
    for(let item of arr){
        if(fn(item)){
            res.push(item)
        }
    }
    return res;

}




console.log(filter(arr, fn))
let arr = [0, 10, 20, 30];
let fn = (n) => {
  return n > 10;
};

let filter = function(arr, fn){
    return arr.filter(fn)

}




console.log(filter(arr, fn))
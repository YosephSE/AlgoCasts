let array = [1, 2, 3, 4, 5];
let size = 4;

function chunk(array, size) {
  let res = [];
  for (i = 0; i < array.length; i += size) {
    res.push(array.slice(i, i + size));
  }
  return res;
}

console.log(chunk(array, size));

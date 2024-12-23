let createCounter = function (init) {
  let count = init;
  return {
    increment: function () {
      return ++count;
    },
    decrement: function () {
      return --count;
    },
    reset: function(){
        return count = init;
    }
  };
};

let counter = createCounter(8);

console.log(counter.increment());
console.log(counter.decrement())
console.log(counter.decrement())
console.log(counter.decrement())
console.log(counter.decrement())
console.log(counter.decrement())
console.log(counter.reset())

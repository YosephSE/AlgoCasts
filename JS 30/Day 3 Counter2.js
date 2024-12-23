let createCounter = function (init) {
  let count = init;
  return {
    increment: () => {
      return ++count;
    },
    decrement: () => {
      return --count;
    },
    reset: () => {
      return (count = init);
    },
  };
};

// let counter = createCounter(8);

class Counter {
  constructor(init) {
    this.init = init;
    this.count = init;
  }

  increment() {
    return ++this.count;
  }

  decrement() {
    return --this.count;
  }

  reset() {
    return (this.count = this.init);
  }
}

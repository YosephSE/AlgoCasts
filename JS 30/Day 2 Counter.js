class Counter {
  constructor(n) {
    this.n = n;
  }
  increment() {
    return this.n++;
  }
}

const counter = new Counter(1);
console.log(counter.n)
counter.increment()
console.log(counter.n)


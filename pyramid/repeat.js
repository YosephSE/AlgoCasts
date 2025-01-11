function pyramid(n) {
  let steps = 1;
  let i = 0
  while(i < n){
    console.log(' '.repeat(n - i) + '*'.repeat(steps) + ' '.repeat(n - i))
    i++
    steps += 2
  }
}

pyramid(6);

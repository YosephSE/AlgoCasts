function steps(n, stair = 1) {
  if (n == 0) {
    return;
  }
  console.log("# ".repeat(stair) + "  ".repeat(n - 1));
  steps(n - 1, stair + 1);
}

steps(5);

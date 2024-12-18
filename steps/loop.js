function steps(n) {
  for (i = 1; i <= n; i++) {
    console.log("#".repeat(i));
    for (j = n - 1; j >= 0; j--) {
      console.log("*".repeat(j));
    }
  }
}

steps(4);
